<template>
  <div class="p-row">
    <div class="p-col-9">
      <div class="p-content-body">
        <div class="p-row no_margin_top">
          <div class="p-col">
            <h2 class="subtitle_">Page SEO Details</h2>
          </div>
 
           <div class="p-col">
            <AdminFormPingoInput :text.sync="fetchSeo.title" title="Meta Title"></AdminFormPingoInput>
          </div>

           <div class="p-col-6">
            <AdminFormPingoTextarea :text.sync="fetchSeo.metaDesc" title="Meta Description"></AdminFormPingoTextarea>
          </div>

          <div class="p-col-6">
            <AdminFormPingoTextarea :text.sync="fetchSeo.keywords" title="Meta Keywords"></AdminFormPingoTextarea>
          </div>

          <div class="p-col">
            <button 
            class="btn_primary" 
            @click="submit()">
            <i class="icon icon-check-circle"></i> Update</button>
          </div>

        </div>
      </div>
    </div>

    <div class="p-col-3">
      <div class="p-content-body">
        <AdminCommonFileUpload 
        title="OG Image Upload" 
        :fetchUrl="fetchSeo.fileURL"
        @update-imageURL="getURL"></AdminCommonFileUpload>
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
  props: {
    doc: {
      type: String
    }
  },
  data() {
    return {
      fetchSeo: '',
      successMessage: '',
    }
  },
  computed: {
     ...mapGetters(['seoContent', 'showAlert', 'errAlert']),
   },
  methods: {
     getURL(value) {
        this.fetchSeo.fileURL = value
      },
      async submit() {
       try{
         this.$store.commit('activateLoader', true)
         this.$store.dispatch('updateSeo', {
           doc : this.doc,
           value: this.fetchSeo,
         })
         this.successMessage = 'SEO Updated Successfully'
       }catch(e) {
         this.errorMessage = e
        this.$store.commit('activateErrAlert', true)
       } finally {
          setTimeout(()=> {
            this.$store.commit('activateLoader', false)
            this.$store.commit('activateAlert', true)
          },2000)
       }
     }
  },
  mounted() {
     for (var i in this.seoContent) {
        if (this.seoContent[i].id == this.doc) {
          this.fetchSeo = this.seoContent[i]
          break;
        }
      }
  }
}
</script>

