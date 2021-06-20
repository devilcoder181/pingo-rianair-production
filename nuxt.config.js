const isDev = process.env.NODE_ENV === 'production'
const useEmulators = false // manually change if emulators needed

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)

  head: {
    title: 'pingo-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/admin/pingo-admin.scss',

  ],

  styleResources: {
    scss: ['@/assets/styles/admin/components/_variables.scss', '@/assets/styles/admin/components/_mixin.scss']
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  
  ], 

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],

  router: {
   middleware: ['auth']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  buildDir: 'public',

  firebase: {
    // ...
    config: {
      apiKey: process.env.FIRE_APIKEY,
      authDomain: "pingo-rianair-2f72e.firebaseapp.com",
      projectId: "pingo-rianair-2f72e",
      storageBucket: "pingo-rianair-2f72e.appspot.com",
      messagingSenderId: process.env.FIRE_MESID,
      appId: process.env.FIRE_APPID,
      measurementId: process.env.FIRE_MESURID
    },
    services: {  
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: true,
        disableEmulatorWarnings: false,
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
      },
      storage: true,
      performance: false,
      analytics: false,
    },
  },

  pwa: {
    icon: {
      source: 'static/pwa-icon.png'
    },
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      name: 'Pingo Admin - RianAir',
      author: 'DevilCoder181',
      description: 'Pingo CMS pannel for RianAir Website',
      theme_color: '#191a1f',

    },
    manifest: {
      name: 'Pingo Admin - RianAir',
      description: 'Pingo CMS pannel for RianAir Website',
      background_color: '#191a1f',
    },
    workbox: {
      importScripts: ['/firebase-auth-sw.js'],
      dev: process.env.NODE_ENV === 'production',
    },
  },
}
