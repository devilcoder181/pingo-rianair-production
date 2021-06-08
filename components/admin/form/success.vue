<template>
  <div class="success_wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .success_wrapper{
    position: fixed;
    padding: 0.5em 1em;
    bottom:0;
    left:0;
    background-color: $color-green;
    transform-origin: center;
    width: 100%;
    text-align: center;
    z-index: 99999;
    p{
      color: #fff;
      position: relative;
      display: flex;
      align-content: center;
      justify-content: center;
      font-size: 1vw;

      i{
        font-size: 1.5vw;
        margin: 0 5px;
        display: inherit;
        @media only screen and (max-width:1200px){
          font-size: 24px;
        }
      }

      @media only screen and (max-width:1200px){
        font-size: 16px;
      }
    }
  }

  .alertAnim-enter-active {
    transition: all 0.6s ease 0.6s;
    .success_wrapper{
      transition: all .6s ease;
    }
  }
  .alertAnim-leave-active {
    transition: all 0.6s ease 0.6s;
    .success_wrapper{
      transition: all .6s ease;
    }
  }
  .alertAnim-enter, .alertAnim-leave-to{
    .success_wrapper{
      transform: translateY(100%);
      opacity: 0;
    }
  }
</style>
