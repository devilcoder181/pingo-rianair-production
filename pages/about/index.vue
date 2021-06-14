<template>
  <div class="p-container mt_1">
    <div class="p-row">

      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
            <button slot="seo" @click="openSeo()" v-if="!showSEO" class="btn_ btn_primary"><i class="icon icon-graph-bar"></i> SEO</button>
            <button slot="seo" @click="openSeo()" v-if="showSEO" class="btn_ btn_primary"><i class="icon icon-doc-text-inv"></i> Content</button>
        </AdminCommonTitle>
      </div>

    </div>

    <transition name="global">
      <UIEditAbout
        v-if="!showSEO"
        @submitForm = "updateForm"
      >
      </UIEditAbout>
    </transition>

    <transition name="global">
      <UIPageSEO
        v-if="showSEO"
        doc="aboutSEO"
      >
      </UIPageSEO>
    </transition>

    <transition name="alertAnim">
      <AdminFormSuccess v-if="showAlert">
        <p><i class="icon icon-check-circle"></i> {{successMessage}}</p>
      </AdminFormSuccess>
    </transition>

    <transition name="alertAnim">
      <AdminFormErrorAlert v-if="errAlert">
        <p><i class="icon icon-check-circle"></i> {{errorMessage}}</p>
      </AdminFormErrorAlert>
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
      errorMessage: '',
      showSEO: false,
     }
   },
   computed: {
     ...mapGetters(['showAlert', 'errAlert']),
   },
   methods: {
     async updateForm(value) {
       try{
        this.$store.commit('activateLoader', true)
        this.$store.dispatch('updatePost', value)
       } catch(e) {
        this.errorMessage = e
        this.$store.commit('activateErrAlert', true)
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
   }
}
</script>
