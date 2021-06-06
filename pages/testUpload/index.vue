<template>
  <div class="p-container mt_1">
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink"></AdminCommonTitle>
      </div>

      <div class="p-col-9">
        <div class="p-content-body">
          <p>{{fileURL}}</p>
        </div>
      </div>

      <div class="p-col-3">
        <div class="p-content-body">
          <AdminCommonFileUpload :loader="showLoader" @update-showLoader="updateLoader" @update-imageURL="getURL"></AdminCommonFileUpload>
        </div>
      </div>

    </div>

    <transition name="slide-up">
      <AdminCommonPngLoader v-if="showLoader"></AdminCommonPngLoader>
    </transition>


  </div>
</template>

<script>
  export default {
   layout: 'admin',
   data() {
     return {
      pageTitle: 'Custom File Upload',
      backLink: '/',
      showLoader: false,
      fileURL: null,
     }
   },
    methods: {
      updateLoader(value) {
        this.showLoader = value;
      },
      getURL(value) {
        this.fileURL = value
      }
    }

  }
</script>
