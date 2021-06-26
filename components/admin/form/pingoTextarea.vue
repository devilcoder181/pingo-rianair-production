<template>
  <div class="pingo_inputfeild">
    <label>{{title}}</label>
    <textarea :value="text" @input="$emit('update:text', $event.target.value)" rows="8"></textarea>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      require: true,
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
     textarea{
         position: relative;
         display: block;
         width: 100%;
         border: none;
         outline: none;
         @include smText2();
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
