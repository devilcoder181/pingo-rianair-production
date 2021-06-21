<template>
    <div class="p-container mt_1">
        <div class="p-row">
            <div class="p-col">
                <AdminCommonTitle :title="pageTitle" :backLink="backLink">
                </AdminCommonTitle>
            </div>
        </div>

        <!-- Search Component -->
        <div class="p-row" >
            <div class="p-col">
                <div class="p-content-body">
                <transition name="global">
                    <UISearchContacts 
                        @search="search" 
                    ></UISearchContacts>
                </transition>
                </div>
            </div>
        </div>

        <!-- Contacts Component -->
    <div class="p-row">
        <div class="p-col">     
            <transition name="global">
                <AdminMobenquirylist></AdminMobenquirylist>
            </transition>
        </div>
    </div>
   

    </div>
</template>

<script>
export default {
  layout: 'mobile',
  data() {
     return {
      pageTitle: 'Enquiry Requests',
      backLink: '/',
     }
   },
   methods: {
     search(value) {
       this.$store.commit('searchEnquiry', value)
     }
   }
}
</script>

<style lang="scss" scoped>

</style>