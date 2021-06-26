<template>
  <div class="open_notification">
    <div class="not_overlay" @click="clsoeNotification()"></div>

    <div class="notification_area">
      <div class="user_profile_image">
        <img src="/rian-air-og.png" alt="Useranme">

        <div class="user_details">
          <label>Administrator</label>
          <span>Admin</span>
        </div>



      </div>

      <nav class="navigation_list">
          <ul class="nav_">
            <li v-for="(setting, index) in settings" :key="index" @click="clsoeNotification">
              <navlink  :name="setting.name" :link="setting.link" :icon="setting.icon" ></navlink>
            </li>
          </ul>
        </nav>

        <div class="logout_wrapper">
          <button class="btn_primary" @click="logout()"><i class="icon icon-log-in"></i> Logout</button>
        </div>

    </div>

  </div>
</template>

<script>
  import navlink from '@/components/admin/common/navLink'
  import { mapState, mapGetters } from 'vuex'

  export default {
    components: {
      navlink
    },
    data() {
      return{
        settings: [
          {name: 'Settings', link:'/settings', icon: 'icon icon-wrench'},
         // {name: 'Website', link:'/website', icon: 'icon icon-web'},
         // {name: 'Logout', link:'/logout', icon: 'icon icon-log-in'},
        ]
      }
    },
    computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
    },
    methods: {
      clsoeNotification() {
        this.$emit('closeNot')
      },
      async logout() {
        try {
          await this.$fire.auth.signOut();
          location.reload();
        } catch (e) {
          alert(e)
        }
      },
    }
  }

</script>

<style lang="scss" scoped>
  //@import '~assets/styles/admin/components/variables.scss';

  .open_notification {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99999;

    .not_overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-dark-2;
      opacity: 0.8;
    }

    .navigation_list{
      @media only screen and (max-width:767px){
        display: none;
      }
    }
    .notification_area {
      position: absolute;
      top: 0;
      right: 0;
      width: 17.5vw;
      height: 100%;
      background-color: $color-dark;
      padding: 2.5vw 1.5vw;
      display: flex;
      flex-direction: column;

      @media only screen and (max-width:767px){
        width: 60vw;
        padding: 10vw 5vw;
      }

      .user_profile_image {
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        border-bottom: 1px solid $border-color;

        img {
          width: 7vw;
          height: 7vw;
          border-radius: 50%;

          @media only screen and (max-width:767px){
            width: 25vw;
            height: 25vw;
          }
        }

        .user_details {
          position: relative;
          display: block;
          width: 100%;
          text-align: center;
          margin: 1.5em 0;

          label {
            font-size: 1.1vw;
            line-height: 1.2;
            color: $color-white;

            @media only screen and (max-width:767px){
             font-size: 18px;
            }

          }

          span {
            display: block;
            line-height: 1;
            font-size: 0.95vw;
            color: $color-text;
            @media only screen and (max-width:767px){
             font-size: 16px;
            }
          }
        }

      }
    }

    .logout_wrapper {
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;

      .btn_primary{
        width: 100%;
        border-radius: 0;
      }
    }

    &.modal-enter{
      .not_overlay{
        opacity: 0;
      }

      .notification_area{
        transform:  translateX(100%);
        opacity: 0;
      }
  }

  &.modal-enter-active{
    transition-delay: 300ms;
      .not_overlay{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }

      .notification_area{
        transition: all 0.3s cubic-bezier(.33,1,.68,1) 0s;
      }
  }

  &.modal-leave-active{
      transition: all 0.3s ease;

       .not_overlay{
        transition: all 0.2s cubic-bezier(.33,1,.68,1) 0s;
      }

      .notification_area{
        transition: all 0.2s cubic-bezier(.33,1,.68,1) 0s;
      }
  }

  &.modal-leave-to{
       .not_overlay{
        opacity: 0;
      }

      .notification_area{
        transform: translateX(100%);
        opacity: 0;
      }
    }

  }

   .navigation_list{
      position: relative;
      display: block;
      margin-top: 2.5vw;

      label{
        position: relative;
        display: block;
        width: 100%;
        font-size: 1vw;
        font-weight: 500;
        color: $color-text;
        margin-bottom: 1em;
      }

      .nav_{
        display: flex;
        flex-direction: column;

        li{
          display: block;
          width: 100%;
          margin: 0.15em 0;
        }

      }

    }

</style>
