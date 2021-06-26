<template>
  <div class="p-container">
    <div class="top_nav_wrapper">
        
        <div class="logo_">
            <img src="/logo.svg" alt="Pingo Admin">
        </div>

      <div class="user_profile">
        <div class="user_icon" @click="openNotifications()">
          <img src="/rian-air-og.png" alt="Username">
        </div>

        <div class="toggler_">
          <button class="hamburger" :class="{'active_': showMenu}" @click="openMenu()">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
        </div>
      </div>
    </div>

    <transition name="modal">
      <notification v-if="openNav" @closeNot="openNav = false"></notification>
    </transition>

  </div>
</template>

<script>
  import notification from '@/components/admin/common/notification'

  export default {
    props: {
      showMenu: {
        type: Boolean
      }
    },
    data() {
      return {
        openNav: false,
        menuClass: false,
      }
    },
    methods: {
      openNotifications(){
        this.openNav = !this.openNav
       // console.log(this.openNav)
      },
      openMenu() {
        this.$emit('toggleMenu')
      },
    },
    components: {
      notification
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/styles/admin/components/variables.scss';

  .hamburger{
    position: relative;
    display: block;
    outline: none;
    border: none;
    background: none;

    .line{
      width: 35px;
      height: 4px;
      background-color: #ecf0f1;
      display: block;
      margin: 6px auto;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    &.active_{
      .line{
        &:nth-child(1){transform: translateY(10px) rotate(45deg);}
        &:nth-child(2){opacity: 0;}
        &:nth-child(3){transform: translateY(-10px) rotate(-45deg);}
      }
    }
  }

  .top_nav_wrapper{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    .logo_{
        position: relative;
        display: block;
        width: 30vw;

        img{
            display: block;
            width: 100%;
            height: auto;
        }
    }

    .user_profile{
      width: auto;
      display: flex;
      align-content: center;
      margin: 0 -5px;

      .user_details{
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: end;
        align-items: flex-end;
        justify-content: center;
        margin: 0 1em;
        label{
          font-size: 14px;
          line-height: 1.2;
          color: $color-white;

        }

        span{
          display: block;
          line-height: 1;
          font-size: 12px;
          color: $color-text;
        }
      }

      .user_icon{
        position: relative;
        display: block;
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid $color-text;
        transition: all 0.3s ease;
        margin: 0 5px;

        &:hover{
          border: 2px solid $color-primary;
        }

        img{
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }

      .hamburger{
        margin: 0 5px;
      }

    }
  }
</style>
