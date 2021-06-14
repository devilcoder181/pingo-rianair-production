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
        <div class="p-col-9">
            <div class="p-content-body">
              <div class="p-row no_margin_top">

                <div class="p-col">
                  <h2 class="subtitle_">Page SEO Details</h2>
                </div>

                 <div class="p-col">
                  <AdminFormPingoInput :text.sync="fetchSeo.title" title="Website Title"></AdminFormPingoInput>
                </div>

                <div class="p-col-6">
                  <AdminFormPingoTextarea :text.sync="fetchSeo.metaDesc" title="Website Description"></AdminFormPingoTextarea>
                </div>

                <div class="p-col-6">
                  <AdminFormPingoTextarea :text.sync="fetchSeo.keywords" title="Website Keywords"></AdminFormPingoTextarea>
                </div>

                <div class="p-col-6">
                  <AdminFormPingoInput :text.sync="fetchSeo.author" title="Website Author"></AdminFormPingoInput>
                </div>

                <div class="p-col-6">
                  <AdminFormPingoInput :text.sync="fetchSeo.weburl" title="OG URL"></AdminFormPingoInput>
                </div>

                <div class="p-col">
                  <AdminFormPingoTextarea :text.sync="fetchSeo.ogdesc" title="OG Description"></AdminFormPingoTextarea>
                </div>

                <div class="p-col">
                   <div class="button_group">
                      <nuxt-link to="/" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
                      <button class="btn_primary" @click="submit"><i class="icon icon-check-circle"></i> Update</button>
                    </div>
                </div>


              </div>
            </div>
        </div>

        <div class="p-col-3">
          <div class="p-content-body">
            <AdminCommonFileUpload
            title="OG Image Upload"
            :fetchUrl="fetchSeo.ogImage"
            @update-imageURL="getURL"
            ></AdminCommonFileUpload>
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
      pageTitle: 'Manage SEO',
      backLink: '/',
      seo: {
        title: '',
        metaDesc: '',
        keywords: '',
        author: '',
        weburl: '',
        ogdesc: '',
        ogImage: '',
      },
      fetchSeo: '',
     }
   },
   computed: {
     ...mapGetters(['showAlert', 'errAlert']),
   },
   methods: {
     getURL(value) {
        this.fetchSeo.ogImage = value
      },
      submit() {
       try{
        this.$store.commit('activateLoader', true)
        this.$store.dispatch('updateSeo', {
          value: this.fetchSeo,
          doc: 'main'
        })
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
   },
   async asyncData ({ app, params, error }) {
        const db = app.$fire.firestore

        try {
        const documentSnapshot = await db.collection('seo').doc('main').get()

        if (!documentSnapshot.exists) {
            error({ statusCode: 404, message: 'Data not found' })
            return
        }

        // Returned value is merged with the values defined in data().
        return {
            fetchSeo: {
            id: documentSnapshot.id,
            ...documentSnapshot.data()
            }
        }
        } catch (e) {
        error({ statusCode: 404, message: 'Data not found' })
        }
    },
}
</script>
