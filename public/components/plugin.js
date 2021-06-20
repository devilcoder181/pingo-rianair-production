import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  AdminAssistanceList: () => import('../..\\components\\admin\\assistanceList.vue' /* webpackChunkName: "components/admin-assistance-list" */).then(c => wrapFunctional(c.default || c)),
  AdminContactList: () => import('../..\\components\\admin\\contactList.vue' /* webpackChunkName: "components/admin-contact-list" */).then(c => wrapFunctional(c.default || c)),
  AdminEnquiryList: () => import('../..\\components\\admin\\enquiryList.vue' /* webpackChunkName: "components/admin-enquiry-list" */).then(c => wrapFunctional(c.default || c)),
  AdminProgramList: () => import('../..\\components\\admin\\programList.vue' /* webpackChunkName: "components/admin-program-list" */).then(c => wrapFunctional(c.default || c)),
  AdminSideNavigation: () => import('../..\\components\\admin\\sideNavigation.vue' /* webpackChunkName: "components/admin-side-navigation" */).then(c => wrapFunctional(c.default || c)),
  AdminTestiList: () => import('../..\\components\\admin\\testiList.vue' /* webpackChunkName: "components/admin-testi-list" */).then(c => wrapFunctional(c.default || c)),
  AdminTopNav: () => import('../..\\components\\admin\\topNav.vue' /* webpackChunkName: "components/admin-top-nav" */).then(c => wrapFunctional(c.default || c)),
  UIAlertDelete: () => import('../..\\components\\UI\\alertDelete.vue' /* webpackChunkName: "components/u-i-alert-delete" */).then(c => wrapFunctional(c.default || c)),
  UIDashChart: () => import('../..\\components\\UI\\dashChart.vue' /* webpackChunkName: "components/u-i-dash-chart" */).then(c => wrapFunctional(c.default || c)),
  UIDashContact: () => import('../..\\components\\UI\\dashContact.vue' /* webpackChunkName: "components/u-i-dash-contact" */).then(c => wrapFunctional(c.default || c)),
  UIDashEnquiry: () => import('../..\\components\\UI\\dashEnquiry.vue' /* webpackChunkName: "components/u-i-dash-enquiry" */).then(c => wrapFunctional(c.default || c)),
  UIDashReach: () => import('../..\\components\\UI\\dashReach.vue' /* webpackChunkName: "components/u-i-dash-reach" */).then(c => wrapFunctional(c.default || c)),
  UIEditAbout: () => import('../..\\components\\UI\\editAbout.vue' /* webpackChunkName: "components/u-i-edit-about" */).then(c => wrapFunctional(c.default || c)),
  UIImageWidget: () => import('../..\\components\\UI\\imageWidget.vue' /* webpackChunkName: "components/u-i-image-widget" */).then(c => wrapFunctional(c.default || c)),
  UIPageSEO: () => import('../..\\components\\UI\\pageSEO.vue' /* webpackChunkName: "components/u-i-page-s-e-o" */).then(c => wrapFunctional(c.default || c)),
  UISearchContacts: () => import('../..\\components\\UI\\searchContacts.vue' /* webpackChunkName: "components/u-i-search-contacts" */).then(c => wrapFunctional(c.default || c)),
  UISearchFilter: () => import('../..\\components\\UI\\searchFilter.vue' /* webpackChunkName: "components/u-i-search-filter" */).then(c => wrapFunctional(c.default || c)),
  AdminCommonFileUpload: () => import('../..\\components\\admin\\common\\fileUpload.vue' /* webpackChunkName: "components/admin-common-file-upload" */).then(c => wrapFunctional(c.default || c)),
  AdminCommonNavLink: () => import('../..\\components\\admin\\common\\navLink.vue' /* webpackChunkName: "components/admin-common-nav-link" */).then(c => wrapFunctional(c.default || c)),
  AdminCommonNotification: () => import('../..\\components\\admin\\common\\notification.vue' /* webpackChunkName: "components/admin-common-notification" */).then(c => wrapFunctional(c.default || c)),
  AdminCommonPngLoader: () => import('../..\\components\\admin\\common\\png-loader.vue' /* webpackChunkName: "components/admin-common-png-loader" */).then(c => wrapFunctional(c.default || c)),
  AdminCommonTitle: () => import('../..\\components\\admin\\common\\title.vue' /* webpackChunkName: "components/admin-common-title" */).then(c => wrapFunctional(c.default || c)),
  AdminCommonWidget: () => import('../..\\components\\admin\\common\\widget.vue' /* webpackChunkName: "components/admin-common-widget" */).then(c => wrapFunctional(c.default || c)),
  AdminFormError: () => import('../..\\components\\admin\\form\\error.vue' /* webpackChunkName: "components/admin-form-error" */).then(c => wrapFunctional(c.default || c)),
  AdminFormErrorAlert: () => import('../..\\components\\admin\\form\\errorAlert.vue' /* webpackChunkName: "components/admin-form-error-alert" */).then(c => wrapFunctional(c.default || c)),
  AdminFormPingoInput: () => import('../..\\components\\admin\\form\\pingoInput.vue' /* webpackChunkName: "components/admin-form-pingo-input" */).then(c => wrapFunctional(c.default || c)),
  AdminFormPingoSocialInput: () => import('../..\\components\\admin\\form\\pingoSocialInput.vue' /* webpackChunkName: "components/admin-form-pingo-social-input" */).then(c => wrapFunctional(c.default || c)),
  AdminFormPingoTextarea: () => import('../..\\components\\admin\\form\\pingoTextarea.vue' /* webpackChunkName: "components/admin-form-pingo-textarea" */).then(c => wrapFunctional(c.default || c)),
  AdminFormSuccess: () => import('../..\\components\\admin\\form\\success.vue' /* webpackChunkName: "components/admin-form-success" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
