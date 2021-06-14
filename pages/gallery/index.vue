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

    <div class="p-row">
      <div class="p-col-9">
        <div class="p-content-body">
            <div class="p-row">
              <div class="p-col-3" v-for="(item, index) in galleryImage" :key="index">
                <UIImageWidget
                  :imgUrl="item.imgLink"
                  :id="item.id"
                  @deleteImage="deleteNow"
                ></UIImageWidget>
              </div>
            </div>
        </div>
      </div>

      <div class="p-col-3">
          <div class="p-content-body">
              <AdminCommonFileUpload title="Upload Image"  @update-imageURL="getURL"></AdminCommonFileUpload>
          </div>
      </div>

    </div>

    <!-- SEO Component -->
    <transition name="global">
     <UIPageSEO
        v-if="showSEO"
        doc="galerySEO"
      >
      </UIPageSEO>
    </transition>

    <transition name="scale">
        <UIAlertDelete
            v-if="deleteAlert"
            @cancel="cancelDelete"
            @remove="remove"
            :id="currentId"
        >
        </UIAlertDelete>
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
      pageTitle: 'Gallery',
      backLink: '/',
      showLoader: false,
      showSEO: false,
      successMessage: '',
      errorMessage: '',
      deleteAlert: false,
      currentId: '',
      gallery: {
        imgLink: '',
        setDate: new Date()
      }
     }
   },
   computed: {
    ...mapGetters(['showAlert', 'errAlert', 'galleryImage']),
    },
    methods: {
       async getURL(value) {
          this.gallery.imgLink = value
          try{
            this.$store.commit('activateLoader', true)
            this.$store.dispatch('addImage', this.gallery)
            
            } catch(e) {
                this.errorMessage = e
                this.$store.commit('activateErrAlert', true)
            } finally {
                Object.assign(this.$data, this.$options.data());
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Image Updated Successfully'
                    this.$store.commit('activateAlert', true)
                    location.reload()
                },2000)

            }

        },
        deleteNow(value) {
            this.deleteAlert = true;
            this.currentId = value;
        },
        cancelDelete() {
            this.deleteAlert = false;
        },
        async remove(value) {
           try{
            this.deleteAlert = false
            this.$store.commit('activateLoader', true)
             this.$store.dispatch('deleteImage', value)
            } catch(e) {
                console.log(e)
            } finally {
                setTimeout(()=> {
                    this.$store.commit('activateLoader', false)
                    this.successMessage = 'Content Deleted Successfully'
                    this.$store.commit('activateAlert', true)
                    //location.reload();
                },2000)
            }
        },
      openSeo() {
        this.showSEO = !this.showSEO;
      },
    }
}
</script>
