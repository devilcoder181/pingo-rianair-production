<template>
  <div class="error_wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .error_wrapper{
    position: fixed;
    padding: 0.5em 1em;
    bottom:0;
    left:0;
    background-color: $error;
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

  .alertAnim-enter, .alertAnim-leave, .alertAnim-leave-to{
    transform: translateY(100%);
  }
  .alertAnim-enter-to{
    transform: none;
  }

  .alertAnim-enter-active, .alertAnim-leave-active{
    transition: transform 0.3s ease;
  }
</style>
