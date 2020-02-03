export default {
  buildModules: [
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/vue-uuid.js'
  ],
  build: {
    publicPath: '/nuxt/'
  }
}
