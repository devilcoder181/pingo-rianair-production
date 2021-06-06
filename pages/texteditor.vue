<template>
  <div class="p-container mt_1">
    <div class="p-row">
      <div class="p-col">
        <AdminCommonTitle :title="pageTitle" :backLink="backLink"></AdminCommonTitle>
      </div>


    </div>


  </div>
</template>

<script>
  export default {
   layout: 'admin',
   data() {
     return {
      pageTitle: 'TextEditor',
      backLink: '/',
     }
   },
  }
</script>
