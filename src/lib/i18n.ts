export const supportedLocales = ['en', 'zh'] as const

export type SupportedLocale = (typeof supportedLocales)[number]

export const siteConfig = {
  name: 'DemoCue',
  url: 'https://democue.ai',
  downloadUrl: 'https://github.com/my19940202/record-float-bar/releases',
  defaultLocale: 'en' satisfies SupportedLocale,
  defaultTitle: 'DemoCue — AI Cue Bar for Screen Recording',
  defaultDescription:
    'An AI floating cue bar that helps creators record product demos, tutorials, screen videos, and presentations with a clear outline.',
}

export function parseLocale(locale: string | undefined): SupportedLocale {
  return locale === 'zh' ? 'zh' : 'en'
}

export function getLocaleFromPath(pathname: string): SupportedLocale {
  return pathname.startsWith('/zh') ? 'zh' : 'en'
}

export function localizedPath(locale: SupportedLocale, hash = ''): string {
  return `/${locale}${hash}`
}

export const copy = {
  en: {
    navIntro: 'Intro',
    navFeatures: 'Features',
    navHow: 'How it works',
    navFaq: 'FAQ',
    contact: 'Download from GitHub',
    langSwitch: '中文',
    langSwitchPath: '/zh',
    eyebrow: 'AI cue bar for screen recording',
    heroTitle: 'Stay on track while recording demos, tutorials, and presentations.',
    heroDescription:
      'DemoCue turns a topic into a structured outline and keeps it visible in a lightweight floating cue bar while you record your screen.',
    primaryCta: 'Download from GitHub',
    secondaryCta: 'View features',
    socialProof: 'Built for creators, engineers, educators, and indie makers who record while thinking.',
    introTitle: "Hi, I'm DemoCue",
    introBody:
      'A desktop companion for screen recording: generate talking points, show them as a floating cue bar, and move through chapters without breaking your flow.',
    featuresKicker: 'Features',
    featuresTitle: 'Record better demos with AI cues',
    features: [
      ['AI outline generation', 'Input a topic and get recording chapters with talking points.'],
      ['Floating cue bar', 'A compact always-on-top panel for macOS recording workflows.'],
      ['Presenter controls', 'Collapse, expand, and move through sections while staying focused.'],
      ['Recording-ready settings', 'Tune transparency, shortcuts, mouse pass-through, and compact mode.'],
    ],
    howKicker: 'Workflow',
    howTitle: 'From topic to guided recording',
    steps: [
      ['Write your topic', 'Add the demo title, audience, and the points you want to cover.'],
      ['Generate an outline', 'AI creates a chapter structure that you can edit before recording.'],
      ['Open the cue bar', 'Show the outline in a floating desktop panel while your recorder runs.'],
      ['Record with cues', 'Use shortcuts to switch chapters and keep the narrative consistent.'],
    ],
    posters: [
      { src: '/posters/dashboard.png', alt: 'DemoCue dashboard with recent recording outlines', label: 'Dashboard' },
      { src: '/posters/create.png', alt: 'Create a new DemoCue recording outline from a topic', label: 'Create' },
      { src: '/posters/outline.png', alt: 'Generated recording outline with chapter cues', label: 'Outline' },
      { src: '/posters/config.png', alt: 'DemoCue settings for floating cue bar behavior', label: 'Settings' },
    ],
    previousScreenshot: 'Previous screenshot',
    nextScreenshot: 'Next screenshot',
    showScreenshot: 'Show',
    installLabel: 'GitHub Releases',
    installTitle: 'Download DemoCue',
    installBody:
      'Get the latest packaged desktop build from GitHub Releases. Download the asset for your operating system, install it, then create an outline before recording.',
    faqTitle: 'FAQ',
    faqs: [
      ['How do I use it?', 'Create an outline, review the chapters, then open the floating cue bar before you start recording.'],
      ['How do I install it?', 'Open GitHub Releases, download the latest desktop package for your operating system, and follow the installer prompts.'],
      ['What settings are planned?', 'Transparency, always-on-top behavior, shortcut keys, compact mode, and mouse pass-through.'],
      ['Which platforms are supported?', 'Packaged builds are published through GitHub Releases. Check the latest release assets for the currently available macOS and Windows downloads.'],
    ],
    footer: 'AI cue bar for screen-recorded demos.',
  },
  zh: {
    navIntro: '介绍',
    navFeatures: '功能',
    navHow: '流程',
    navFaq: 'FAQ',
    contact: '从 GitHub 下载',
    langSwitch: 'English',
    langSwitchPath: '/en',
    eyebrow: '录屏演示的 AI 悬浮提示条',
    heroTitle: '录屏、演示、教程讲解时，让表达始终有结构。',
    heroDescription:
      'DemoCue 可以把主题生成讲解提纲，并在录屏时以轻量悬浮提示条展示，帮助你稳定推进每个章节。',
    primaryCta: '从 GitHub 下载',
    secondaryCta: '查看功能',
    socialProof: '适合创作者、程序员、老师、独立开发者在边演示边讲解时使用。',
    introTitle: 'Hi, I’m DemoCue',
    introBody:
      '一个桌面端录屏辅助工具：生成讲解提纲，把章节放进悬浮提示条，并在录制过程中用快捷键推进内容。',
    featuresKicker: '功能',
    featuresTitle: '让录屏流程更稳定',
    features: [
      ['AI 生成提纲', '输入录制主题，生成章节和每一段的讲解重点。'],
      ['悬浮提示条', '录屏时保持置顶，不需要频繁切回文档。'],
      ['讲解控制', '支持章节展开、收起、切换，保持录制节奏。'],
      ['录屏就绪设置', '按需调整透明度、快捷键、鼠标穿透和紧凑模式。'],
    ],
    howKicker: '流程',
    howTitle: '从主题到有结构的录制',
    steps: [
      ['输入主题', '填写视频标题、目标观众和想覆盖的内容。'],
      ['生成提纲', 'AI 输出章节结构，你可以在录制前调整。'],
      ['打开悬浮提示条', '录屏前显示桌面悬浮面板，保持讲解线索可见。'],
      ['按提示录制', '用快捷键切换章节，减少忘词和跑题。'],
    ],
    posters: [
      { src: '/posters/dashboard.png', alt: 'DemoCue 仪表盘和最近创建的录屏提纲', label: '仪表盘' },
      { src: '/posters/create.png', alt: '在 DemoCue 中输入主题并创建录屏提纲', label: '创建' },
      { src: '/posters/outline.png', alt: 'DemoCue 生成的章节提纲和讲解提示', label: '提纲' },
      { src: '/posters/config.png', alt: 'DemoCue 悬浮提示条相关设置界面', label: '设置' },
    ],
    previousScreenshot: '上一张截图',
    nextScreenshot: '下一张截图',
    showScreenshot: '显示截图',
    installLabel: 'GitHub Releases',
    installTitle: '下载 DemoCue',
    installBody:
      '目前可以从 GitHub Releases 下载最新桌面端安装包。选择适合你系统的 release asset，安装后创建提纲即可开始录屏。',
    faqTitle: 'FAQ',
    faqs: [
      ['怎么使用这个软件？', '先创建提纲，检查章节内容，然后在开始录屏前打开悬浮提示条。'],
      ['如何安装？', '打开 GitHub Releases，下载最新版本里适合你系统的桌面安装包，然后按安装器提示完成安装。'],
      ['支持哪些设置？', '计划支持透明度、置顶、快捷键、紧凑模式和鼠标穿透。'],
      ['支持哪些平台？', '桌面安装包通过 GitHub Releases 发布。当前可用平台以最新 release assets 为准，已包含 Windows 打包产物。'],
    ],
    footer: '用于录屏演示的 AI 悬浮提示条。',
  },
} satisfies Record<SupportedLocale, Record<string, unknown>>
