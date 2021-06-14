<template>
  <div class="item_">
    <nuxt-link :to="link" class="link_">
      <div class="dot_"></div>
      <div class="icon_">
        <i :class="icon"></i>
      </div>
      <div class="no_"><span>{{number}}</span></div>
      <div class="title_"><span>{{title}}</span></div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
    title: {
      type: String
    },
    link: {
      type: String
    },
    number: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.item_{
  position: relative;
  display: block;
  width: 100%;
  height: auto;

  .link_{
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    background-color: $color-primary;
    padding: 1.25em;
    border-radius: 2em;
    transition: all 0.3s ease;
    overflow: hidden;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $color-secondary;
      border-radius: 5em;
      transform: translateY(37%) translateX(42%);
      opacity: 0.15;
      transition: all 0.3s ease;
    }

    &:hover{
      box-shadow: 1px 1px 10px $color-primary;

      &:before{
        transform: none;
      }
    }

    .dot_{
      position: absolute;
      top: 15%;
      right: 7%;
      width: 5px;
      height: 5px;
      background-color: $color-white;
      border-radius: 50%;

      &:before, &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 5px;
        height: 5px;
        background-color: $color-white;
        border-radius: 50%;
      }

      &:before{
        transform: translateY(-150%);
      }

      &:after{
        transform: translateY(150%);
      }

    }

    .icon_{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $color-secondary;
      width: 5vw;
      height: 5vw;
      border-radius: 1.5vw;
      margin-bottom: 1em;

      i{
        font-size: 2.5vw;
        display: contents;
        color: $color-white;
      }
    }

    .no_{
      position: relative;
      display: block;
      color: $color-white;
      @include lgText2();
      font-weight: 600;
      letter-spacing: 2px;
    }

    .title_{
      position: relative;
      display: block;
      color: $color-white;
      opacity: 0.75;
      font-weight: 500;
      @include mdText();
    }
  }
}
</style>
