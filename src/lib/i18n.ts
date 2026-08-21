export const supportedLocales = ['en', 'zh'] as const

export type SupportedLocale = (typeof supportedLocales)[number]

export const siteConfig = {
  name: 'DemoCue',
  url: 'https://democue.aizeten.me',
  downloadUrl: 'https://github.com/my19940202/record-float-bar/releases',
  xiaohongshuUrl: 'https://www.xiaohongshu.com/user/profile/5ab3c72711be102733af9f87',
  twitterUrl: 'https://x.com/xishengbo',
  defaultLocale: 'en' satisfies SupportedLocale,
  defaultTitle: 'DemoCue — Outline-Guided Screen Recording',
  defaultDescription:
    'Generate recording outlines and use a floating cue bar to guide product demos, tutorials, screen videos, and presentations step by step.',
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
    eyebrow: 'AI outline guide for screen recording',
    heroTitle: 'Guide every recording with a clear outline — stay on track from start to finish.',
    heroDescription:
      'DemoCue turns a topic into a structured outline and keeps it visible in a lightweight floating cue bar, guiding you through each chapter while you record or screen-share live.',
    primaryCta: 'Download from GitHub',
    secondaryCta: 'View features',
    socialProof:
      'Built for creators, engineers, educators, and livestream hosts who need outline-guided recording while presenting.',
    introTitle: "Hi, I'm DemoCue",
    introPainTitle: 'The hardest part of recording is not the script — it is the lack of guidance.',
    introPainBody:
      'You may already have a script or outline, but mid-recording it is easy to lose your thread. Without an outline to guide you step by step, you keep switching back to notes, re-recording, and wasting time.',
    introBody:
      'DemoCue is a desktop tool for screen recording and livestreams: generate an outline, show it in a floating cue bar, and let the outline guide your talking points chapter by chapter. When you screen-share, viewers see the same guided structure.',
    featuresKicker: 'Features',
    featuresTitle: 'Outline-guided recording that keeps you on track',
    features: [
      ['AI & manual outlines', 'Generate a recording outline from a topic with AI, or create chapters and guided talking points by hand.'],
 
      [
        'Floating outline guide',
        'Keep the outline visible on top during recording and desktop livestreams — no need to switch back to your notes.',
      ],
      ['Presenter controls', 'Collapse, expand, and move through outline sections while staying focused.'],
      ['Recording-ready settings', 'Tune transparency, shortcuts, mouse pass-through, and compact mode.'],
    ],
    howKicker: 'Workflow',
    howTitle: 'From topic to outline-guided recording',
    steps: [
      ['Write your topic', 'Add the demo title, audience, and the points you want to cover.'],
      ['Generate an outline', 'AI creates a chapter outline that you can edit before recording.'],
      ['Open the cue bar', 'Show the outline in a floating panel before recording or going live.'],
      [
        'Record with guided cues',
        'Follow the outline chapter by chapter to stay guided — viewers see the structure too when you screen-share.',
      ],
    ],
    posters: [
      { src: '/posters/outline.png', alt: 'Generated recording outline with chapter cues', label: 'Outline' },
      { src: '/posters/dashboard.png', alt: 'DemoCue dashboard with recent recording outlines', label: 'Dashboard' },
      { src: '/posters/create.png', alt: 'Create a new DemoCue recording outline from a topic', label: 'Create' },
      { src: '/posters/config.png', alt: 'DemoCue settings for floating cue bar behavior', label: 'Settings' },
    ],
    previousScreenshot: 'Previous screenshot',
    nextScreenshot: 'Next screenshot',
    showScreenshot: 'Show',
    viewScreenshotFullscreen: 'View screenshot fullscreen',
    closeFullscreen: 'Close fullscreen view',
    installLabel: 'GitHub Releases',
    installTitle: 'Download DemoCue',
    installBody:
      'Get the latest packaged desktop build from GitHub Releases. Windows and macOS installers are available — download the one for your OS, install it, then create an outline before recording.',
    faqTitle: 'FAQ',
    faqs: [
      [
        'How do I use it?',
        'Create an outline, review the chapters, then open the floating cue bar before you start recording or screen-share livestreaming.',
      ],
      [
        'How can I create an outline?',
        'You can generate an outline from a one-line AI prompt, or create the outline and detailed talking points entirely by hand.',
      ],
      [
        'Can I switch chapters with the mouse?',
        'Yes. The floating cue bar lets you move to the previous or next outline section with the mouse.',
      ],
      [
        'How do I install it?',
        'Open GitHub Releases, download the latest desktop package for your operating system, and follow the installer prompts.',
      ],
      [
        'What if macOS blocks the app or installation fails?',
        'The current DMG is not Apple-signed or notarized. Before first launch, run in Terminal: xattr -dr com.apple.quarantine /Applications/DemoCue.app',
      ],
      [
        'What settings are supported?',
        'Background color, font size, transparency, blur, and horizontal or vertical layout — plus always-on-top behavior, shortcut keys, and mouse pass-through.',
      ],
      [
        'Which platforms are supported?',
        'Windows and macOS are both supported. Packaged builds are published on GitHub Releases; download the desktop installer for your OS.',
      ],
    ],
    footer: 'Outline-guided AI cue bar for screen-recorded demos and desktop livestreams.',
    footerXiaohongshu: 'Xiaohongshu',
    footerTwitter: 'X',
  },
  zh: {
    navIntro: '介绍',
    navFeatures: '功能',
    navHow: '流程',
    navFaq: 'FAQ',
    contact: '从 GitHub 下载',
    langSwitch: 'English',
    langSwitchPath: '/en',
    eyebrow: '录屏、演示、教程讲解的 AI 提纲引导',
    heroTitle: '用讲解提纲引导录屏，不再跑题、忘词、反复重录。',
    heroDescription:
      'DemoCue 把主题生成讲解提纲，并在录屏或电脑屏幕直播时以轻量悬浮提示条展示，用提纲一步步引导你推进每个章节，也给观众清晰的结构引导。',
    primaryCta: '从 GitHub 下载',
    secondaryCta: '查看功能',
    socialProof: '适合需要提纲引导的创作者、程序员、老师、直播讲解者和独立开发者。',
    introTitle: "Hi, I'm DemoCue",
    introPainTitle: '录屏时最难的不是脚本，是没有引导',
    introPainBody:
      '脚本和提纲都写好了，讲着讲着却容易忘记思路。没有提纲一步步引导录屏，只能来回切文档、反复重录，浪费大量时间。',
    introBody:
      'DemoCue 是桌面端录屏与屏幕直播辅助工具：生成讲解提纲，把章节放进悬浮提示条，用提纲引导你在录制或直播过程中按章节推进。共享电脑画面时，提示条会进入直播画面，给观众同样清晰的章节引导。',
    featuresKicker: '功能',
    featuresTitle: '用提纲引导，让录屏流程更稳定',
    features: [
      ['AI生成 / 手动输入提纲', '输入录制主题，生成带章节引导的讲解提纲和每一段重点。'],
      ['悬浮提纲引导', '录屏或电脑屏幕直播时保持置顶，提纲始终可见，不需要频繁切回文档。'],
      ['讲解控制', '支持提纲章节展开、收起、切换，保持录制节奏。'],
      ['录屏就绪设置', '按需调整透明度、背景色、字号、模糊度、横排/竖排布局。'],
    ],
    howKicker: '流程',
    howTitle: '从主题到提纲引导录制',
    steps: [
      ['输入主题', '填写视频标题、目标观众和想覆盖的内容。'],
      ['生成提纲', 'AI 输出章节提纲，你可以在录制前调整每一段的引导重点。'],
      ['打开悬浮提示条', '录屏或开播前显示桌面悬浮面板，让讲解提纲始终可见。'],
      ['按提纲引导录制', '跟着提纲章节一步步推进，减少忘词和跑题；屏幕共享时观众也能看到章节引导。'],
    ],
    posters: [
      { src: '/posters/outline.png', alt: 'DemoCue 生成的章节提纲和讲解提示', label: '提纲' },
      { src: '/posters/dashboard.png', alt: 'DemoCue 仪表盘和最近创建的录屏提纲', label: '仪表盘' },
      { src: '/posters/create.png', alt: '在 DemoCue 中输入主题并创建录屏提纲', label: '创建' },
      { src: '/posters/config.png', alt: 'DemoCue 悬浮提示条相关设置界面', label: '设置' },
    ],
    previousScreenshot: '上一张截图',
    nextScreenshot: '下一张截图',
    showScreenshot: '显示截图',
    viewScreenshotFullscreen: '全屏查看截图',
    closeFullscreen: '关闭全屏查看',
    installLabel: 'GitHub Releases',
    installTitle: '下载 DemoCue',
    installBody:
      '目前可以从 GitHub Releases 下载最新桌面端安装包，Windows 和 macOS 均已支持。选择对应系统的安装包，安装后创建提纲即可开始录屏或直播。',
    faqTitle: 'FAQ',
    faqs: [
      [
        '怎么使用这个软件？',
        '先创建提纲，检查章节内容，然后在开始录屏或电脑屏幕直播前打开悬浮提示条。',
      ],
      [
        '支持哪些创建方式？',
        '支持 AI 一句话输入生成提纲，也可以完全手动创建提纲和每段详细内容。',
      ],
      [
        '可以用鼠标切换提纲吗？',
        '可以。悬浮提示条支持用鼠标切换到上一个或下一个提纲章节。',
      ],
      ['如何安装？', '打开 GitHub Releases，下载最新版本里适合你系统的桌面安装包，然后按安装器提示完成安装。'],
      [
        '提示安装失败怎么办？',
        '当前 DMG 未做 Apple 签名和公证，首次打开前需要在终端执行：xattr -dr com.apple.quarantine /Applications/DemoCue.app',
      ],
      [
        '支持哪些设置？',
        '已支持背景色、字号、透明度、模糊度、横排/竖排布局和支持拖拽调整引导条位置。',
      ],
      [
        '支持哪些平台？',
        '目前已支持 Windows 和 macOS。安装包通过 GitHub Releases 发布，下载对应系统的桌面安装包即可。',
      ],
    ],
    footer: '用于录屏与直播的 AI 提纲引导工具。',
    footerXiaohongshu: '小红书',
    footerTwitter: 'X',
  },
} satisfies Record<SupportedLocale, Record<string, unknown>>
