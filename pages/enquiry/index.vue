<template>
  <div class="p-container mt_1">
    <!-- Title Component -->
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
        </AdminCommonTitle>
      </div>
    </div>

    <!-- Search Component -->
    <div class="p-row mt_1" >
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
                <AdminEnquiryList></AdminEnquiryList>
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
      pageTitle: 'Enquiry Requests',
      backLink: '/',
     }
   },
}
</script>
