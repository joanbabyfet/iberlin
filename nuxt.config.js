// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, //开启服务器端渲染(预渲染)
  devServer: {
    host: 'localhost', //默认为localhost
    port: 3001
  },
  runtimeConfig: {
    public: { // public 下的变量可以在客户端和服务端使用
      BASE_URL: '', //全局api域名
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
    '@/assets/style.css',
    //'@/assets/form.css'
  ],
  modules: [
    'nuxt-swiper', '@nuxt/ui'
  ],
  swiper: {
      modules: ['navigation', 'pagination', 'effect-creative' ]
  }
})
