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
                        :text.sync="socialMedia.facebook"
                        icon="" 
                        title="Facebook">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput 
                        :text.sync="socialMedia.instagram"
                        icon="" 
                        title="Instagram">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput 
                        :text.sync="socialMedia.whatsapp"
                        icon="" 
                        title="Whatsapp">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput 
                        :text.sync="socialMedia.twitter"
                        icon="" 
                        title="Twitter">
                        </AdminFormPingoSocialInput>
                    </div>

                     <div class="p-col-6">
                        <AdminFormPingoSocialInput 
                        :text.sync="socialMedia.linkedin"
                        icon="" 
                        title="LinkedIn">
                        </AdminFormPingoSocialInput>
                    </div>

                     <div class="p-col-6">
                        <AdminFormPingoSocialInput 
                        :text.sync="socialMedia.pintrest"
                        icon="" 
                        title="Pintrest">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput 
                        :text.sync="socialMedia.phone"
                        icon="" 
                        title="Phone">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col-6">
                        <AdminFormPingoSocialInput 
                        :text.sync="socialMedia.email"
                        icon="" 
                        title="Email">
                        </AdminFormPingoSocialInput>
                    </div>

                    <div class="p-col">
                        <div class="button_group">
                            <nuxt-link to="/" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
                            <button class="btn_primary"><i class="icon icon-check-circle"></i> Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
     return {
      pageTitle: 'Social Media Links',
      backLink: '/',
      socialMedia: {
          facebook:'',
          instagram: '',
          whatsapp: '',
          twitter: '',
          linkedin: '',
          pintrest: '',
          phone: '',
          email: '',
      }
     }
   },
   methods: {
     search() {

     }
   }
}
</script>