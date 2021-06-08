<template>
  <div class="side_nav">
    <div class="logo_box">
      <img src="/logo.svg" alt="Pingo Admin">
    </div>

    <nav class="navigation_list">
      <label>App</label>
      <ul class="nav_">
        <li v-for="(apps, index) in app" :key="index">
          <navlink :name="apps.name" :link="apps.link" :icon="apps.icon" ></navlink>
        </li>
      </ul>
    </nav>

    <nav class="navigation_list">
      <label>Settings</label>
      <ul class="nav_">
        <li v-for="(setting, index) in settings" :key="index">
          <navlink :name="setting.name" :link="setting.link" :icon="setting.icon" ></navlink>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
  import navlink from '@/components/admin/common/navLink'

  export default {
    components: {
      navlink
    },
    data() {
      return{
        app: [
          {name: 'Dashboard', link:'/', icon: 'icon icon-tachometer'},
          {name: 'About', link:'/about', icon: 'icon icon-doc-text-inv'},
          {name: 'Assistance', link:'/assistance', icon: 'icon icon-folder-open'},
          {name: 'Products', link:'/products', icon: 'icon icon-suitcase'},
          {name: 'Contact', link:'/contact', icon: 'icon icon-person-stalker'},
          {name: 'Enquiry', link:'/enquiry', icon: 'icon icon-social-buffer'},
          {name: 'Gallery', link:'/gallery', icon: 'icon icon-images'},
        ],
        settings: [
          {name: 'Social Media', link:'/social', icon: 'icon icon-cloud-thunder'},
          {name: 'SEO', link:'/seo', icon: 'icon icon-graph-bar'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  //@import '~assets/styles/admin/components/variables.scss';

  .side_nav{
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
    background-color: $color-dark;
    padding: 1.75vw 2vw;
    z-index: 99999;
    top: 0;
    left: 0;

    &:before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: $border-color;
    }

    .logo_box{
      position: relative;
      display: block;
      height: 4vw;

      img{
        display: block;
        height: 100%;
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

  }
</style>
