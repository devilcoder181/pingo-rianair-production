<template>
  <div class="pingo_inputfeild">
    <label>{{title}}</label>
    <input :value="text" @input="$emit('update:text', $event.target.value)" type="text">
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
      type: String,
    },
    text: {
      type: String,
      require: true,
    }
  },

}
</script>

<style lang="scss" scoped>
  .pingo_inputfeild{
    position: relative;
    display: block;
    width: 100%;
    label{
      position: relative;
      display: block;
      @include smText2();
      color: $color-text;
      font-weight: 500;
      margin-bottom: 0.5em;
    }
     input{
         position: relative;
         display: block;
         width: 100%;
         height: 3em;
         border: none;
         outline: none;
         font-size: 1vw;
         font-weight: 500;
         color: $color-white;
         padding: 0.5em 1em;
          background-color: #202127;
          border-radius: 0.25em;
          margin: 0 0 1em;
          transition: all 0.3s ease;

          &:focus{
            box-shadow: 1px 1px 3px $color-primary;
            border:1px solid $color-primary;
          }

        }

  }
</style>
