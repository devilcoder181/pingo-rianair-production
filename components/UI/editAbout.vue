<template>
  <div class="p-row">
    <div class="p-col">
      <div class="p-content-body">
        <div class="p-row no_margin_top">
          <div class="p-col">
            <h2 class="subtitle_">Edit Content</h2>
          </div>

          <div class="p-col">
            <AdminFormPingoInput :text.sync="aboutText.title" title="Title"></AdminFormPingoInput>
          </div>

          <div class="p-col-6">
            <AdminFormPingoTextarea :text.sync="aboutText.homeContent" title="Home Content"></AdminFormPingoTextarea>
          </div>

          <div class="p-col-6">
            <AdminFormPingoTextarea :text.sync="aboutText.pageContent" title="Page Content"></AdminFormPingoTextarea>
          </div>

        </div>
      </div>
    </div>

    <div class="p-col-6">
      <div class="p-content-body">
        <div class="p-row no_margin_top">
          <div class="p-col">
            <h2 class="subtitle_">Edit Our Vision</h2>
          </div>

          <div class="p-col">
            <AdminFormPingoTextarea :text.sync="aboutText.vissionContent" title="Vision Content"></AdminFormPingoTextarea>
          </div>

        </div>
      </div>
    </div>

    <div class="p-col-6">
      <div class="p-content-body">
        <div class="p-row no_margin_top">
          <div class="p-col">
            <h2 class="subtitle_">Edit Our Mission</h2>
          </div>

          <div class="p-col">
            <AdminFormPingoTextarea :text.sync="aboutText.missionContent" title="Mission Content"></AdminFormPingoTextarea>
          </div>

        </div>
      </div>
    </div>

    <div class="p-col">
      <div class="button_group">
        <nuxt-link to="/" class="btn_secondary"><i class="icon icon-close-circled"></i> Cancel</nuxt-link>
        <button class="btn_primary" @click="submit()"><i class="icon icon-check-circle"></i> Update</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters } from 'vuex';

export default {
  // data() {
  //   return{
  //     aboutText: {
  //       title: '',
  //       homeContent: '',
  //       pageContent: '',
  //       vissionContent: '',
  //       missionContent: ''
  //     }
  //   }
  // },
 computed: {
  ...mapGetters(['aboutText']),
  },
 methods: {
   submit() {
     this.$emit('submitForm', this.aboutText)
   },
 }
}
</script>
