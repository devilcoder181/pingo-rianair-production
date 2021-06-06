<template>
  <nuxt-link :to="link"><i :class="icon"></i> <span>{{name}}</span></nuxt-link>
</template>
<script>
  export default {
    props: {
      name:{
        type: String,
        required: true
      },
      link:{
        type: String,
        required: true
      },
      icon: {
        type:String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  //@import '~assets/styles/admin/components/variables.scss';

  a{
    position: relative;
    display: flex;
    align-items: center;
    color: $color-text;
    font-size: 0.9vw;
    font-weight: normal;
    padding: 0.75em 1em;
    border-radius: 0.25em;

    i{
      position: relative;
      font-size: 1vw;
      color: $color-icon;
    }

    span{
      display: block;
      margin: 0 1em;
    }

    &.nuxt-link-exact-active{
      background-color: $color-primary;
      color: $color-white;
      box-shadow: 1px 1px 10px #3d50fa;
      i{
        color: $color-white;
      }
    }

    &:not(.nuxt-link-exact-active){
      &:hover, &:focus, &:active{
      background-color: #202127;
      }
    }
  }

</style>
