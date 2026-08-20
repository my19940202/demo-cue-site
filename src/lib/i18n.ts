export const supportedLocales = ['en', 'zh'] as const

export type SupportedLocale = (typeof supportedLocales)[number]

export const siteConfig = {
  name: 'DemoCue',
  url: 'https://democue.aizeten.me',
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
      'DemoCue turns a topic into a structured outline and keeps it visible in a lightweight floating cue bar while you record your screen or share your desktop in a livestream.',
    primaryCta: 'Download from GitHub',
    secondaryCta: 'View features',
    socialProof:
      'Built for creators, engineers, educators, livestream hosts, and indie makers who record or present while thinking.',
    introTitle: "Hi, I'm DemoCue",
    introBody:
      'A desktop companion for screen recording and screen-share livestreams: generate talking points, show them as a floating cue bar, and move through chapters without breaking your flow. When you share your screen, the cue bar appears in the stream and gives viewers a clear chapter guide.',
    featuresKicker: 'Features',
    featuresTitle: 'Record better demos with AI cues',
    features: [
      ['AI outline generation', 'Input a topic and get recording chapters with talking points.'],
      [
        'Floating cue bar',
        'A compact always-on-top panel for screen recording and desktop livestreams — no need to switch back to your notes.',
      ],
      ['Presenter controls', 'Collapse, expand, and move through sections while staying focused.'],
      ['Recording-ready settings', 'Tune transparency, shortcuts, mouse pass-through, and compact mode.'],
    ],
    howKicker: 'Workflow',
    howTitle: 'From topic to guided recording',
    steps: [
      ['Write your topic', 'Add the demo title, audience, and the points you want to cover.'],
      ['Generate an outline', 'AI creates a chapter structure that you can edit before recording.'],
      ['Open the cue bar', 'Show the outline in a floating desktop panel before recording or going live.'],
      [
        'Record with cues',
        'Use shortcuts to switch chapters and keep the narrative consistent — viewers see the structure too when you screen-share.',
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
    footer: 'AI cue bar for screen-recorded demos and desktop livestreams.',
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
      'DemoCue 可以把主题生成讲解提纲，并在录屏或电脑屏幕直播时以轻量悬浮提示条展示，帮助你稳定推进每个章节，也给观众清晰的结构引导。',
    primaryCta: '从 GitHub 下载',
    secondaryCta: '查看功能',
    socialProof: '适合创作者、程序员、老师、直播讲解者和独立开发者在边演示边讲解时使用。',
    introTitle: "Hi, I'm DemoCue",
    introBody:
      '一个桌面端录屏与屏幕直播辅助工具：生成讲解提纲，把章节放进悬浮提示条，并在录制或直播过程中用快捷键推进内容。共享电脑画面时，提示条会进入直播画面，给观众一个清晰的章节引导。',
    featuresKicker: '功能',
    featuresTitle: '让录屏流程更稳定',
    features: [
      ['AI 生成提纲', '输入录制主题，生成章节和每一段的讲解重点。'],
      ['悬浮提示条', '录屏或电脑屏幕直播时保持置顶，不需要频繁切回文档。'],
      ['讲解控制', '支持章节展开、收起、切换，保持录制节奏。'],
      ['录屏就绪设置', '按需调整透明度、快捷键、鼠标穿透和紧凑模式。'],
    ],
    howKicker: '流程',
    howTitle: '从主题到有结构的录制',
    steps: [
      ['输入主题', '填写视频标题、目标观众和想覆盖的内容。'],
      ['生成提纲', 'AI 输出章节结构，你可以在录制前调整。'],
      ['打开悬浮提示条', '录屏或开播前显示桌面悬浮面板，保持讲解线索可见。'],
      ['按提示录制', '用快捷键切换章节，减少忘词和跑题；屏幕共享时观众也能看到章节结构。'],
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
        '已支持背景色、字号、透明度、模糊度、横排/竖排布局，以及置顶、快捷键和鼠标穿透等选项。',
      ],
      [
        '支持哪些平台？',
        '目前已支持 Windows 和 macOS。安装包通过 GitHub Releases 发布，下载对应系统的桌面安装包即可。',
      ],
    ],
    footer: '用于录屏演示和电脑屏幕直播的 AI 悬浮提示条。',
  },
} satisfies Record<SupportedLocale, Record<string, unknown>>
