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

    <!-- Contacts Component -->
    <div class="p-row">
        <div class="p-col">
            <div class="p-content-body">
                <div class="p-row">
                    <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.facebook"
                        icon="icon icon-facebook-square-brands"
                        title="Facebook">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.instagram"
                        icon="icon icon-instagram-1"
                        title="Instagram">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.whatsapp"
                        icon="icon icon-whatsapp"
                        title="Whatsapp">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.twitter"
                        icon="icon icon-twitter-square-brands"
                        title="Twitter">
                        </AdminFormPingoSocialInput>
                    </div>

                     <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.linkedin"
                        icon="icon icon-linkedin-brands"
                        title="LinkedIn">
                        </AdminFormPingoSocialInput>
                    </div>

                     <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.pintrest"
                        icon="icon icon-pinterest-square"
                        title="Pintrest">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.phone"
                        icon="icon icon-phone-square"
                        title="Phone">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput
                        :text.sync="socialContent.email"
                        icon="icon icon-envelope-square"
                        title="Email">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col">
                        <div class="button_group">
                            <nuxt-link to="/" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
                            <button @click="submit" class="btn_primary"><i class="icon icon-check-circle"></i> Update</button>
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
      pageTitle: 'Social Media Links',
      backLink: '/',
     }
   },
   computed: {
     ...mapGetters(['showAlert', 'errAlert', 'socialContent']),
   },
   methods: {
     submit() {
       try{
        this.$store.commit('activateLoader', true)
        this.$store.dispatch('updateSocialContent', this.socialContent)
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
     }
   }
}
</script>
