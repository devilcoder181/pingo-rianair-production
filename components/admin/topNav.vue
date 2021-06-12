<template>
  <div class="p-container">
    <div class="top_nav_wrapper">
      <div class="search_wrapper">
        <input type="text" placeholder="Search..">
        <i class="icon icon-search"></i>
      </div>

      <div class="user_profile">
        <div class="user_details">
          <label>Administrator</label>
          <span>Admin</span>
        </div>
        <div class="user_icon" @click="openNotifications()">
          <img src="/rian-air-og.png" alt="Username">
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
    data() {
      return {
        openNav: false
      }
    },
    methods: {
      openNotifications(){
        this.openNav = !this.openNav
       // console.log(this.openNav)
      }
    },
    components: {
      notification
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/styles/admin/components/variables.scss';

  .top_nav_wrapper{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search_wrapper{
      position: relative;
      width: 30vw;

      i{
        position: absolute;
        top: 50%;
        right: 0;
        font-size: 1.2vw;
        color: $color-text;
        pointer-events: none;
        transform: translateX(-50%) translateY(-50%);
      }

       input{
         position: relative;
         display: block;
         width: 100%;
         height: 2.5em;
         border: none;
         outline: none;
         font-size: 1vw;
         font-weight: 500;
         color: $color-white;
         padding: 0.5em 1em;
          background-color: #202127;
          border-radius: 0.25em;
          margin: 1em 0;
          transition: all 0.3s ease;

          &:focus{
            box-shadow: 1px 1px 3px $color-primary;
            border:1px solid $color-primary;
          }

        }

    }

    .user_profile{
      width: auto;
      display: flex;
      align-content: center;

      .user_details{
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: end;
        align-items: flex-end;
        justify-content: center;
        margin: 0 1em;
        label{
          font-size: 0.9vw;
          line-height: 1.2;
          color: $color-white;

        }

        span{
          display: block;
          line-height: 1;
          font-size: 0.75vw;
          color: $color-text;
        }
      }

      .user_icon{
        position: relative;
        display: block;
        width: 2.5vw;
        height: 2.5vw;
        overflow: hidden;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid $color-text;
        transition: all 0.3s ease;

        &:hover{
          border: 2px solid $color-primary;
        }

        img{
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }

    }
  }
</style>
