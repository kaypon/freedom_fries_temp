
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  vue: {
    config: {
      productionTip: true,
      devtools: false
    }
  },
  head: {
    title: 'Freedom Fries',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Freedom Fries Landing Page' },
      { 'http-equiv': 'content-language', content: 'en-us' },
      { hid: 'facebook_title', 'property': 'og:title', content: 'Freedom Fries' },
      { hid: 'facebook_description', 'property': 'og:description', content: 'A company focused on America, Freedom and everything Know-It-All Elitists hate.' },
      // { hid: 'facebook_image', 'property': 'og:image', content: 'https://schoolahoop.org/facebook.png' },
      { 'property': 'og:image:type', content: 'image/png' },
      { 'property': 'og:type', content: 'website' },
      { 'property': 'twitter:card', content: 'summary' },
      { hid: 'twitter_title', 'property': 'twitter:title', content: 'Freedom Fries' },
      { hid: 'twitter_description', 'property': 'twitter:description', content: 'A company focused on America, Freedom and everything Know-It-All Elitists hate.' },
      // { hid: 'twitter_image', 'property': 'twitter:image', content: 'https://schoolahoop.org/facebook.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/component-cache'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
