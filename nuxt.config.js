// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, //开启服务器端渲染(预渲染)
  devServer: {
    host: '127.0.0.1', //默认为localhost
    port: 3001
  },
  runtimeConfig: {
    public: { // public 下的变量可以在客户端和服务端使用
      BASE_URL: '', //全局api域名
      MAINTENANCE_MODE: false, //是否维护中
      NUXT_ENV: process.env.NUXT_PUBLIC_ENV,
    },
  },
  app: {
    head: {
      title: '艾柏霖科技',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'description', content: '資訊通信 電腦買賣 電腦維修' },
        { name: 'keywords', content: '資訊通信 電腦買賣 電腦維修' },
      ],
      link: [],
      script:[]    
    },
  },
  //全局引入插件
  plugins: [
    { src: '@/plugins/router-nprogress.js', mode: 'client'}
  ],
  //全局引入css文件
  css: [
    '@/assets/css/style.css',
    //'@/assets/css/form.css',
    'element-plus/dist/index.css'
  ],
  modules: [
    'nuxt-swiper', '@nuxtjs/i18n', '@element-plus/nuxt'
  ],
  swiper: {
      modules: ['navigation', 'pagination', 'effect-creative' ]
  },
  //多语言
  i18n: {
    strategy: 'prefix', //路由是否加上语言前缀 http://localhost:3000/zh/
    langDir: 'locales', //语言包目录
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.js'
      }
    ],
    defaultLocale: 'en', //默认语言
    detectBrowserLanguage: { //是否自动检查用户浏览器语言
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    compilation: {
      strictMessage: false, //关闭语言包里用html tag报错
    },
  }
})
