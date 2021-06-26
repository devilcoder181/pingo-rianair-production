import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as UIAlertDelete } from '../../components/UI/alertDelete.vue'
export { default as UIDashChart } from '../../components/UI/dashChart.vue'
export { default as UIDashContact } from '../../components/UI/dashContact.vue'
export { default as UIDashEnquiry } from '../../components/UI/dashEnquiry.vue'
export { default as UIDashReach } from '../../components/UI/dashReach.vue'
export { default as UIEditAbout } from '../../components/UI/editAbout.vue'
export { default as UIImageWidget } from '../../components/UI/imageWidget.vue'
export { default as UIPageSEO } from '../../components/UI/pageSEO.vue'
export { default as UISearchContacts } from '../../components/UI/searchContacts.vue'
export { default as UISearchFilter } from '../../components/UI/searchFilter.vue'
export { default as AdminAssistanceList } from '../../components/admin/assistanceList.vue'
export { default as AdminBottomNav } from '../../components/admin/bottomNav.vue'
export { default as AdminContactList } from '../../components/admin/contactList.vue'
export { default as AdminEnquiryList } from '../../components/admin/enquiryList.vue'
export { default as AdminLocationList } from '../../components/admin/locationList.vue'
export { default as AdminMobcontactlist } from '../../components/admin/mobcontactlist.vue'
export { default as AdminMobenquirylist } from '../../components/admin/mobenquirylist.vue'
export { default as AdminProgramList } from '../../components/admin/programList.vue'
export { default as AdminSideNavigation } from '../../components/admin/sideNavigation.vue'
export { default as AdminTestiList } from '../../components/admin/testiList.vue'
export { default as AdminTopNav } from '../../components/admin/topNav.vue'
export { default as AdminTopNavMobile } from '../../components/admin/topNavMobile.vue'
export { default as AdminCommonFileUpload } from '../../components/admin/common/fileUpload.vue'
export { default as AdminCommonNavLink } from '../../components/admin/common/navLink.vue'
export { default as AdminCommonNotification } from '../../components/admin/common/notification.vue'
export { default as AdminCommonPngLoader } from '../../components/admin/common/png-loader.vue'
export { default as AdminCommonTitle } from '../../components/admin/common/title.vue'
export { default as AdminCommonWidget } from '../../components/admin/common/widget.vue'
export { default as AdminFormError } from '../../components/admin/form/error.vue'
export { default as AdminFormErrorAlert } from '../../components/admin/form/errorAlert.vue'
export { default as AdminFormPingoInput } from '../../components/admin/form/pingoInput.vue'
export { default as AdminFormPingoSocialInput } from '../../components/admin/form/pingoSocialInput.vue'
export { default as AdminFormPingoTextarea } from '../../components/admin/form/pingoTextarea.vue'
export { default as AdminFormSuccess } from '../../components/admin/form/success.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyUIAlertDelete = import('../../components/UI/alertDelete.vue' /* webpackChunkName: "components/u-i-alert-delete" */).then(c => wrapFunctional(c.default || c))
export const LazyUIDashChart = import('../../components/UI/dashChart.vue' /* webpackChunkName: "components/u-i-dash-chart" */).then(c => wrapFunctional(c.default || c))
export const LazyUIDashContact = import('../../components/UI/dashContact.vue' /* webpackChunkName: "components/u-i-dash-contact" */).then(c => wrapFunctional(c.default || c))
export const LazyUIDashEnquiry = import('../../components/UI/dashEnquiry.vue' /* webpackChunkName: "components/u-i-dash-enquiry" */).then(c => wrapFunctional(c.default || c))
export const LazyUIDashReach = import('../../components/UI/dashReach.vue' /* webpackChunkName: "components/u-i-dash-reach" */).then(c => wrapFunctional(c.default || c))
export const LazyUIEditAbout = import('../../components/UI/editAbout.vue' /* webpackChunkName: "components/u-i-edit-about" */).then(c => wrapFunctional(c.default || c))
export const LazyUIImageWidget = import('../../components/UI/imageWidget.vue' /* webpackChunkName: "components/u-i-image-widget" */).then(c => wrapFunctional(c.default || c))
export const LazyUIPageSEO = import('../../components/UI/pageSEO.vue' /* webpackChunkName: "components/u-i-page-s-e-o" */).then(c => wrapFunctional(c.default || c))
export const LazyUISearchContacts = import('../../components/UI/searchContacts.vue' /* webpackChunkName: "components/u-i-search-contacts" */).then(c => wrapFunctional(c.default || c))
export const LazyUISearchFilter = import('../../components/UI/searchFilter.vue' /* webpackChunkName: "components/u-i-search-filter" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminAssistanceList = import('../../components/admin/assistanceList.vue' /* webpackChunkName: "components/admin-assistance-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminBottomNav = import('../../components/admin/bottomNav.vue' /* webpackChunkName: "components/admin-bottom-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminContactList = import('../../components/admin/contactList.vue' /* webpackChunkName: "components/admin-contact-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminEnquiryList = import('../../components/admin/enquiryList.vue' /* webpackChunkName: "components/admin-enquiry-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminLocationList = import('../../components/admin/locationList.vue' /* webpackChunkName: "components/admin-location-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminMobcontactlist = import('../../components/admin/mobcontactlist.vue' /* webpackChunkName: "components/admin-mobcontactlist" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminMobenquirylist = import('../../components/admin/mobenquirylist.vue' /* webpackChunkName: "components/admin-mobenquirylist" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminProgramList = import('../../components/admin/programList.vue' /* webpackChunkName: "components/admin-program-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminSideNavigation = import('../../components/admin/sideNavigation.vue' /* webpackChunkName: "components/admin-side-navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminTestiList = import('../../components/admin/testiList.vue' /* webpackChunkName: "components/admin-testi-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminTopNav = import('../../components/admin/topNav.vue' /* webpackChunkName: "components/admin-top-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminTopNavMobile = import('../../components/admin/topNavMobile.vue' /* webpackChunkName: "components/admin-top-nav-mobile" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCommonFileUpload = import('../../components/admin/common/fileUpload.vue' /* webpackChunkName: "components/admin-common-file-upload" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCommonNavLink = import('../../components/admin/common/navLink.vue' /* webpackChunkName: "components/admin-common-nav-link" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCommonNotification = import('../../components/admin/common/notification.vue' /* webpackChunkName: "components/admin-common-notification" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCommonPngLoader = import('../../components/admin/common/png-loader.vue' /* webpackChunkName: "components/admin-common-png-loader" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCommonTitle = import('../../components/admin/common/title.vue' /* webpackChunkName: "components/admin-common-title" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminCommonWidget = import('../../components/admin/common/widget.vue' /* webpackChunkName: "components/admin-common-widget" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminFormError = import('../../components/admin/form/error.vue' /* webpackChunkName: "components/admin-form-error" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminFormErrorAlert = import('../../components/admin/form/errorAlert.vue' /* webpackChunkName: "components/admin-form-error-alert" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminFormPingoInput = import('../../components/admin/form/pingoInput.vue' /* webpackChunkName: "components/admin-form-pingo-input" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminFormPingoSocialInput = import('../../components/admin/form/pingoSocialInput.vue' /* webpackChunkName: "components/admin-form-pingo-social-input" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminFormPingoTextarea = import('../../components/admin/form/pingoTextarea.vue' /* webpackChunkName: "components/admin-form-pingo-textarea" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminFormSuccess = import('../../components/admin/form/success.vue' /* webpackChunkName: "components/admin-form-success" */).then(c => wrapFunctional(c.default || c))
