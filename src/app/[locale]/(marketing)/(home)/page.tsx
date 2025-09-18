import { TotrVideoShowcase } from '@/components/totr/TotrVideoShowcase';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { constructMetadata } from '@/lib/metadata';
import { getUrlWithLocale } from '@/lib/urls/urls';
import { Clock, Download, Play, TrendingUp, Zap } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Link from 'next/link';

const homeCopy = {
  en: {
    metadata: {
      title:
        'TOTR Meme (TOTЯ, Тотя) Meaning & Free Generator | TOTR Meme Online',
      description:
        'Learn what the TOTR/TOTЯ meme means, watch the original clip, and remix it in our free online generator with parody-safe templates. Includes timeline, TOTR vs ПЫ FAQ, and downloads.',
    },
    schema: {
      faq: [
        {
          question: 'What is TOTR meme?',
          answer:
            'TOTR (TOTЯ, Тотя) is a viral Russian "brainrot" meme featuring two naked SpongeBob characters. It started on September 1, 2025, by TikToker @ddghfjwiedi3929 and gained over 2 million views within two weeks.',
        },
        {
          question: 'What does TOTR mean?',
          answer:
            'TOTR is written as “Тотя ❤️” in Russian Cyrillic. It is part of the Russian internet brainrot culture, often paired with the “Stay” song remix by The Kid LAROI and Justin Bieber.',
        },
        {
          question: 'How do I make a TOTR meme?',
          answer:
            'Use our free TOTR meme generator: 1) choose a SpongeBob template, 2) add “тотя❤️” text, 3) export as PNG or MP4. All templates are parody-safe for social media.',
        },
      ],
      videoDescription:
        'Watch the original TOTR (Тотя ❤️) meme videos that started the viral Russian SpongeBob trend. Includes the first video by @ddghfjwiedi3929 and popular variations.',
    },
    hero: {
      badge: '🔥 Trending Now: 2M+ Views',
      title: 'What is TOTR Meme? (TOTЯ, Тотя) 🧽',
      subtitle:
        'The viral Russian SpongeBob "brainrot" phenomenon explained + Free Generator',
      primaryCta: 'Create TOTR Meme',
      secondaryCta: 'Download Templates',
    },
    quickAnswer: {
      title: 'Quick Answer: What is TOTR?',
      cards: [
        {
          heading: '🎭 What it is:',
          text: 'TOTR (written as “Тотя ❤️” in Russian) is a viral meme featuring two naked SpongeBobs walking across the screen, often paired with the “Stay” remix.',
        },
        {
          heading: '📅 Origin:',
          text: 'Started September 1, 2025 by TikToker @ddghfjwiedi3929. Gained 2M+ views in 2 weeks as part of Russian brainrot culture.',
        },
      ],
      tags: ['TOTR', 'TOTЯ', 'Тотя', 'totya', 'totia'],
    },
    videoSection: {
      title: 'Watch: TOTR Meme Evolution 📹',
      subtitle:
        'Interactive timeline showing how TOTR became a viral phenomenon',
      simulatorTitle: 'TOTR Meme Simulator 🎮',
      simulatorSubtitle:
        'Experience the authentic TOTR format without leaving our site',
      simulatorEmbed: {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/vJvs5MtCtI4',
        externalUrl: 'https://www.youtube.com/shorts/vJvs5MtCtI4',
        button: 'Watch on YouTube',
      },
      screenStatusLabel: 'TikTok',
      screenCaption: '*Stay remix playing*',
      infoText:
        'Watch the original TOTЯ clip that sparked the trend, then remix it with our generator.',
      cta: 'Create Your Own TOTR Meme',
    },
    features: [
      {
        emoji: '🧽',
        title: 'Visual Elements',
        text: 'Two naked SpongeBobs in various poses, usually with purple or ocean aesthetics.',
      },
      {
        emoji: '❤️',
        title: 'Text Format',
        text: '“тотя❤️” in Cyrillic script, often stylised with gradients or glow effects.',
      },
      {
        emoji: '🎵',
        title: 'Audio Track',
        text: '“Stay” by The Kid LAROI & Justin Bieber, usually slowed or remixed.',
      },
    ],
    timelineHighlights: [
      {
        date: 'Sep 1, 2025',
        title: 'Birth of TOTR',
        description: '@ddghfjwiedi3929 posts the first тотя❤️ meme',
        stats: '2M+ views, 200K+ likes',
        color: 'bg-red-500',
      },
      {
        date: 'Sep 6, 2025',
        title: '3D Revolution',
        description: '@nukemost creates a viral 3D animation version',
        stats: '2M+ plays, 120K+ likes',
        color: 'bg-green-500',
      },
      {
        date: 'Sep 13, 2025',
        title: 'Mainstream Breakthrough',
        description: 'Celebrity crossovers bring TOTR to a wider audience',
        stats: '1.5M+ plays, viral spread',
        color: 'bg-orange-500',
      },
      {
        date: 'Present',
        title: 'Global Phenomenon',
        description: '4.9M+ posts across multiple platforms',
        stats: 'Roblox items, merchandise, remixes',
        color: 'bg-purple-500',
      },
    ],
    audioSection: {
      title: '🎵 Experience the TOTR Sound',
      subtitle: 'The audio that defined a generation of memes',
      track: 'Stay (TOTR Remix)',
      artist: 'Kid LAROI & Justin Bieber',
      badge: 'Viral',
      download: 'Download Audio',
      use: 'Use in Meme',
    },
    statsSection: {
      title: 'TOTR Community Stats 📊',
      items: [
        { value: '2M+', label: 'Total Views' },
        { value: '4.9M+', label: 'TikTok Posts' },
        { value: '120K+', label: 'Likes/Day' },
        { value: '50+', label: 'Language Variants' },
      ],
    },
    templates: {
      title: 'Free TOTR Templates Gallery 🖼️',
      subtitle: 'High-quality, parody-safe templates ready for customization',
      items: [
        {
          title: 'Classic TOTR',
          description: 'Original two SpongeBobs template',
          downloads: '15.2K',
        },
        {
          title: 'Purple TOTR',
          description: 'Purple aesthetic variant',
          downloads: '8.7K',
        },
        {
          title: 'Ocean TOTR',
          description: 'Underwater themed version',
          downloads: '6.3K',
        },
      ],
      useTemplate: 'Use Template',
      button: 'View All Templates (20+ Available)',
    },
    howTo: {
      title: 'How to Make TOTR Meme (3 Easy Steps) 🎨',
      subtitle: 'Create your own viral TOTR content with our free generator',
      steps: [
        {
          title: 'Choose Template',
          description:
            'Select from our collection of SpongeBob TOTR templates. All images are parody-safe for social media.',
        },
        {
          title: 'Add Text',
          description:
            'Add “тотя❤️” or your own twist. Adjust fonts, colours, and placement for an authentic look.',
        },
        {
          title: 'Export & Share',
          description:
            'Download as PNG, JPG, or MP4 – perfect for TikTok, Instagram, YouTube, or any platform.',
        },
      ],
      button: 'Start Creating Your TOTR Meme',
    },
    vsSection: {
      title: 'TOTR vs ПЫ: Russian Brainrot Battle 🥊',
      subtitle: 'Understanding the two dominant Russian meme trends of 2025',
      totr: {
        title: 'TOTR (Тотя ❤️)',
        attributes: [
          { label: 'Characters:', value: 'Two SpongeBobs' },
          { label: 'Audio:', value: '“Stay” remix' },
          { label: 'Vibe:', value: 'Wholesome chaos' },
          { label: 'Started:', value: 'Sep 1, 2025' },
        ],
        description:
          'Known for its purple aesthetic and “тотя❤️” overlay. Popular on TikTok with 4.9M+ posts.',
      },
      py: {
        title: 'ПЫ Meme',
        attributes: [
          { label: 'Characters:', value: 'Minion-potato hybrid' },
          { label: 'Audio:', value: 'Various remixes' },
          { label: 'Vibe:', value: 'Absurd humour' },
          { label: 'Started:', value: 'Early 2025' },
        ],
        description:
          'Features distorted Minion characters with potato elements. Often positioned as TOTR’s counterpart.',
      },
      button: 'Full Comparison & Community Vote',
    },
    timelineSection: {
      title: 'TOTR Timeline: From 0 to 2M Views 📈',
      subtitle: 'How a Russian SpongeBob meme conquered the internet',
      steps: [
        {
          badge: ['Sep 1, 2025', 'Origin'],
          heading: 'First TOTR Meme Posted',
          text: 'TikToker @ddghfjwiedi3929 posts the original “тотя❤️” meme featuring two naked SpongeBobs with the Stay remix.',
        },
        {
          badge: ['Sep 6, 2025', 'Viral'],
          heading: '3D Animation Breakthrough',
          text: '@nukemost drops a 3D animated version that amasses 2M+ plays and 120K likes in one week.',
        },
        {
          badge: ['Sep 13, 2025', 'Mainstream'],
          heading: 'Celebrity Crossover',
          text: '@julianwelsh7’s Kirk Franklin apple edit brings TOTR into mainstream TikTok conversations.',
        },
        {
          badge: ['Present', 'Global'],
          heading: '4.9M+ Posts & Counting',
          text: 'TOTR spreads worldwide through merchandise, Roblox items, and endless remixes across every network.',
        },
      ],
      button: 'View Full Timeline with Embeds',
    },
    srOnly: {
      spellingsTitle: 'TOTR Meme Spellings and Pronunciation Guide',
      spellings: [
        'TOTR meme - English spelling',
        'TOTЯ meme - Cyrillic R variation',
        'totya meme - lowercase variation',
        'totia meme - alternative spelling',
        'Тотя мем - Russian spelling (Pronunciation: “TOH-tya”)',
        'TOTR vs ПЫ - comparison topic',
        'SpongeBob TOTR - character association',
        'TOTR template - meme template searches',
        'тотя❤️ - original text with heart emoji',
        'Russian brainrot - cultural context',
      ],
      audioTitle: 'TOTR Audio and Music',
      audioText:
        'The TOTR meme is most commonly paired with a remix of “Stay” by The Kid LAROI and Justin Bieber. This audio became integral to the meme’s viral success on TikTok and other social platforms.',
      tipsTitle: 'TOTR Creation Tips',
      tipsText:
        'To create authentic TOTR memes: use two SpongeBobs without pants, add a purple or ocean gradient, include “тотя❤️” text, and sync with the Stay remix. Our generator includes every required asset.',
    },
  },
  zh: {
    metadata: {
      title: 'TOTR Meme (TOTЯ, Тотя) 含义与免费生成器 | TOTR Meme Online',
      description:
        '了解 TOTR/TOTЯ 表情梗的含义，查看原始视频，并使用免费的在线生成器快速二创。包含时间线、TOTR vs ПЫ 对比与模板下载。',
    },
    schema: {
      faq: [
        {
          question: 'TOTR 表情是什么？',
          answer:
            'TOTR（又写作 TOTЯ、Тотя）是俄罗斯 TikTok 上走红的“脑腐”梗，画面是两只没穿裤子的海绵宝宝。2025 年 9 月 1 日由 @ddghfjwiedi3929 首发，两周内播放量破 200 万。',
        },
        {
          question: 'TOTR 代表什么意思？',
          answer:
            'TOTR 的俄语拼写是 “Тотя ❤️”，常配上 Kid LAROI 与 Justin Bieber 的歌曲《Stay》混音版，是俄语圈脑腐文化的一部分。',
        },
        {
          question: '如何制作 TOTR 表情？',
          answer:
            '使用我们的 TOTR 生成器：1）选择海绵宝宝模板；2）加入 “тотя❤️” 或自定义文字；3）导出 PNG/MP4，即可分享到社交平台。所有模板均为安全的恶搞素材。',
        },
      ],
      videoDescription:
        '观看引爆 TOTR（Тотя ❤️）热潮的原始视频合集，包含 @ddghfjwiedi3929 首条作品与热门二创版本。',
    },
    hero: {
      badge: '🔥 热度飙升：播放 200 万+',
      title: 'TOTR Meme 是什么？(TOTЯ, Тотя) 🧽',
      subtitle: '拆解这股来自俄罗斯的海绵宝宝脑腐热潮，并提供免费生成器',
      primaryCta: '立即制作 TOTR 表情',
      secondaryCta: '下载模板',
    },
    quickAnswer: {
      title: '快速解答：TOTR 到底是什么？',
      cards: [
        {
          heading: '🎭 核心设定：',
          text: 'TOTR（俄语写作 “Тотя ❤️”）是两只海绵宝宝穿过画面的短动画，通常配上《Stay》混音版。',
        },
        {
          heading: '📅 起源：',
          text: '2025 年 9 月 1 日由 TikTok 用户 @ddghfjwiedi3929 发布，两周内冲上 200 万播放，成为俄语脑腐代表。',
        },
      ],
      tags: ['TOTR', 'TOTЯ', 'Тотя', 'totya', 'totia'],
    },
    videoSection: {
      title: '观看：TOTR 进化史 📹',
      subtitle: '交互时间线带你了解 TOTR 怎么走红',
      simulatorTitle: 'TOTR 表情模拟器 🎮',
      simulatorSubtitle: '无需离站即可体验最原汁原味的 TOTR 格式',
      simulatorEmbed: {
        type: 'youtube',
        src: 'https://www.youtube.com/embed/vJvs5MtCtI4',
        externalUrl: 'https://www.youtube.com/shorts/vJvs5MtCtI4',
        button: '在 YouTube 上观看',
      },
      screenStatusLabel: 'TikTok',
      screenCaption: '*播放 Stay 混音*',
      infoText: '先看引爆脑腐潮的 TOTЯ 原始短片，再用我们的生成器快速二创。',
      cta: '我也要做 TOTR 表情',
    },
    features: [
      {
        emoji: '🧽',
        title: '视觉元素',
        text: '两只没穿裤子的海绵宝宝，常见紫色或海洋背景。',
      },
      {
        emoji: '❤️',
        title: '文字格式',
        text: '“тотя❤️” 的西里尔文字，常带渐变或发光特效。',
      },
      {
        emoji: '🎵',
        title: '配乐',
        text: 'Kid LAROI & Justin Bieber 的《Stay》慢速或再混音版本。',
      },
    ],
    timelineHighlights: [
      {
        date: '2025 年 9 月 1 日',
        title: 'TOTR 诞生',
        description: '@ddghfjwiedi3929 发布首条 “тотя❤️” 视频',
        stats: '播放 200 万+，点赞 20 万+',
        color: 'bg-red-500',
      },
      {
        date: '2025 年 9 月 6 日',
        title: '3D 版本爆火',
        description: '@nukemost 制作 3D 动画版，迅速走红',
        stats: '播放 200 万+，点赞 12 万+',
        color: 'bg-green-500',
      },
      {
        date: '2025 年 9 月 13 日',
        title: '主流破圈',
        description: '明星混剪让 TOTR 被更多人认识',
        stats: '播放 150 万+，热议升级',
        color: 'bg-orange-500',
      },
      {
        date: '现在',
        title: '全球化浪潮',
        description: '各平台累计 490 万+ 相关作品',
        stats: '延伸到游戏、周边与混音',
        color: 'bg-purple-500',
      },
    ],
    audioSection: {
      title: '🎵 感受 TOTR 的声音',
      subtitle: '这段音轨点燃了整个脑腐狂潮',
      track: 'Stay (TOTR Remix)',
      artist: 'Kid LAROI & Justin Bieber',
      badge: '疯传',
      download: '下载音频',
      use: '用于表情',
    },
    statsSection: {
      title: 'TOTR 社群热度 📊',
      items: [
        { value: '200 万+', label: '总播放量' },
        { value: '490 万+', label: 'TikTok 相关贴文' },
        { value: '12 万+', label: '日均点赞量' },
        { value: '50+', label: '语言变体' },
      ],
    },
    templates: {
      title: 'TOTR 模板图库 🖼️',
      subtitle: '高质量、可放心恶搞的素材包',
      items: [
        {
          title: '经典 TOTR',
          description: '双海绵宝宝原版场景',
          downloads: '1.52 万',
        },
        {
          title: '紫色 TOTR',
          description: '高饱和紫色系风格',
          downloads: '8700',
        },
        {
          title: '海洋 TOTR',
          description: '水蓝色海底主题',
          downloads: '6300',
        },
      ],
      useTemplate: '使用模板',
      button: '查看全部模板（20+）',
    },
    howTo: {
      title: '3 步制作 TOTR 表情 🎨',
      subtitle: '使用在线生成器，即刻完成你的二创',
      steps: [
        {
          title: '选择模板',
          description: '挑选官方风格的海绵宝宝模板，所有素材均可安全使用。',
        },
        {
          title: '添加文字',
          description: '输入 “тотя❤️” 或自定义文案，调整字体、颜色与位置。',
        },
        {
          title: '导出分享',
          description:
            '支持 PNG、JPG、MP4 格式，一键分享至 TikTok、B站或任何平台。',
        },
      ],
      button: '马上开始创作',
    },
    vsSection: {
      title: 'TOTR vs ПЫ：俄罗斯脑腐对决 🥊',
      subtitle: '两大 2025 热门梗的差异速览',
      totr: {
        title: 'TOTR (Тотя ❤️)',
        attributes: [
          { label: '角色：', value: '两只海绵宝宝' },
          { label: '配乐：', value: '《Stay》混音' },
          { label: '氛围：', value: '温馨又疯狂' },
          { label: '首发：', value: '2025-09-01' },
        ],
        description:
          '标志性的紫色氛围与 “тотя❤️” 字样，TikTok 上相关作品已超 490 万篇。',
      },
      py: {
        title: 'ПЫ 梗',
        attributes: [
          { label: '角色：', value: '小黄人与土豆混合体' },
          { label: '配乐：', value: '多种洗脑混音' },
          { label: '氛围：', value: '荒诞搞笑' },
          { label: '首发：', value: '2025 年初' },
        ],
        description: '以扭曲的“小黄人洋芋”形象走红，常被拿来与 TOTR 对比。',
      },
      button: '查看完整对比与投票结果',
    },
    timelineSection: {
      title: 'TOTR 时间线：从 0 到 200 万播放 📈',
      subtitle: '看 TOTR 如何席卷全球',
      steps: [
        {
          badge: ['2025-09-01', '起源'],
          heading: '首条 TOTR 视频上线',
          text: 'TikTok 用户 @ddghfjwiedi3929 发布 “тотя❤️” 视频，24 小时破百万播放。',
        },
        {
          badge: ['2025-09-06', '爆红'],
          heading: '3D 动画登场',
          text: '@nukemost 的 3D 版本一周内播放量突破 200 万。',
        },
        {
          badge: ['2025-09-13', '主流'],
          heading: '明星混剪出圈',
          text: '@julianwelsh7 的 Kirk Franklin 苹果梗带动 TOTR 进入欧美视野。',
        },
        {
          badge: ['现在', '全球'],
          heading: '作品数持续增长',
          text: 'TOTR 延伸出周边、游戏模组与无数混音，成为 2025 年代表性脑腐。',
        },
      ],
      button: '查看完整时间线及嵌入',
    },
    srOnly: {
      spellingsTitle: 'TOTR 拼写与读音指南',
      spellings: [
        'TOTR meme - 英文写法',
        'TOTЯ meme - 使用反写 R 的变体',
        'totya meme - 常见小写写法',
        'totia meme - 其他常见拼法',
        'Тотя мем - 俄语写法（读音接近 “托-亚”）',
        'TOTR vs ПЫ - 比较相关搜索',
        'SpongeBob TOTR - 海绵宝宝联想',
        'TOTR template - 模板下载相关',
        'тотя❤️ - 原始文字 + 爱心表情',
        'Russian brainrot - 俄语脑腐文化',
      ],
      audioTitle: 'TOTR 的音频素材',
      audioText:
        'TOTR 最常使用的音轨是 Kid LAROI 与 Justin Bieber 的《Stay》混音，这段旋律让梗迅速席卷 TikTok 与其他平台。',
      tipsTitle: 'TOTR 创作小贴士',
      tipsText:
        '想还原 TOTR 风格：使用双海绵宝宝、紫色或海洋背景、加入 “тотя❤️” 文本，并搭配 Stay 混音。生成器已为你准备好所有素材。',
    },
  },
} as const;

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = homeCopy[locale.startsWith('zh') ? 'zh' : 'en'];

  return constructMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    canonicalUrl: getUrlWithLocale('/', locale),
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const copy = homeCopy[locale.startsWith('zh') ? 'zh' : 'en'];

  const baseUrl = getUrlWithLocale('', locale);

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale,
    mainEntity: copy.schema.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } as const;

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TOTR Meme Online',
    url: baseUrl,
    description: copy.metadata.description,
    inLanguage: locale,
  } as const;

  const jsonLdVideoObject = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Original TOTR Meme Video Collection',
    description: copy.schema.videoDescription,
    thumbnailUrl: `${baseUrl}/og.png`,
    uploadDate: '2025-09-01',
    duration: 'PT15S',
    contentUrl: 'https://www.tiktok.com/tag/%D1%82%D0%BE%D1%82%D1%8F',
    embedUrl: 'https://www.tiktok.com/tag/%D1%82%D0%BE%D1%82%D1%8F',
    inLanguage: ['en', 'ru'],
    keywords:
      'totr, тотя, totya, spongebob meme, russian brainrot, stay remix, viral tiktok',
    creator: {
      '@type': 'Person',
      name: '@ddghfjwiedi3929',
      url: 'https://www.tiktok.com/@ddghfjwiedi3929',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TOTR Meme Online',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/WatchAction',
        userInteractionCount: 2000000,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/LikeAction',
        userInteractionCount: 200000,
      },
    ],
  } as const;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideoObject) }}
      />

      <section className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              {copy.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {copy.hero.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {copy.hero.subtitle}
            </p>
          </div>

          <Card className="mb-8 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                {copy.quickAnswer.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                {copy.quickAnswer.cards.map((item) => (
                  <div key={item.heading}>
                    <h3 className="font-semibold mb-2">{item.heading}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {copy.quickAnswer.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button size="lg" asChild>
              <Link href={getUrlWithLocale('/generator/totr', locale)}>
                <Play className="w-4 h-4 mr-2" />
                {copy.hero.primaryCta}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={getUrlWithLocale('/download/totr-template', locale)}>
                <Download className="w-4 h-4 mr-2" />
                {copy.hero.secondaryCta}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {copy.videoSection.title}
            </h2>
            <p className="text-muted-foreground">
              {copy.videoSection.subtitle}
            </p>
          </div>

          <div className="mb-12 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                {copy.videoSection.simulatorTitle}
              </h3>
              <p className="text-muted-foreground">
                {copy.videoSection.simulatorSubtitle}
              </p>
            </div>

            <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-[9/16] relative bg-black">
                {copy.videoSection.simulatorEmbed?.type === 'youtube' ? (
                  <iframe
                    src={`${copy.videoSection.simulatorEmbed.src}?rel=0&modestbranding=1`}
                    title="TOTR meme original clip"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                ) : null}
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-muted-foreground mb-4">
                {copy.videoSection.infoText}
              </p>
              {copy.videoSection.simulatorEmbed?.externalUrl && (
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <Button asChild variant="outline">
                    <a
                      href={copy.videoSection.simulatorEmbed.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {copy.videoSection.simulatorEmbed.button}
                    </a>
                  </Button>
                </div>
              )}
              <Button asChild>
                <Link href={getUrlWithLocale('/generator/totr', locale)}>
                  {copy.videoSection.cta}
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {copy.features.map((feature) => (
              <Card key={feature.title} className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  {feature.emoji}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.text}</p>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              TOTR Evolution Timeline 📈
            </h3>

            <div className="space-y-6">
              {copy.timelineHighlights.map((item, index) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div
                    className={`flex-shrink-0 w-4 h-4 ${item.color} rounded-full mt-2`}
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{item.date}</Badge>
                      <h4 className="font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {item.stats}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xl font-semibold mb-2">
              {copy.audioSection.title}
            </h3>
            <p className="text-muted-foreground">
              {copy.audioSection.subtitle}
            </p>
          </div>

          <div className="max-w-md mx-auto bg-background rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{copy.audioSection.track}</p>
                <p className="text-sm text-muted-foreground">
                  {copy.audioSection.artist}
                </p>
              </div>
              <Badge>{copy.audioSection.badge}</Badge>
            </div>

            <div className="flex items-center gap-1 h-12 mb-4">
              {Array.from({ length: 50 }, (_, i) => (
                <div
                  key={i}
                  className="bg-primary/30 flex-1 rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 60 + 20}%`,
                    animationDelay: `${i * 50}ms`,
                  }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                {copy.audioSection.download}
              </Button>
              <Button size="sm" className="flex-1" asChild>
                <Link href={getUrlWithLocale('/generator/totr', locale)}>
                  {copy.audioSection.use}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TotrVideoShowcase />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{copy.vsSection.title}</h2>
            <p className="text-muted-foreground">{copy.vsSection.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  🧽
                </div>
                <CardTitle className="text-purple-700 dark:text-purple-300">
                  {copy.vsSection.totr.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {copy.vsSection.totr.attributes.map((attr) => (
                    <div key={attr.label}>
                      <strong>{attr.label}</strong> {attr.value}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {copy.vsSection.totr.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                  🥔
                </div>
                <CardTitle className="text-yellow-700 dark:text-yellow-300">
                  {copy.vsSection.py.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {copy.vsSection.py.attributes.map((attr) => (
                    <div key={attr.label}>
                      <strong>{attr.label}</strong> {attr.value}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {copy.vsSection.py.description}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href={getUrlWithLocale('/compare/totr-vs-py', locale)}>
                <TrendingUp className="w-4 h-4 mr-2" />
                {copy.vsSection.button}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {copy.timelineSection.title}
            </h2>
            <p className="text-muted-foreground">
              {copy.timelineSection.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {copy.timelineSection.steps.map((step, index) => (
              <div key={step.heading} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{step.badge[0]}</Badge>
                    <Badge>{step.badge[1]}</Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{step.heading}</h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link href={getUrlWithLocale('/trends/totr', locale)}>
                <Clock className="w-4 h-4 mr-2" />
                {copy.timelineSection.button}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{copy.howTo.title}</h2>
            <p className="text-muted-foreground">{copy.howTo.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {copy.howTo.steps.map((step, index) => (
              <Card key={step.title} className="text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold rounded-full ${
                      index === 0
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300'
                        : index === 1
                          ? 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300'
                          : 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href={getUrlWithLocale('/generator/totr', locale)}>
                <Play className="w-4 h-4 mr-2" />
                {copy.howTo.button}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {copy.statsSection.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {copy.statsSection.items.map((item) => (
              <Card key={item.label} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {item.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{copy.templates.title}</h2>
            <p className="text-muted-foreground">{copy.templates.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {copy.templates.items.map((template) => (
              <Card key={template.title} className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <div className="text-4xl">🧽</div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{template.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {template.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      <Download className="w-3 h-3 mr-1" />
                      {template.downloads}
                    </Badge>
                    <Button size="sm" variant="outline">
                      {copy.templates.useTemplate}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href={getUrlWithLocale('/download/totr-template', locale)}>
                {copy.templates.button}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="sr-only">
        <h2>{copy.srOnly.spellingsTitle}</h2>
        <ul>
          {copy.srOnly.spellings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>{copy.srOnly.audioTitle}</h3>
        <p>{copy.srOnly.audioText}</p>

        <h3>{copy.srOnly.tipsTitle}</h3>
        <p>{copy.srOnly.tipsText}</p>
      </div>
    </>
  );
}
