const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Ikhode Studio",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Game Developer",
    bio: "Just do what you love, and try your best.",
    email: "ikhode.station@gmail.com",
    linkedin: "ikhode_studio",
    github: "MyKhode",
    instagram: "",
  },
  projects: [
    {
      name: `Game Development`,
      href: "https://ikhode.site",
    },
    {
      name: `Web Development`,
      href: "https://ikhode.site",
    },
    {
      name: `Free Source Code`,
      href: "https://ikhode.site",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Ikhode Studio Blog Post Community",
    description: "Small blog post community platform for software developer who want to share their knowledge and contribute to the open source community.",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://blog.ikhode.site",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app/**Ikhode**%20Studio%20Blog%20Post.jpeg?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fmorethan-log.vercel.app%2Favatar.svg&images=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F132768132%3Fv%3D4&images=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F132768132%3Fv%3D4&widths=0&widths=undefined&widths=0&heights=0&heights=undefined&heights=0", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    // @ts-ignore
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      // @ts-ignore
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      // @ts-ignore
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      // @ts-ignore
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      // @ts-ignore
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  // @ts-ignore
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
