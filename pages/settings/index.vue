<template>
  <div class="p-container mt_1">

    <!-- Title Component -->
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
            <nuxt-link slot="seo" to="/settings/create" class="btn_ btn_primary"><i class="icon icon-sticky-note"></i> Add Location</nuxt-link>
        </AdminCommonTitle>
      </div>
    </div>


    <!-- Contacts Component -->
    <div class="p-row">
        <div class="p-col">
            <transition name="global">
              <AdminLocationList></AdminLocationList>
            </transition>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
     return {
      pageTitle: 'Settings',
      backLink: '/',
     }
   },
   methods: {
     search() {

     }
   }
}
</script>
