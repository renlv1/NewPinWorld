<template>
  <div id="app">
    <VHeader />
    <router-view />
    <VFooter />
  </div>
</template>

<script>
import VHeader from '@/components/header/header'
import VFooter from "./components/footer/footer";

export default {
  components: {VFooter, VHeader},
  name: 'app',
  created() {
    // 解决vuex刷新数据丢失
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./assets/css/reset.styl"
  @import "./assets/css/common.styl"
  @font-face {
    font-family: pixel;
    src: url("./assets/fonts/pixel.ttf");
  }
</style>
