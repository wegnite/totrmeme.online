import AdsterraNativeBanner from '@/analytics/adsterra-native';
import { HomeHero } from '@/components/marketing/home-hero';
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
      title: 'What Is The TOTR Meme? - The Complete Guide & History',
      description:
        'Your ultimate guide to the TOTR meme. We dive deep into its origin, meaning, and why it went viral. Includes a full history and the best examples.',
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
    entrySection: {
      title: 'Browse Our Trend Hubs',
      subtitle:
        'Jump into the launch trackers and meme playbooks visitors are already searching for.',
      categories: [
        {
          label: 'Game Launches',
          blurb:
            'Release schedules, limited editions, and monetization-ready angles.',
          links: [
            {
              href: '/ghost-of-yotei',
              title: 'Ghost of Yōtei Launch Hub',
              badge: 'New',
              description:
                'Timeline, PS5 bundles, Photo Mode upgrades, and ad placement ideas to convert PS5 hype.',
            },
          ],
        },
        {
          label: 'AI Meme Trends',
          blurb:
            'Prompt formulas, creator workflows, and distribution checklists.',
          links: [
            {
              href: '/meme/ghostface-ai-picture',
              title: 'Ghostface AI Picture Guide',
              badge: 'Seasonal',
              description:
                'Gemini prompts, toolkit breakdowns, and Shorts strategy for the Halloween boom.',
            },
            {
              href: '/meme/scream-ai-picture',
              title: 'Scream AI Challenge',
              badge: 'Trending',
              description:
                'Production pipeline, keyword positioning, and moderation tips for the viral challenge.',
            },
            {
              href: '/meme/chicken-stars-meme',
              title: 'Chicken Stars Meme Guide',
              badge: 'New',
              description:
                'Audio credits, CapCut starter packs, and posting cadence for the niche brainrot loop.',
            },
            {
              href: '/generator/totr',
              title: 'TOTR Meme Generator',
              badge: 'Core',
              description:
                'Remix the original TOTR format with drag-and-drop templates and audio timing.',
            },
          ],
        },
        {
          label: 'TOTR Foundations',
          blurb:
            'Explain the meme’s meaning, text, and cultural roots for new fans.',
          links: [
            {
              href: '/what-is-totr',
              title: 'What is TOTR?',
              description:
                'Full primer covering origins, timeline, and why the meme exploded globally.',
            },
            {
              href: '/totr-meaning',
              title: 'TOTR Meaning',
              description:
                'Language breakdown, translation notes, and how creators interpret “тотя❤️”.',
            },
            {
              href: '/totr-text',
              title: 'TOTR Text Pack',
              description:
                'Copy-paste symbols and formatting packs ready for captions and chats.',
            },
          ],
        },
      ],
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
    launchSection: {
      title: 'Launch Playbooks to Capture Fresh Traffic',
      subtitle:
        'Leverage our newest guides to answer high-intent October searches before competitors do.',
      cards: [
        {
          emoji: '🎮',
          badge: 'New',
          title: 'Ghost of Yōtei Launch Hub',
          description:
            'Release timeline, limited-edition PS5 bundles, Photo Mode hooks, and ad placement sandbox for monetizing the sequel hype.',
          href: '/ghost-of-yotei',
        },
        {
          emoji: '👻',
          badge: 'Seasonal',
          title: 'Ghostface AI Picture Guide',
          description:
            'Prompt formulas, toolkit comparisons, and Shorts distribution tips for the Halloween-ready Ghostface AI trend.',
          href: '/meme/ghostface-ai-picture',
        },
        {
          emoji: '😱',
          badge: 'Trending',
          title: 'Scream AI Picture Trend',
          description:
            'Step-by-step production chain, keyword positioning, and safety notes to keep the viral Scream challenge on your site.',
          href: '/meme/scream-ai-picture',
        },
        {
          emoji: '⭐',
          badge: 'New',
          title: 'Chicken Stars Meme Guide',
          description:
            'Explain the audio origin, share CapCut/Viggle prompts, and publish hashtags for the new brainrot loop.',
          href: '/meme/chicken-stars-meme',
        },
      ],
    },
    keywordSection: {
      title: 'Priority Keyword Checklist',
      subtitle:
        'Answer these intent-packed queries on-site to increase average session duration and ad impressions.',
      note: 'Updated October 2025 • Add to navigation or newsletters for fast wins.',
      items: [
        {
          keyword: 'ghost of yotei release date',
          intent: 'Launch timing',
          trend: '▲ Rapid',
          href: '/ghost-of-yotei',
        },
        {
          keyword: 'ghost of yotei editions',
          intent: 'Commercial research',
          trend: '▲ Hardware bundle demand',
          href: '/ghost-of-yotei',
        },
        {
          keyword: 'ghostface ai picture prompts',
          intent: 'Creator playbook',
          trend: '▲ Seasonal spike',
          href: '/meme/ghostface-ai-picture',
        },
        {
          keyword: 'scream ai picture challenge',
          intent: 'How-to / tutorial',
          trend: '▲ Viral Shorts',
          href: '/meme/scream-ai-picture',
        },
        {
          keyword: 'chicken stars meme meaning',
          intent: 'Trend explainer',
          trend: '▲ Brainrot niche',
          href: '/meme/chicken-stars-meme',
        },
      ],
    },
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
    socialProof: {
      title: 'Creators Are Keeping Viewers Hooked',
      subtitle:
        'Results from meme editors and fan accounts who switched to the TOTR generator',
      highlight: {
        quote:
          '“This is the only tool that nails the glowing тотя❤️ aura. My watch time jumped instantly.”',
        author: 'PixelLena — TikTok Animator',
      },
      metrics: [
        {
          value: '▲ 184%',
          label: 'Watch-time lift',
          description:
            'Clips exported with the TOTR generator keep viewers binging for longer across TikTok and Shorts.',
        },
        {
          value: '92%',
          label: 'Creators stay',
          description:
            'Most editors who try the TOTR kit publish three or more remixes in their first week.',
        },
        {
          value: '“Keeps followers binging.”',
          label: 'FrostByte — Shorts Editor',
          description:
            'Audience retention spikes on loops with the authentic purple gradient & audio timing.',
        },
      ],
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
    entrySection: {
      title: '精选入口：一键直达专题',
      subtitle: '把用户正在搜索的热门玩法集中呈现，分类浏览更高效。',
      categories: [
        {
          label: '游戏首发情报',
          blurb: '掌握发售时间、限定版本与商业化思路。',
          links: [
            {
              href: '/ghost-of-yotei',
              title: 'Ghost of Yōtei 发售指南',
              badge: 'NEW',
              description:
                '涵盖时间线、限量 PS5、Photo Mode 升级与广告位配置建议。',
            },
          ],
        },
        {
          label: 'AI 表情趋势',
          blurb: '提供提词、工具组合与分发策略，抓住短视频红利。',
          links: [
            {
              href: '/meme/ghostface-ai-picture',
              title: 'Ghostface AI 图片攻略',
              badge: '季节热点',
              description:
                'Gemini 提词、工具拆解、Shorts 分发步骤，适配万圣节档期。',
            },
            {
              href: '/meme/scream-ai-picture',
              title: 'Scream AI 挑战教程',
              badge: '热搜',
              description:
                '制作流程、关键词布局与安全提示，把挑战流量留在站内。',
            },
            {
              href: '/meme/chicken-stars-meme',
              title: 'Chicken Stars 趋势攻略',
              badge: '新品',
              description:
                '说明音源出处、CapCut/Viggle 提词与标签节奏，承接脑腐流量。',
            },
            {
              href: '/generator/totr',
              title: 'TOTR 在线生成器',
              badge: '核心',
              description: '拖拽式模板、音频自动对齐，快速做出正宗 TOTR 视频。',
            },
          ],
        },
        {
          label: 'TOTR 基础知识',
          blurb: '给新访客解释 TOTR 的含义、用语与文化背景。',
          links: [
            {
              href: '/what-is-totr',
              title: 'TOTR 是什么？',
              description: '完整梳理起源、时间线与爆红原因。',
            },
            {
              href: '/totr-meaning',
              title: 'TOTR 含义解析',
              description: '语言层面与文化语境详解 “тотя❤️”。',
            },
            {
              href: '/totr-text',
              title: 'TOTR 文字素材库',
              description: '复制俄语字符与美化文案，适配社交媒体。',
            },
          ],
        },
      ],
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
    launchSection: {
      title: '热点专题：提前锁住新流量',
      subtitle: '围绕当月搜索飙升的关键词布置内容，让访客愿意留下来深入探索。',
      cards: [
        {
          emoji: '🎮',
          badge: 'NEW',
          title: 'Ghost of Yōtei 首发情报站',
          description:
            '收录发售时间线、限定主机、Photo Mode 升级与广告位示例，帮助你承接 PS5 玩家需求。',
          href: '/ghost-of-yotei',
        },
        {
          emoji: '👻',
          badge: '季节热点',
          title: 'Ghostface AI 图片玩法',
          description:
            '提供 Gemini 提词、工具组合与 Shorts 分发策略，抓住万圣节创作者流量。',
          href: '/meme/ghostface-ai-picture',
        },
        {
          emoji: '😱',
          badge: '热搜',
          title: 'Scream AI Picture 挑战',
          description:
            '梳理制作流程、关键词布局与安全提醒，把病毒式挑战的流量留在站内。',
          href: '/meme/scream-ai-picture',
        },
        {
          emoji: '⭐',
          badge: '新品',
          title: 'Chicken Stars Meme 指南',
          description:
            '总结音源背景、CapCut/Viggle 模板与标签策略，快速接住脑腐访客。',
          href: '/meme/chicken-stars-meme',
        },
      ],
    },
    keywordSection: {
      title: '搜索需求清单',
      subtitle:
        '把这些问题的答案写在站内，同时安排内链与广告，自然延长停留时长。',
      note: '2025 年 10 月更新 · 可按活动加入导航或邮件订阅。',
      items: [
        {
          keyword: 'ghost of yotei release date',
          intent: '发售时间',
          trend: '▲ 搜索飙升',
          href: '/ghost-of-yotei',
        },
        {
          keyword: 'ghost of yotei editions',
          intent: '购买信息',
          trend: '▲ 限量主机需求',
          href: '/ghost-of-yotei',
        },
        {
          keyword: 'ghostface ai picture prompts',
          intent: '制作教程',
          trend: '▲ 季节主题',
          href: '/meme/ghostface-ai-picture',
        },
        {
          keyword: 'scream ai picture challenge',
          intent: '玩法指南',
          trend: '▲ 短视频爆款',
          href: '/meme/scream-ai-picture',
        },
        {
          keyword: 'chicken stars meme',
          intent: '梗图解读',
          trend: '▲ Nich 热词',
          href: '/meme/chicken-stars-meme',
        },
      ],
    },
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
    socialProof: {
      title: '创作者的真实反馈',
      subtitle: '使用 TOTR 生成器后，账号数据和停留时长显著提升',
      highlight: {
        quote: '“只有这里能还原 тотя❤️ 的发光质感，完播率直接起飞。”',
        author: 'PixelLena — TikTok 动画师',
      },
      metrics: [
        {
          value: '▲ 184%',
          label: '完播率提升',
          description: '使用 TOTR 模板导出的短视频，让观众更愿意循环观看。',
        },
        {
          value: '92%',
          label: '创作者继续使用',
          description:
            '体验过 TOTR 套件的创作者，首周平均发布 3 支以上的二创。',
        },
        {
          value: '“粉丝停不下来。”',
          label: 'FrostByte — Shorts 剪辑师',
          description: '拥有正宗紫色渐变与配乐的版本，能明显拉高留存曲线。',
        },
      ],
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

const audioWaveformHeights = [
  42, 58, 76, 88, 80, 64, 52, 60, 74, 86, 78, 62, 50, 46, 54, 70, 84, 92, 86,
  68, 56, 48, 54, 72, 88, 94, 88, 70, 56, 48, 52, 68, 82, 90, 82, 66, 54, 46,
  48, 62, 78, 86, 78, 64, 52, 44, 46, 58,
] as const;

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
      <script type="application/ld+json">{JSON.stringify(jsonLdFAQ)}</script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdWebsite)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdVideoObject)}
      </script>

      <main className="relative overflow-hidden bg-totr-space text-white">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />
        <HomeHero
          hero={copy.hero}
          quickAnswer={copy.quickAnswer}
          locale={locale}
        />

        <section className="relative z-10 px-6 pb-12 pt-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.entrySection.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.entrySection.subtitle}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {copy.entrySection.categories.map((category) => (
                <Card
                  key={category.label}
                  className="border-white/10 bg-white/5 p-6 shadow-[0_35px_110px_-70px_rgba(103,64,255,0.65)] backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10"
                >
                  <CardHeader className="space-y-3 p-0">
                    <Badge className="w-fit border-white/20 bg-white/10 text-[0.65rem] uppercase tracking-[0.3em] text-white/80">
                      {category.label}
                    </Badge>
                    <CardTitle className="text-xl text-white">
                      {category.blurb}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-6 space-y-4 p-0">
                    {category.links.map((link) => (
                      <Link
                        key={link.title}
                        href={getUrlWithLocale(link.href, locale)}
                        className="group block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/25 hover:bg-white/15"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-base font-semibold text-white">
                            {link.title}
                          </p>
                          {'badge' in link && link.badge ? (
                            <Badge className="border-white/20 bg-white/10 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
                              {link.badge}
                            </Badge>
                          ) : null}
                        </div>
                        {link.description ? (
                          <p className="mt-2 text-sm leading-relaxed text-white/70">
                            {link.description}
                          </p>
                        ) : null}
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.3em] text-primary/70 transition group-hover:text-primary">
                          {locale.startsWith('zh') ? '立即进入' : 'Enter hub'}
                          <span aria-hidden>→</span>
                        </span>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.videoSection.title}
              </h2>
              <p className="mx-auto max-w-2xl text-base text-white/70">
                {copy.videoSection.subtitle}
              </p>
            </div>

            <div className="mb-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_35px_110px_-65px_rgba(109,91,255,0.85)] backdrop-blur-xl">
              <div className="mb-10 text-center">
                <h3 className="text-3xl font-semibold text-white">
                  {copy.videoSection.simulatorTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
                  {copy.videoSection.simulatorSubtitle}
                </p>
              </div>

              <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-2xl">
                <div className="relative aspect-[9/16]">
                  {copy.videoSection.simulatorEmbed?.type === 'youtube' ? (
                    <iframe
                      src={`${copy.videoSection.simulatorEmbed.src}?rel=0&modestbranding=1`}
                      title="TOTR meme original clip"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                      className="h-full w-full"
                    />
                  ) : null}
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="mb-4 text-sm text-white/70">
                  {copy.videoSection.infoText}
                </p>
                {copy.videoSection.simulatorEmbed?.externalUrl && (
                  <div className="mb-4 flex flex-wrap justify-center gap-3">
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/10"
                    >
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
                <Button
                  asChild
                  className="rounded-full border border-white/20 bg-white/10 px-8 text-sm font-semibold text-white hover:border-white/40 hover:bg-white/20"
                >
                  <Link href={getUrlWithLocale('/generator/totr', locale)}>
                    {copy.videoSection.cta}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="mb-16 grid gap-8 md:grid-cols-3">
              {copy.features.map((feature) => (
                <Card
                  key={feature.title}
                  className="group border-white/10 bg-white/5 p-6 text-center shadow-[0_25px_70px_-60px_rgba(255,255,255,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl text-white shadow-[0_18px_45px_-18px_rgba(109,91,255,0.6)]">
                    {feature.emoji}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {feature.text}
                  </p>
                </Card>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_45px_120px_-60px_rgba(91,76,255,0.55)] backdrop-blur-xl">
              <h3 className="mb-10 text-center text-2xl font-semibold text-white">
                TOTR Evolution Timeline 📈
              </h3>

              <div className="space-y-6">
                {copy.timelineHighlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/8"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge
                          variant="outline"
                          className="border-white/30 bg-white/10 text-white"
                        >
                          {item.date}
                        </Badge>
                        <h4 className="text-base font-semibold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-white/70">
                        {item.description}
                      </p>
                      <p className="text-xs font-medium text-primary/80">
                        {item.stats}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h3 className="text-4xl font-semibold text-white">
                {copy.audioSection.title}
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
                {copy.audioSection.subtitle}
              </p>
            </div>

            <div className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-65px_rgba(103,64,255,0.9)] backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-fuchsia-500 text-white shadow-[0_18px_35px_-18px_rgba(244,114,182,0.8)]">
                  <Play className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-white">
                    {copy.audioSection.track}
                  </p>
                  <p className="text-sm text-white/60">
                    {copy.audioSection.artist}
                  </p>
                </div>
                <Badge className="border-white/20 bg-white/10 text-white">
                  {copy.audioSection.badge}
                </Badge>
              </div>

              <div className="mb-6 flex h-14 items-end gap-1 overflow-hidden">
                {audioWaveformHeights.map((height, index) => (
                  <div
                    key={`waveform-bar-${index}`}
                    className="flex-1 animate-pulse rounded-full bg-gradient-to-t from-primary/20 via-primary/40 to-white/70"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${index * 45}ms`,
                    }}
                    aria-hidden
                  />
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 rounded-full border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/15"
                >
                  <Download className="mr-2 h-4 w-4" />
                  {copy.audioSection.download}
                </Button>
                <Button
                  size="sm"
                  className="flex-1 rounded-full bg-primary px-6 text-white shadow-[0_18px_40px_-24px_rgba(103,64,255,0.9)] hover:bg-primary/90"
                  asChild
                >
                  <Link href={getUrlWithLocale('/generator/totr', locale)}>
                    {copy.audioSection.use}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TotrVideoShowcase />

        {/* Native Banner Ad */}
        <section className="relative z-10 py-12 px-6">
          <div className="mx-auto max-w-4xl">
            <AdsterraNativeBanner />
          </div>
        </section>

        {/* Learn More About TOTR Section */}
        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {locale.startsWith('zh')
                  ? '深入了解 TOTR 文化'
                  : 'Learn More About TOTR'}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
                {locale.startsWith('zh')
                  ? '从俄语含义到病毒式传播的深度解析，全面掌握 TOTR 现象'
                  : 'From Russian origins to viral phenomenon - explore the complete TOTR universe'}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: '❓',
                  href: '/what-is-totr',
                  titleZh: 'TOTR 是什么？',
                  titleEn: 'What is TOTR?',
                  bodyZh: '完整的 TOTR 新手指南，从起源到文化影响',
                  bodyEn:
                    "Complete beginner's guide to TOTR from origins to cultural impact",
                },
                {
                  icon: '💭',
                  href: '/totr-meaning',
                  titleZh: 'TOTR 含义',
                  titleEn: 'TOTR Meaning',
                  bodyZh: '深入解析 TOTR 的语言学含义和文化背景',
                  bodyEn:
                    'Deep dive into the linguistic and cultural meaning of TOTR',
                },
                {
                  icon: '🇷🇺',
                  href: '/totr-russian-meaning',
                  titleZh: '俄语起源',
                  titleEn: 'Russian Origins',
                  bodyZh: '探索 TOTR 的俄语发音、文化语境和本土使用',
                  bodyEn:
                    "Discover TOTR's Russian pronunciation, cultural context and native usage",
                },
                {
                  icon: '💝',
                  href: '/totr-meme-meaning',
                  titleZh: '表情文化',
                  titleEn: 'Meme Culture',
                  bodyZh: '为什么 TOTR 表情能够病毒式传播并征服全球',
                  bodyEn:
                    'Why the TOTR meme went viral and conquered the internet globally',
                },
              ].map((item) => (
                <Card
                  key={item.href}
                  className="group border-white/10 bg-white/5 p-6 text-center shadow-[0_25px_90px_-65px_rgba(255,255,255,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                >
                  <CardContent className="space-y-5 p-0">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl text-white shadow-[0_18px_45px_-20px_rgba(244,114,182,0.6)] transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {locale.startsWith('zh') ? item.titleZh : item.titleEn}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {locale.startsWith('zh') ? item.bodyZh : item.bodyEn}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full border-white/30 bg-white/5 text-white hover:border-white/50 hover:bg-white/15"
                      asChild
                    >
                      <Link href={getUrlWithLocale(item.href, locale)}>
                        {locale.startsWith('zh') ? '了解更多' : 'Explore Topic'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_45px_120px_-65px_rgba(109,91,255,0.7)] backdrop-blur-xl">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div className="space-y-6">
                  <h3 className="text-3xl font-semibold text-white">
                    {locale.startsWith('zh')
                      ? '获取 TOTR 文字符号'
                      : 'Get TOTR Text & Symbols'}
                  </h3>
                  <p className="text-base text-white/70">
                    {locale.startsWith('zh')
                      ? '复制正宗的俄语 TOTR 文字（тотя❤️）及各种变体，适用于社交媒体、表情制作和聊天'
                      : 'Copy authentic Russian TOTR text (тотя❤️) and variations for social media, memes, and messaging'}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="rounded-full bg-primary px-6 text-white shadow-[0_20px_45px_-20px_rgba(103,64,255,0.85)] hover:bg-primary/90"
                    >
                      <Link href={getUrlWithLocale('/totr-text', locale)}>
                        📝{' '}
                        {locale.startsWith('zh')
                          ? '复制 TOTR 文字'
                          : 'Copy TOTR Text'}
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="rounded-full border-white/30 bg-white/5 px-6 text-white hover:border-white/50 hover:bg-white/15"
                    >
                      <Link href={getUrlWithLocale('/generator/totr', locale)}>
                        🎨{' '}
                        {locale.startsWith('zh') ? '制作表情' : 'Create Meme'}
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-primary/40 via-fuchsia-500/40 to-blue-500/40 p-[1px]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-black/60 text-5xl font-semibold text-white">
                      тотя❤️
                    </div>
                  </div>
                  <div className="mt-4 text-sm uppercase tracking-[0.35em] text-white/60">
                    {locale.startsWith('zh')
                      ? '正宗俄语 TOTR 文字'
                      : 'Authentic Russian TOTR Text'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.launchSection.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.launchSection.subtitle}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {copy.launchSection.cards.map((card) => (
                <Card
                  key={card.title}
                  className="border-white/10 bg-white/5 p-6 shadow-[0_35px_110px_-70px_rgba(109,91,255,0.7)] backdrop-blur-xl transition hover:border-white/25 hover:bg-white/10"
                >
                  <CardHeader className="space-y-4 p-0">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-white">
                        {card.emoji}
                      </div>
                      {card.badge ? (
                        <Badge className="border-white/20 bg-white/10 text-[0.65rem] uppercase tracking-[0.3em] text-white">
                          {card.badge}
                        </Badge>
                      ) : null}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-5 p-0 text-sm leading-relaxed text-white/70">
                    <p>{card.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-full border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/15"
                      asChild
                    >
                      <Link href={getUrlWithLocale(card.href, locale)}>
                        {locale.startsWith('zh') ? '查看攻略' : 'Open playbook'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.keywordSection.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.keywordSection.subtitle}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_40px_120px_-75px_rgba(103,64,255,0.8)] backdrop-blur-xl">
              <div className="divide-y divide-white/10">
                {copy.keywordSection.items.map((item) => (
                  <div
                    key={item.keyword}
                    className="flex flex-col gap-4 p-6 text-white md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="font-mono text-lg font-semibold text-white">
                        {item.keyword}
                      </p>
                      <p className="text-sm text-white/60">{item.intent}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="border-white/20 bg-white/10 text-white/80">
                        {item.trend}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full border-white/30 bg-white/5 text-white hover:border-white/60 hover:bg-white/15"
                        asChild
                      >
                        <Link href={getUrlWithLocale(item.href, locale)}>
                          {locale.startsWith('zh')
                            ? '跳转页面'
                            : 'View details'}
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-white/60">
              {copy.keywordSection.note}
            </p>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.vsSection.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.vsSection.subtitle}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  accent: 'from-purple-500/40 to-primary/30',
                  icon: '🧽',
                  title: copy.vsSection.totr.title,
                  items: copy.vsSection.totr.attributes,
                  description: copy.vsSection.totr.description,
                },
                {
                  accent: 'from-yellow-500/40 to-amber-500/20',
                  icon: '🥔',
                  title: copy.vsSection.py.title,
                  items: copy.vsSection.py.attributes,
                  description: copy.vsSection.py.description,
                },
              ].map((block) => (
                <Card
                  key={block.title}
                  className="relative overflow-hidden border-white/10 bg-white/5 px-8 pb-10 pt-12 shadow-[0_45px_120px_-70px_rgba(255,255,255,0.75)] backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_65%)]" />
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${block.accent} opacity-35`}
                  />
                  <div className="relative z-10 flex flex-col gap-6 text-white">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                      {block.icon}
                    </div>
                    <CardTitle className="text-center text-2xl text-white">
                      {block.title}
                    </CardTitle>
                    <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                      {block.items.map((attr) => (
                        <div
                          key={`${block.title}-${attr.label}`}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4"
                        >
                          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                            {attr.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white">
                            {attr.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs leading-relaxed text-white/60">
                      {block.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button
                variant="outline"
                asChild
                className="rounded-full border-white/30 bg-white/5 px-8 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/15"
              >
                <Link href={getUrlWithLocale('/compare/totr-vs-py', locale)}>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  {copy.vsSection.button}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <div className="mb-14 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.timelineSection.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.timelineSection.subtitle}
              </p>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-10 shadow-[0_50px_140px_-80px_rgba(109,91,255,0.8)] backdrop-blur-xl">
              <div className="absolute inset-y-10 left-8 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              <div className="space-y-8">
                {copy.timelineSection.steps.map((step, index) => (
                  <div key={step.heading} className="relative flex gap-6 pl-10">
                    <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-3 rounded-2xl border border-white/5 bg-white/5 p-5 text-white transition hover:border-white/20 hover:bg-white/10">
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <Badge
                          variant="outline"
                          className="border-white/30 bg-white/10 text-white"
                        >
                          {step.badge[0]}
                        </Badge>
                        <Badge className="border-white/20 bg-primary/20 text-white">
                          {step.badge[1]}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold">{step.heading}</h3>
                      <p className="text-sm text-white/70">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                asChild
                className="rounded-full border border-white/30 bg-white/10 px-8 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/20"
              >
                <Link href={getUrlWithLocale('/trends/totr', locale)}>
                  <Clock className="mr-2 h-4 w-4" />
                  {copy.timelineSection.button}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.howTo.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.howTo.subtitle}
              </p>
            </div>

            <div className="mb-14 grid gap-8 md:grid-cols-3">
              {copy.howTo.steps.map((step, index) => (
                <Card
                  key={step.title}
                  className="relative overflow-hidden border-white/10 bg-white/5 p-6 text-center shadow-[0_35px_100px_-70px_rgba(255,255,255,0.6)] backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_60%)]" />
                  <CardHeader className="relative border-b-0">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <CardTitle className="text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-sm leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="rounded-full border border-white/30 bg-primary px-10 text-base font-semibold text-white shadow-[0_25px_65px_-35px_rgba(103,64,255,0.9)] hover:border-white/50 hover:bg-primary/90"
              >
                <Link href={getUrlWithLocale('/generator/totr', locale)}>
                  <Play className="mr-2 h-5 w-5" />
                  {copy.howTo.button}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.statsSection.title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {copy.statsSection.items.map((item) => (
                <Card
                  key={item.label}
                  className="border-white/10 bg-white/5 p-6 text-center shadow-[0_35px_100px_-70px_rgba(255,255,255,0.55)] backdrop-blur-xl"
                >
                  <CardContent className="space-y-3 p-0">
                    <div className="text-4xl font-semibold text-white">
                      {item.value}
                    </div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.socialProof.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.socialProof.subtitle}
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-left shadow-[0_40px_140px_-90px_rgba(255,255,255,0.7)] backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.25),transparent_60%)]" />
                <div className="relative space-y-6 text-white">
                  <p className="text-balance text-3xl font-semibold leading-tight">
                    {copy.socialProof.highlight.quote}
                  </p>
                  <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                    {copy.socialProof.highlight.author}
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {copy.socialProof.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_35px_120px_-90px_rgba(103,64,255,0.8)] backdrop-blur-xl"
                  >
                    <div className="space-y-3">
                      <p className="text-3xl font-semibold">{metric.value}</p>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                        {metric.label}
                      </p>
                    </div>
                    <p className="mt-6 text-sm text-white/70">
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-semibold text-white">
                {copy.templates.title}
              </h2>
              <p className="mx-auto mt-3 max-w-3xl text-base text-white/70">
                {copy.templates.subtitle}
              </p>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-3">
              {copy.templates.items.map((template, index) => (
                <Card
                  key={template.title}
                  className="overflow-hidden border-white/10 bg-white/5 shadow-[0_40px_120px_-75px_rgba(244,114,182,0.8)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
                >
                  <div className="relative flex aspect-square items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(109,91,255,0.35),transparent_55%)]">
                    <div className="text-5xl">
                      {index === 1 ? '🌌' : index === 2 ? '🌊' : '🧽'}
                    </div>
                  </div>
                  <CardContent className="space-y-4 p-6">
                    <div className="space-y-2 text-left">
                      <h3 className="text-lg font-semibold text-white">
                        {template.title}
                      </h3>
                      <p className="text-sm text-white/70">
                        {template.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <Badge className="border-white/20 bg-white/10 text-white">
                        <Download className="mr-1 h-3 w-3" />
                        {template.downloads}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-full border-white/30 bg-white/5 px-4 text-white hover:border-white/50 hover:bg-white/15"
                      >
                        {copy.templates.useTemplate}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                asChild
                className="rounded-full border-white/30 bg-white/5 px-10 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/15"
              >
                <Link
                  href={getUrlWithLocale('/download/totr-template', locale)}
                >
                  {copy.templates.button}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Native Banner Ad */}
        <section className="relative z-10 py-12 px-6">
          <div className="mx-auto max-w-4xl">
            <AdsterraNativeBanner />
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
      </main>
    </>
  );
}
