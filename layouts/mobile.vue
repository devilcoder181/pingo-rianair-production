<template>
  <main class="mobile-layout">
    <div class="content_section_wrapper">
      <topNav></topNav>

        <nuxt />

    <bottomNav></bottomNav>

    </div>

    <transition name="slide-up">
      <AdminCommonPngLoader
        v-if="showLoader">
      </AdminCommonPngLoader>
    </transition>

  </main>
</template>


<script>
  import sideNavigation from '@/components/admin/sideNavigation'
  import topNav from '@/components/admin/topNavMobile'
  import bottomNav from '@/components/admin/bottomNav'
  import {mapGetters} from 'vuex';

  export default {
    components: {
      sideNavigation,
      topNav,
      bottomNav
    },
    head() {
      return {
        title: 'Pingo Admin',
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
  .mobile-layout{
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
  }

  .content_section_wrapper{
    position: relative;
    flex: 1;
  }

</style>
