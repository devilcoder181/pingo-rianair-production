<template>
  <div class="p-container mt_1">
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink">
             <button slot="seo" @click="openSeo()" class="btn_ btn_primary"><i class="icon icon-graph-bar"></i> SEO</button>
        </AdminCommonTitle>
      </div>

    </div>

    <div class="p-row mt_1">
        <div class="p-col">
            <div class="p-content-body">
                <UISearchFilter 
                    collection="assistanceContent"
                    rountLink="/assistance/create"
                    buttonTitle="Create Assistance"
                ></UISearchFilter>
            </div>
        </div>
    </div>

    <div class="p-row">
        <div class="p-col">
            <AdminAssistanceList
                :content="assistanceContent"
            ></AdminAssistanceList>
        </div>
    </div>

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
      rountLink: ''
     }
   },
   computed: {
     ...mapGetters(['assistanceContent']),
    },
   methods: {

   }
}
</script>
