<template>
  <div class="p-container mt_1">
    <div class="p-row">

      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
        </AdminCommonTitle>
      </div>

    </div>

    <div class="p-row">
        <div class="p-col">
            <div class="p-content-body">
                <div class="p-row no_margin_top">
                    <div class="p-col">
                        <h2 class="subtitle_">Edit Content</h2>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="bannerContent.top" title="Banner Top Title"></AdminFormPingoInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="bannerContent.main" title="Banner Main Title"></AdminFormPingoInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoInput :text.sync="bannerContent.sub" title="Banner Subtitle"></AdminFormPingoInput>
                    </div>

                    <div class="p-col">
                        <div class="button_group">
                            <nuxt-link :to="backLink" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
                            <button class="btn_primary" @click="submit()"><i class="icon icon-check-circle"></i> Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


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
      pageTitle: 'Banner Section',
      backLink: '/',
      successMessage: '',
      errorMessage: '',
      showSEO: false,
     }
   },
   computed: {
     ...mapGetters(['showAlert', 'errAlert', 'bannerContent']),
   },
   methods: {
     async submit() {
       try{
        this.$store.commit('activateLoader', true)
        this.$store.dispatch('editBanner', this.bannerContent)
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
   }
}
</script>
