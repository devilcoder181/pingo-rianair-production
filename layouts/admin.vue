<template>
  <main class="admin-layout">
    <sideNavigation></sideNavigation>
    <div class="content_section_wrapper">
      <topNav></topNav>

        <nuxt />

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
  import topNav from '@/components/admin/topNav'
  import {mapGetters} from 'vuex';

  export default {
    components: {
      sideNavigation,
      topNav
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
