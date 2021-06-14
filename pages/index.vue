<template>
  <div class="p-container mt_1">

      <div class="p-row">
      <div class="p-col">

        <div class="p-content-body">
          <h3 class="dash_title">Quick Links</h3>

        <div class="widget_wrapper">
          <AdminCommonWidget
            icon="icon icon-suitcase"
            title="Programs"
            :number="programLength"
            link="/programs"
          ></AdminCommonWidget>
          <AdminCommonWidget
            icon="icon icon-folder-open"
            title="Assistance"
            :number="assistanceLength"
            link="/assistance"
          ></AdminCommonWidget>
          <AdminCommonWidget
            icon="icon icon-person-stalker"
            title="Contacts"
            :number="contactLength"
            link="/contact"
          ></AdminCommonWidget>
          <AdminCommonWidget
            icon="icon icon-social-buffer"
            title="Enquiry"
            :number="enquiryLength"
            link="/enquiry"
          ></AdminCommonWidget>
        </div>

        </div>


      </div>
    </div>

    <div class="p-row">
      <div class="p-col-8">

        <div class="p-content-body">
          <h3 class="dash_title">Client Graph</h3>
          <div class="graph_wrapper">

          </div>
        </div>

      </div>

      <div class="p-col-4">
        <div class="p-content-body">

        </div>
      </div>
    </div>

    <div class="p-row">
      <div class="p-col-6">
        <div class="p-content-body">

          <h3 class="dash_title">Contact Requests</h3>
           <UIDashContact></UIDashContact>
        </div>

      </div>

      <div class="p-col-6">
        <div class="p-content-body">
          <h3 class="dash_title">Enquiry Requests</h3>
          <UIDashEnquiry></UIDashEnquiry>
        </div>
      </div>

    </div>




  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
   layout: 'admin',
   computed: {
     ...mapGetters(['assistanceLength', 'programLength', 'contactLength', 'enquiryLength']),
   },
  }
</script>

<style lang="scss" scoped>
.widget_wrapper{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
}
</style>
