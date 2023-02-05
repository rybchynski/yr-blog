const siteMetadata = {
  title: 'YR Blog',
  author: 'Yuriy Rybchynski',
  headerTitle: 'YR',
  subtitle: "An Indie Developer's Blog.",
  description: 'Here I will share articles, ideas, thoughts, and so on. Please feel welcome!',
  language: 'en-us',
  location: 'Lutsk, Ukraine 🇺🇦',
  theme: 'system',
  siteUrl: 'https://yr-dev.com',
  siteRepo: 'https://github.com/rybchynski/yr-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'yuriyrybchynski.dev@gmail.com',
  github: 'https://github.com/rybchynski',
  twitter: 'https://twitter.com/YRybchynski',
  facebook: 'https://www.facebook.com/yuriy.rybchynski.12',
  linkedin: 'https://www.linkedin.com/in/yuriy-rybchynski-6b4125158/',
  drupal: 'https://www.drupal.org/u/rybchynski',
  locale: 'en-US',
  available: true,
  analytics: {
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comments: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus',
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // Place the comment box above the comments. options: bottom, top
      inputPosition: 'bottom',
      // Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
      lang: 'en',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
