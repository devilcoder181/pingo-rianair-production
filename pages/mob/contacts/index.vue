<template>
    <div class="p-container mt_1">
        <div class="p-row">
            <div class="p-col">
                <AdminCommonTitle :title="pageTitle" :backLink="backLink" >
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
                <AdminMobcontactlist></AdminMobcontactlist>
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
      pageTitle: 'Contacts Requests',
      backLink: '/mob/contacts',
     }
   },
   methods: {
     search(value) {
       this.$store.commit('searchContact', value)
     }
   }
}
</script>
