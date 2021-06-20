<template>
  <div class="login_wrapper" >
    <div class="login_box" :class="{'form_error': validError}">

      <transition name="slide-up">
        <pngLaoder v-if="showLoader"></pngLaoder>
      </transition>

      <div class="logo_box">
        <img src="/logo.svg" alt="Pingo Admin">
      </div>

      <form @submit.prevent="onLogin()" class="login_form" >
        <input type="text" placeholder="Username" v-model="login.email">
        <input type="password" placeholder="Password" v-model="login.password">
        <button :disabled="showLoader" type="submit" class="btn_primary">Login</button>
      </form>

      <div class="info_">
        <a href="#" class="text_">
          Trouble with login ?
        </a>
      </div>

    </div>

    <div class="footer_">
      <span>www.admin-pingo.com</span>
    </div>

    <transition name="slide-up">
      <error v-if="validError">
        <p><i class="icon icon-close-circled"></i> {{errorMessage}}</p>
      </error>
    </transition>

  </div>
</template>

<script>
 import pngLaoder from '@/components/admin/common/png-loader'
 import error from '@/components/admin/form/error'
 import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    pngLaoder,
    error
  },
  layout: 'login',
  head() {
      return {
        title: 'Login-Pingo',
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon-admin.ico' }
        ],
      }
    },
    data() {
      return {
        login: {
          email: '',
          password: ''
        },
        showLoader: false,
        validError: false,
        errorMessage: '',
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
      async onLogin() {

        const winWidth = window.innerWidth;

        this.showLoader = true;
        try {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.login.email,
            this.login.password
          )
          if(winWidth < 768){
            this.$router.push("/mob/");
          }else{
            this.$router.push("/");
          }
        
        } catch (e) {
          this.errorMessage = e;
          this.validError = true;
          this.showLoader = false;
        }
      },
  },
}
</script>

<style lang="scss" scoped>

  //@import '~assets/styles/admin/components/variables.scss';

  .login_wrapper{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: $color-dark-2;

    // &::before{
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: rgb(27,28,34);
    //   background: linear-gradient(124deg, rgba(27,28,34,1) 0%, rgba(61,80,250,1) 100%);
    //   z-index: 0;
    //   opacity: 0.1;

    // }


    .footer_{
      position: absolute;
      display: block;
      width: 100%;
      left: 0;
      bottom: 0;
      padding: 1.5em;
      font-size: 1vw;
      font-weight: 300;
      color: $color-text;
      text-align: center;
    }

    .login_box{
      position: relative;
      display: flex;
      justify-content: center;
      background-color: $color-dark;
      border-radius: 1em;
      padding: 2.5vw;
      flex-wrap: wrap;
      height: auto;
      width: 28.5vw;
      z-index: 1;
      transition: all 0.8s ease;

      @media only screen and (max-width:767px){
        width: 85%;
        padding: 7.5vw;
      }


        &.form_error{
          box-shadow: 1px 1px 16px #e0170030;
        }

      .logo_box{
        position: relative;
        width: 100%;
        height: 5vw;
        display: flex;
        align-content: center;
        justify-content: center;

        @media only screen and (max-width:767px){
          height: 10vh;
        }

        img{
          width: auto;
          height: 100%;
        }
      }

      .login_form{
        position: relative;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 2.5vw;

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
          margin: 1em 0;
          transition: all 0.3s ease;

          &:focus{
            box-shadow: 1px 1px 3px $color-primary;
            border:1px solid $color-primary;
          }

          @media only screen and (max-width:767px){
            font-size: 15px;

          }

        }

        button{
          margin-top: 1.5vw;
        }


      }

      .info_{
        position: relative;
        display: block;
        text-align: start;
        width: 100%;
        margin: 1.5vw 0 0;

        @media only screen and (max-width:767px){
            margin-top: 1.5em;
          }

        a{
          font-size: 0.8vw;
          font-weight: 300;
          color: $color-text;

          @media only screen and (max-width:767px){
            font-size: 14px;
            margin-top: 1.5em;
          }

          &:hover{
            color: $color-secondary;
          }
        }
      }
    }


  }
</style>
