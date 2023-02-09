const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Ahmed Secen',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'frontend developer/student',
    bio: 'I develop everything(?).',
    email: 'ahmedsecen2@gmail.com',
    linkedin: '',
    github: 'ArtemisE1Tara',
    instagram: '',
  },
  projects: [
    {
      name: `morethan-min`,
      href: 'https://github.com/ArtemisE1Tara/morethan-log'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'Blog',
    description: 'Welcome to the Blog!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configuration (required)
  link: 'https://main-blog.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'ArtemisE1Tara/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
