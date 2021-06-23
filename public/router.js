import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06ca96b0 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _770385ea = () => interopDefault(import('../pages/assistance/index.vue' /* webpackChunkName: "pages/assistance/index" */))
const _12a0e002 = () => interopDefault(import('../pages/banner/index.vue' /* webpackChunkName: "pages/banner/index" */))
const _44ba4983 = () => interopDefault(import('../pages/contact/index.vue' /* webpackChunkName: "pages/contact/index" */))
const _7836db34 = () => interopDefault(import('../pages/enquiry/index.vue' /* webpackChunkName: "pages/enquiry/index" */))
const _f6a27396 = () => interopDefault(import('../pages/gallery/index.vue' /* webpackChunkName: "pages/gallery/index" */))
const _0db33f8c = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _f3c9e44c = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _b9b5cf3a = () => interopDefault(import('../pages/mob/index.vue' /* webpackChunkName: "pages/mob/index" */))
const _eb2704fc = () => interopDefault(import('../pages/programs/index.vue' /* webpackChunkName: "pages/programs/index" */))
const _7ce3dd80 = () => interopDefault(import('../pages/seo/index.vue' /* webpackChunkName: "pages/seo/index" */))
const _3bb4ea00 = () => interopDefault(import('../pages/social/index.vue' /* webpackChunkName: "pages/social/index" */))
const _2907a9a4 = () => interopDefault(import('../pages/testcontact.vue' /* webpackChunkName: "pages/testcontact" */))
const _14d90c87 = () => interopDefault(import('../pages/testimonials/index.vue' /* webpackChunkName: "pages/testimonials/index" */))
const _55b96146 = () => interopDefault(import('../pages/testUpload/index.vue' /* webpackChunkName: "pages/testUpload/index" */))
const _3ca875ac = () => interopDefault(import('../pages/texteditor.vue' /* webpackChunkName: "pages/texteditor" */))
const _1a04a1da = () => interopDefault(import('../pages/assistance/create.vue' /* webpackChunkName: "pages/assistance/create" */))
const _5f9eedd5 = () => interopDefault(import('../pages/mob/contacts/index.vue' /* webpackChunkName: "pages/mob/contacts/index" */))
const _2a510508 = () => interopDefault(import('../pages/programs/create.vue' /* webpackChunkName: "pages/programs/create" */))
const _a40661d2 = () => interopDefault(import('../pages/testimonials/create.vue' /* webpackChunkName: "pages/testimonials/create" */))
const _2048617d = () => interopDefault(import('../pages/mob/contacts/_id.vue' /* webpackChunkName: "pages/mob/contacts/_id" */))
const _c803f39a = () => interopDefault(import('../pages/assistance/_id.vue' /* webpackChunkName: "pages/assistance/_id" */))
const _cb7a5eaa = () => interopDefault(import('../pages/contact/_id.vue' /* webpackChunkName: "pages/contact/_id" */))
const _1c1ff64e = () => interopDefault(import('../pages/enquiry/_id.vue' /* webpackChunkName: "pages/enquiry/_id" */))
const _58d3d78b = () => interopDefault(import('../pages/mob/_id.vue' /* webpackChunkName: "pages/mob/_id" */))
const _fac00f2c = () => interopDefault(import('../pages/programs/_id.vue' /* webpackChunkName: "pages/programs/_id" */))
const _eb02f6a2 = () => interopDefault(import('../pages/testimonials/_id.vue' /* webpackChunkName: "pages/testimonials/_id" */))
const _24465e9c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _06ca96b0,
    name: "about"
  }, {
    path: "/assistance",
    component: _770385ea,
    name: "assistance"
  }, {
    path: "/banner",
    component: _12a0e002,
    name: "banner"
  }, {
    path: "/contact",
    component: _44ba4983,
    name: "contact"
  }, {
    path: "/enquiry",
    component: _7836db34,
    name: "enquiry"
  }, {
    path: "/gallery",
    component: _f6a27396,
    name: "gallery"
  }, {
    path: "/login",
    component: _0db33f8c,
    name: "login"
  }, {
    path: "/logout",
    component: _f3c9e44c,
    name: "logout"
  }, {
    path: "/mob",
    component: _b9b5cf3a,
    name: "mob"
  }, {
    path: "/programs",
    component: _eb2704fc,
    name: "programs"
  }, {
    path: "/seo",
    component: _7ce3dd80,
    name: "seo"
  }, {
    path: "/social",
    component: _3bb4ea00,
    name: "social"
  }, {
    path: "/testcontact",
    component: _2907a9a4,
    name: "testcontact"
  }, {
    path: "/testimonials",
    component: _14d90c87,
    name: "testimonials"
  }, {
    path: "/testUpload",
    component: _55b96146,
    name: "testUpload"
  }, {
    path: "/texteditor",
    component: _3ca875ac,
    name: "texteditor"
  }, {
    path: "/assistance/create",
    component: _1a04a1da,
    name: "assistance-create"
  }, {
    path: "/mob/contacts",
    component: _5f9eedd5,
    name: "mob-contacts"
  }, {
    path: "/programs/create",
    component: _2a510508,
    name: "programs-create"
  }, {
    path: "/testimonials/create",
    component: _a40661d2,
    name: "testimonials-create"
  }, {
    path: "/mob/contacts/:id",
    component: _2048617d,
    name: "mob-contacts-id"
  }, {
    path: "/assistance/:id",
    component: _c803f39a,
    name: "assistance-id"
  }, {
    path: "/contact/:id",
    component: _cb7a5eaa,
    name: "contact-id"
  }, {
    path: "/enquiry/:id",
    component: _1c1ff64e,
    name: "enquiry-id"
  }, {
    path: "/mob/:id",
    component: _58d3d78b,
    name: "mob-id"
  }, {
    path: "/programs/:id",
    component: _fac00f2c,
    name: "programs-id"
  }, {
    path: "/testimonials/:id",
    component: _eb02f6a2,
    name: "testimonials-id"
  }, {
    path: "/",
    component: _24465e9c,
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
