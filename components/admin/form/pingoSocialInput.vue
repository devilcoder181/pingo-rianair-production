<template>
  <div class="pingo_inputfeild">
    <label>{{title}}</label>
    <div class="input_">
        <div class="icon_">
            <i :class="icon"></i>
        </div>
        <input :value="text" @input="$emit('update:text', $event.target.value)" type="text">
    </div>
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
    },
    icon: {
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

    .input_{
        position: relative;
        width: 100%;
        display: flex;

        input{
            flex: 1;
        }

        .icon_{
            position: relative;
            padding: 0 0.5em;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $color-white;
            background: $color-primary;
            height: 2.75rem;
            border-radius: 0.25em 0 0 0.25em;
            @include mdText2();

            i{
                display: contents;
            }
        }
    }

     input{
         position: relative;
         display: block;
         width: 100%;
         height: 2.75rem;
         border: none;
         outline: none;
         @include smText2();
         font-weight: 500;
         color: $color-white;
         padding: 0.5em 1em;
          background-color: #202127;
          border-radius:  0 0.25em 0.25em 0;
          margin: 0 0 1em;
          transition: all 0.3s ease;

          &:focus{
            box-shadow: 1px 1px 3px $color-primary;
            border:1px solid $color-primary;
          }

        }

  }
</style>
