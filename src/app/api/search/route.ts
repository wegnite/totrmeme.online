import { docsI18nConfig } from '@/lib/docs/i18n';
import { source } from '@/lib/source';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { createI18nSearchAPI } from 'fumadocs-core/search/server';

/**
 * Fumadocs i18n search configuration
 *
 * 1. For internationalization, use createI18nSearchAPI:
 * https://fumadocs.dev/docs/headless/search/orama#internationalization
 *
 * 2. For special languages like Chinese, configure custom tokenizers:
 * https://fumadocs.dev/docs/headless/search/orama#special-languages
 * https://docs.orama.com/open-source/supported-languages/using-chinese-with-orama
 */
// 让该 API 在构建时不执行重型初始化，改为请求时懒加载
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Cache the search API instance to avoid rebuilding the index on every request
let cachedSearchAPI: ReturnType<typeof createI18nSearchAPI> | null = null;

/**
 * Fumadocs 15.2.8 fixed the bug that the `locale` is not passed to the search API
 *
 * ref:
 * https://x.com/indie_maker_fox/status/1913457083997192589
 *
 * NOTICE:
 * Fumadocs 15.1.2 has a bug that the `locale` is not passed to the search API
 * 1. Wrap the GET handler for debugging docs search
 * 2. Detect locale from referer header, and add the locale parameter to the search API
 * 3. Fumadocs core searchAPI get `locale` from searchParams, and pass it to the search API
 * https://github.com/fuma-nama/fumadocs/blob/dev/packages/core/src/search/orama/create-endpoint.ts#L19
 */
function getOrCreateSearchAPI() {
  if (!cachedSearchAPI) {
    cachedSearchAPI = createI18nSearchAPI('advanced', {
      i18n: docsI18nConfig,
      indexes: source.getLanguages().flatMap(({ language, pages }) =>
        pages.map((page) => ({
          title: page.data.title,
          description: page.data.description,
          structuredData: page.data.structuredData,
          id: page.url,
          url: page.url,
          locale: language,
        }))
      ),
      localeMap: {
        zh: {
          components: { tokenizer: createTokenizer() },
          search: { threshold: 0, tolerance: 0 },
        },
        en: 'english',
      },
      search: { limit: 20 },
    });
  }
  return cachedSearchAPI;
}

export const GET = async (request: Request) => {
  try {
    const searchAPI = getOrCreateSearchAPI();
    return await searchAPI.GET(request);
  } catch (err) {
    console.error('[docs search] init error:', err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
};
