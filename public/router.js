import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67f98af3 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _6c6b1cbc = () => interopDefault(import('..\\pages\\assistance\\index.vue' /* webpackChunkName: "pages/assistance/index" */))
const _c1554d70 = () => interopDefault(import('..\\pages\\banner\\index.vue' /* webpackChunkName: "pages/banner/index" */))
const _3c33eb00 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _bb5a8306 = () => interopDefault(import('..\\pages\\enquiry\\index.vue' /* webpackChunkName: "pages/enquiry/index" */))
const _0a61f6e4 = () => interopDefault(import('..\\pages\\gallery\\index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _3e25fd97 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _926b3550 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _70276720 = () => interopDefault(import('..\\pages\\mob\\index.vue' /* webpackChunkName: "pages/mob/index" */))
const _950d18b6 = () => interopDefault(import('..\\pages\\programs\\index.vue' /* webpackChunkName: "pages/programs/index" */))
const _637d74ba = () => interopDefault(import('..\\pages\\seo\\index.vue' /* webpackChunkName: "pages/seo/index" */))
const _229ebe67 = () => interopDefault(import('..\\pages\\social\\index.vue' /* webpackChunkName: "pages/social/index" */))
const _1ccdd270 = () => interopDefault(import('..\\pages\\testcontact.vue' /* webpackChunkName: "pages/testcontact" */))
const _5135d440 = () => interopDefault(import('..\\pages\\testimonials\\index.vue' /* webpackChunkName: "pages/testimonials/index" */))
const _02947fe1 = () => interopDefault(import('..\\pages\\testUpload\\index.vue' /* webpackChunkName: "pages/testUpload/index" */))
const _1871a4b0 = () => interopDefault(import('..\\pages\\texteditor.vue' /* webpackChunkName: "pages/texteditor" */))
const _48acc582 = () => interopDefault(import('..\\pages\\assistance\\create.vue' /* webpackChunkName: "pages/assistance/create" */))
const _21694bb9 = () => interopDefault(import('..\\pages\\programs\\create.vue' /* webpackChunkName: "pages/programs/create" */))
const _058e0304 = () => interopDefault(import('..\\pages\\testimonials\\create.vue' /* webpackChunkName: "pages/testimonials/create" */))
const _0c511e24 = () => interopDefault(import('..\\pages\\assistance\\_id.vue' /* webpackChunkName: "pages/assistance/_id" */))
const _79c0ad68 = () => interopDefault(import('..\\pages\\contact\\_id.vue' /* webpackChunkName: "pages/contact/_id" */))
const _33883c25 = () => interopDefault(import('..\\pages\\enquiry\\_id.vue' /* webpackChunkName: "pages/enquiry/_id" */))
const _70abc966 = () => interopDefault(import('..\\pages\\programs\\_id.vue' /* webpackChunkName: "pages/programs/_id" */))
const _c6a832b0 = () => interopDefault(import('..\\pages\\testimonials\\_id.vue' /* webpackChunkName: "pages/testimonials/_id" */))
const _4a459174 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _67f98af3,
    name: "about"
  }, {
    path: "/assistance",
    component: _6c6b1cbc,
    name: "assistance"
  }, {
    path: "/banner",
    component: _c1554d70,
    name: "banner"
  }, {
    path: "/contact",
    component: _3c33eb00,
    name: "contact"
  }, {
    path: "/enquiry",
    component: _bb5a8306,
    name: "enquiry"
  }, {
    path: "/gallery",
    component: _0a61f6e4,
    name: "gallery"
  }, {
    path: "/login",
    component: _3e25fd97,
    name: "login"
  }, {
    path: "/logout",
    component: _926b3550,
    name: "logout"
  }, {
    path: "/mob",
    component: _70276720,
    name: "mob"
  }, {
    path: "/programs",
    component: _950d18b6,
    name: "programs"
  }, {
    path: "/seo",
    component: _637d74ba,
    name: "seo"
  }, {
    path: "/social",
    component: _229ebe67,
    name: "social"
  }, {
    path: "/testcontact",
    component: _1ccdd270,
    name: "testcontact"
  }, {
    path: "/testimonials",
    component: _5135d440,
    name: "testimonials"
  }, {
    path: "/testUpload",
    component: _02947fe1,
    name: "testUpload"
  }, {
    path: "/texteditor",
    component: _1871a4b0,
    name: "texteditor"
  }, {
    path: "/assistance/create",
    component: _48acc582,
    name: "assistance-create"
  }, {
    path: "/programs/create",
    component: _21694bb9,
    name: "programs-create"
  }, {
    path: "/testimonials/create",
    component: _058e0304,
    name: "testimonials-create"
  }, {
    path: "/assistance/:id",
    component: _0c511e24,
    name: "assistance-id"
  }, {
    path: "/contact/:id",
    component: _79c0ad68,
    name: "contact-id"
  }, {
    path: "/enquiry/:id",
    component: _33883c25,
    name: "enquiry-id"
  }, {
    path: "/programs/:id",
    component: _70abc966,
    name: "programs-id"
  }, {
    path: "/testimonials/:id",
    component: _c6a832b0,
    name: "testimonials-id"
  }, {
    path: "/",
    component: _4a459174,
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
