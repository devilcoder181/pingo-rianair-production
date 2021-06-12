<template>
  <div class="p-container mt_1">
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
             <button slot="seo" @click="openSeo()" class="btn_ btn_primary"><i class="icon icon-graph-bar"></i> SEO</button>
        </AdminCommonTitle>
      </div>

    </div>

    <div class="p-row mt_1"  v-if="!this.showSEO">
        <div class="p-col">
            <div class="p-content-body">
                <UISearchFilter 
                    collection="assistanceContent"
                    rountLink="/assistance/create"
                    buttonTitle="Create Assistance"
                    @search="search"
                ></UISearchFilter>
            </div>
        </div>
    </div>

    <div class="p-row">
        <div class="p-col">
            <AdminAssistanceList v-if="!this.showSEO"></AdminAssistanceList>
        </div>
    </div>

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
      pageTitle: 'Assistance',
      backLink: '/',
      successMessage: '',
      showSEO: false,
     }
   },
   computed: {
     ...mapGetters(['showAlert']),
   },
   methods: {
      openSeo() {
       this.showSEO = !this.showSEO;
     },
     async seoUpdate(value) {
       try{
         this.$store.commit('activateLoader', true)
         this.$store.dispatch('addSEO', {
           col : 'assistanceSEO',
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
     },
     search(value) {
       this.$store.commit('searchAssistance', value)
     }
   }
}
</script>
