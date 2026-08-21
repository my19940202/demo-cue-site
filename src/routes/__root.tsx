import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { getLocaleFromPath, siteConfig } from '../lib/i18n'
import { defaultOgImage } from '../lib/seo'
import type { RouterContext } from '../router'

import appCss from '../styles.css?url'

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { title: siteConfig.defaultTitle },
      { name: 'description', content: siteConfig.defaultDescription },
      { name: 'theme-color', content: '#fff9ee' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteConfig.name },
      { property: 'og:title', content: siteConfig.defaultTitle },
      { property: 'og:description', content: siteConfig.defaultDescription },
      { property: 'og:image', content: defaultOgImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'DemoCue AI cue bar for screen recording' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: defaultOgImage },
      { name: 'twitter:image:alt', content: 'DemoCue AI cue bar for screen recording' },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
        sizes: 'any',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/icon.png',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  const locale = getLocaleFromPath(useRouterState().location.pathname)

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MJR1MG9MYZ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MJR1MG9MYZ');
            `,
          }}
        />
      </head>
      <body>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <Scripts />
      </body>
    </html>
  )
}
