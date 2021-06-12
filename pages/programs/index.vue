<template>
  <div class="p-container mt_1">

    <!-- Title Component -->
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
             <button slot="seo" @click="openSeo()" v-if="!showSEO" class="btn_ btn_primary"><i class="icon icon-graph-bar"></i> SEO</button>
             <button slot="seo" @click="openSeo()" v-if="showSEO" class="btn_ btn_primary"><i class="icon icon-doc-text-inv"></i> Content</button>
        </AdminCommonTitle>
      </div>
    </div>

    <!-- Search Component -->
    <div class="p-row mt_1"  v-if="!this.showSEO">
        <div class="p-col">
            <div class="p-content-body">
              <transition name="global">
                <UISearchFilter 
                    collection="poragramsContent"
                    rountLink="/programs/create"
                    buttonTitle="Create Program"
                    @search="search" 
                ></UISearchFilter>
              </transition>
            </div>
        </div>
    </div>

    <!-- Program Component -->
    <div class="p-row">
        <div class="p-col">
            <transition name="global">
              <AdminProgramList v-if="!this.showSEO"></AdminProgramList>
            </transition>
        </div>
    </div>

    <!-- SEO Component -->
    <transition name="global">
      <UIPageSEO
        v-if="showSEO"
        @updateSEO="seoUpdate"
      >
      </UIPageSEO>
    </transition>

    <!-- Alert Component -->
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
      pageTitle: 'Programs',
      backLink: '/',
      successMessage: '',
      showSEO: false,
      errorMessage: '',
     }
  },
  computed: {
    ...mapGetters(['showAlert', 'errAlert']),
  },
  methods: {
    openSeo() {
      this.showSEO = !this.showSEO;
    },
    async seoUpdate(value) {
       try{
         this.$store.commit('activateLoader', true)
         this.$store.dispatch('addSEO', {
           col : 'programsSEO',
           value: value
         })
       }catch(e) {
         this.errorMessage = e
          this.$store.commit('activateErrAlert', true)
       } finally {
          setTimeout(()=> {
            this.$store.commit('activateLoader', false)
            this.successMessage = 'SEO Updated Successfully'
            this.$store.commit('activateAlert', true)
          },2000)
       }
    },
    search(value) {
      this.$store.commit('searchProgram', value)
    }
  }
}
</script>
