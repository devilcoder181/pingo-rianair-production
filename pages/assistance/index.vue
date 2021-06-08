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
                <UISearchFilter title="Assistance List" collection="assistanceContent"></UISearchFilter>
            </div>
        </div>
    </div>

    <div class="p-row">
        <div class="p-col">
            <AdminAssistanceList></AdminAssistanceList>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
     return {
      pageTitle: 'Assistance',
      backLink: '/',
     }
   },
   methods: {

   }
}
</script>
