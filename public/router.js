import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c778046 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _e1fef96e = () => interopDefault(import('..\\pages\\assistance\\index.vue' /* webpackChunkName: "pages/assistance/index" */))
const _6a960e55 = () => interopDefault(import('..\\pages\\banner\\index.vue' /* webpackChunkName: "pages/banner/index" */))
const _4dec50da = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _3f28ab10 = () => interopDefault(import('..\\pages\\enquiry\\index.vue' /* webpackChunkName: "pages/enquiry/index" */))
const _d0b61dbe = () => interopDefault(import('..\\pages\\gallery\\index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _02a3f2ea = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _4e18d62a = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _178ed59a = () => interopDefault(import('..\\pages\\mob\\index.vue' /* webpackChunkName: "pages/mob/index" */))
const _993dcd1c = () => interopDefault(import('..\\pages\\programs\\index.vue' /* webpackChunkName: "pages/programs/index" */))
const _525273b6 = () => interopDefault(import('..\\pages\\seo\\index.vue' /* webpackChunkName: "pages/seo/index" */))
const _24411918 = () => interopDefault(import('..\\pages\\social\\index.vue' /* webpackChunkName: "pages/social/index" */))
const _1ae266bd = () => interopDefault(import('..\\pages\\testcontact.vue' /* webpackChunkName: "pages/testcontact" */))
const _240bcb8d = () => interopDefault(import('..\\pages\\testimonials\\index.vue' /* webpackChunkName: "pages/testimonials/index" */))
const _2529e66e = () => interopDefault(import('..\\pages\\testUpload\\index.vue' /* webpackChunkName: "pages/testUpload/index" */))
const _77d85bbb = () => interopDefault(import('..\\pages\\texteditor.vue' /* webpackChunkName: "pages/texteditor" */))
const _78c43095 = () => interopDefault(import('..\\pages\\assistance\\create.vue' /* webpackChunkName: "pages/assistance/create" */))
const _3f1340e8 = () => interopDefault(import('..\\pages\\programs\\create.vue' /* webpackChunkName: "pages/programs/create" */))
const _f5bc1e5e = () => interopDefault(import('..\\pages\\testimonials\\create.vue' /* webpackChunkName: "pages/testimonials/create" */))
const _0a38c3f1 = () => interopDefault(import('..\\pages\\assistance\\_id.vue' /* webpackChunkName: "pages/assistance/_id" */))
const _3e3ea2bb = () => interopDefault(import('..\\pages\\contact\\_id.vue' /* webpackChunkName: "pages/contact/_id" */))
const _0ff39d10 = () => interopDefault(import('..\\pages\\enquiry\\_id.vue' /* webpackChunkName: "pages/enquiry/_id" */))
const _da2a5f4c = () => interopDefault(import('..\\pages\\programs\\_id.vue' /* webpackChunkName: "pages/programs/_id" */))
const _817d6596 = () => interopDefault(import('..\\pages\\testimonials\\_id.vue' /* webpackChunkName: "pages/testimonials/_id" */))
const _7182b8fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2c778046,
    name: "about"
  }, {
    path: "/assistance",
    component: _e1fef96e,
    name: "assistance"
  }, {
    path: "/banner",
    component: _6a960e55,
    name: "banner"
  }, {
    path: "/contact",
    component: _4dec50da,
    name: "contact"
  }, {
    path: "/enquiry",
    component: _3f28ab10,
    name: "enquiry"
  }, {
    path: "/gallery",
    component: _d0b61dbe,
    name: "gallery"
  }, {
    path: "/login",
    component: _02a3f2ea,
    name: "login"
  }, {
    path: "/logout",
    component: _4e18d62a,
    name: "logout"
  }, {
    path: "/mob",
    component: _178ed59a,
    name: "mob"
  }, {
    path: "/programs",
    component: _993dcd1c,
    name: "programs"
  }, {
    path: "/seo",
    component: _525273b6,
    name: "seo"
  }, {
    path: "/social",
    component: _24411918,
    name: "social"
  }, {
    path: "/testcontact",
    component: _1ae266bd,
    name: "testcontact"
  }, {
    path: "/testimonials",
    component: _240bcb8d,
    name: "testimonials"
  }, {
    path: "/testUpload",
    component: _2529e66e,
    name: "testUpload"
  }, {
    path: "/texteditor",
    component: _77d85bbb,
    name: "texteditor"
  }, {
    path: "/assistance/create",
    component: _78c43095,
    name: "assistance-create"
  }, {
    path: "/programs/create",
    component: _3f1340e8,
    name: "programs-create"
  }, {
    path: "/testimonials/create",
    component: _f5bc1e5e,
    name: "testimonials-create"
  }, {
    path: "/assistance/:id",
    component: _0a38c3f1,
    name: "assistance-id"
  }, {
    path: "/contact/:id",
    component: _3e3ea2bb,
    name: "contact-id"
  }, {
    path: "/enquiry/:id",
    component: _0ff39d10,
    name: "enquiry-id"
  }, {
    path: "/programs/:id",
    component: _da2a5f4c,
    name: "programs-id"
  }, {
    path: "/testimonials/:id",
    component: _817d6596,
    name: "testimonials-id"
  }, {
    path: "/",
    component: _7182b8fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
