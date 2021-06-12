<template>
  <div class="p-container mt_1">
    <div class="p-row">

      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
          <button slot="seo" @click="openSeo()" class="btn_ btn_primary"><i class="icon icon-graph-bar"></i> SEO</button>
        </AdminCommonTitle>
      </div>

    </div>

    <transition name="inner-anim">
      <UIEditAbout
        v-if="!showSEO"
        @submitForm = "updateForm"
      >
      </UIEditAbout>
    </transition>

    <transition name="inner-anim">
      <UIPageSEO
        v-if="showSEO"
        @updateSEO="seoUpdate"
      >
      </UIPageSEO>
    </transition>

    <transition name="alertAnim">
      <AdminFormSuccess v-if="showAlert">
        <p><i class="icon icon-check-circle"></i> {{successMessage}}</p>
      </AdminFormSuccess>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  layout: 'admin',
  data() {
     return {
      pageTitle: 'About Section',
      backLink: '/',
      successMessage: '',
      showSEO: false,
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
          },2000)
       }
     },
     openSeo() {
       this.showSEO = !this.showSEO;
     },
     async seoUpdate(value) {
       try{
         this.$store.commit('activateLoader', true)
         this.$store.dispatch('addSEO', {
           col : 'aboutSEO',
           value: value
         })
       }catch(e) {
         console.log(e)
       } finally {
          setTimeout(()=> {
            this.$store.commit('activateLoader', false)
            this.successMessage = 'SEO Updated Successfully'
            this.$store.commit('activateAlert', true)
          },2000)
       }
     }
   }
}
</script>
