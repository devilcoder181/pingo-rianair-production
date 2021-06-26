<template>
  <div class="title_wrapper">
    <h1>{{title}}</h1>

   <div class="button_wrapper">
      <slot name="seo"></slot>
      <nuxt-link class="btn_ btn_grey" :to="backLink"><i class="icon icon-arrow-left"></i> Back</nuxt-link>
   </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    backLink: {
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>
  .title_wrapper{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width:767px){
      flex-direction: column;
    }

    h1{
      position: relative;
      display: block;
      color: $color-white;
      @include lgText();
    }
  }

  .button_wrapper{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 -5px;

    .btn_{
      margin: 0 5px;
    }

  }
</style>
