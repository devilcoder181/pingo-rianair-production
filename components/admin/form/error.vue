<template>
  <div class="error_wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .error_wrapper{
    position: fixed;
    transform: translateX(-50%);
    margin-bottom: 70px;
    padding: 0.5em 1em;
    background-color: #e01700;
    bottom: 0;
    left: 50%;
    border-radius: 0.5em;
    text-align: center;
    transform-origin: center;

    @media only screen and (max-width:767px){
      width:90%;
    }

    p{
      color: #fff;
      position: relative;
      display: flex;
      align-content: center;
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

  .slide-up-enter-active {
    transition: all 0.3s ease;
    .error_wrapper{
      transition: all .3s ease;
    }
  }
  .slide-up-leave-active {
    transition: all 0.3s ease;
    .error_wrapper{
      transition: all .3s ease;
    }
  }
  .slide-up-enter, .slide-up-leave-to{
    opacity: 0;
    margin-bottom: 0;
  }
</style>
