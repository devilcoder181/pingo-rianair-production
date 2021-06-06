<template>
  <div class="p-container mt_1">
    <div class="p-row">

      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink"></AdminCommonTitle>
      </div>

    </div>

    <transition>
      <UIEditAbout
        @submitForm = "updateForm"
      >
      </UIEditAbout>
    </transition>

    <transition name="alertAnim">
      <AdminFormSuccess v-if="showAlert">
        <p><i class="icon icon-check-circle"></i> {{successMessage}}</p>
      </AdminFormSuccess>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  layout: 'admin',
  data() {
     return {
      pageTitle: 'About Section',
      backLink: '/',
      successMessage: '',
     }
   },
   computed: {
     ...mapGetters(['showAlert']),
   },
   methods: {
     async updateForm(value) {
       try{
         this.$store.commit('activateLoader', true)
         this.$store.dispatch('updatePost', value)
       } catch(e) {
         console.log(e)
       } finally {
         setTimeout(()=> {
           this.$store.commit('activateLoader', false)
           this.successMessage = 'Content Updated Successfully'
           this.$store.commit('activateAlert', true)
         },1000)
       }
     }
   }
}
</script>
