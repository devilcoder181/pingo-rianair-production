<template>
  <div class="p-row">
    <div class="p-col-9">
      <div class="p-content-body">
        <div class="p-row no_margin_top">
          <div class="p-col">
            <h2 class="subtitle_">Page SEO Details</h2>
          </div>

           <div class="p-col">
            <AdminFormPingoInput :text.sync="seo.title" title="Meta Title"></AdminFormPingoInput>
          </div>

           <div class="p-col-6">
            <AdminFormPingoTextarea :text.sync="seo.metaDesc" title="Meta Description"></AdminFormPingoTextarea>
          </div>

          <div class="p-col-6">
            <AdminFormPingoTextarea :text.sync="seo.keywords" title="Meta Keywords"></AdminFormPingoTextarea>
          </div>

          <div class="p-col">
            <button class="btn_primary" @click="submit()"><i class="icon icon-check-circle"></i> Update</button>
          </div>

        </div>
      </div>
    </div>

    <div class="p-col-3">
      <div class="p-content-body">
        <AdminCommonFileUpload title="OG Image Upload"  @update-imageURL="getURL"></AdminCommonFileUpload>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     seo: {
        title: '',
        metaDesc: '',
        keywords: '',
        fileURL: null,
     }
    }
  },
  methods: {
     getURL(value) {
        this.seo.fileURL = value
      },
      submit() {
        this.$emit('updateSEO', this.seo)
      }
  }
}
</script>

