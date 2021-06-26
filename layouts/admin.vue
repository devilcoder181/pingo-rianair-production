<template>
  <main :class="{'admin-layout': this.$userAgent.agent(), 'mobile-layout': !this.$userAgent.agent()}">
    <sideNavigation v-if="this.$userAgent.agent()"></sideNavigation>
    <div class="content_section_wrapper">
      <topNav v-if="this.$userAgent.agent()"></topNav>
      <topNavRes :showMenu="showMenu" v-if="!this.$userAgent.agent()" @toggleMenu="showMenu = !showMenu"></topNavRes>

        <nuxt />

    </div>

    <transition>
      <sideNavigation @closeMenu="showMenu = false" v-if="showMenu"></sideNavigation>
    </transition>

    <transition name="slide-up">
      <AdminCommonPngLoader
        v-if="showLoader">
      </AdminCommonPngLoader>
    </transition>

  </main>
</template>


<script>
  import sideNavigation from '@/components/admin/sideNavigation'
  import topNav from '@/components/admin/topNav'
  import topNavRes from '@/components/admin/topNavMobile'
  import {mapGetters} from 'vuex';

  export default {
    components: {
      sideNavigation,
      topNav,
      topNavRes
    },
   
    data() {
      return {
        title: 'Pingo Admin',
        showMenu: false,
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon-admin.ico' }
        ],
      }
    },
    computed: {
      ...mapGetters(['showLoader']),
    },
  }
</script>

<style lang="scss" scoped>
  .admin-layout{
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    padding-left: 20vw;
  }

  .content_section_wrapper{
    position: relative;
    flex: 1;
    margin-bottom: 2.5em;
  }

</style>
