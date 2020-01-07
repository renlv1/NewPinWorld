<template>
  <div class="container">
    <!-- pc -->
    <div class="pc">
      <img @click="toHome" class="logo" width="51" height="50" src="./images/logo.png" />
      <div class="menu">
        <ul class="menu-list">
          <li v-for="(item, index) in $t('menu')" :key="item.index" @click="clickMenu(item, index)"
              :class="{activeMenu: $store.state.currentMenuIndex === index}">{{item.title}}
          </li>
        </ul>
        <!--<div class="language">-->
          <!--<span :class="{active: isActive === 1}" @click="changeLanguage('en', 1)">EN</span>-->
          <!--<span>/</span>-->
          <!--<span :class="{active: isActive === 2}" @click="changeLanguage('cn', 2)">CN</span>-->
          <!--<span>/</span>-->
          <!--<span :class="{active: isActive === 3}" @click="changeLanguage('jn', 3)">JP</span>-->
        <!--</div>-->
      </div>
    </div>

    <!-- mobile -->
    <div class="mobile" :class="{'hidden-nav': isSlecet}" v-show="headerFlag">
      <div class="header-container">
        <div class="header-left">
          <div class="logo" @click="toHome"><img src="./images/logo.png" alt=""></div>
          <!--<div class="language">-->
            <!--<span :class="{active: isActive === 1}" @click="changeLanguage('en', 1)">EN</span>-->
            <!--<span>/</span>-->
            <!--<span :class="{active: isActive === 2}" @click="changeLanguage('cn', 2)">CN</span>-->
            <!--<span>/</span>-->
            <!--<span :class="{active: isActive === 3}" @click="changeLanguage('jn', 3)">JP</span>-->
          <!--</div>-->
        </div>
        <div class="menu-icon" @click="selectMenu" :class="{'close-menu': isSlecet}" ref="menuBtn"></div>
      </div>
      <div class="mobile-nav-uls" :class="{'nav-show': isSlecet}" @click.stop.prevent="isSlecet = false">
        <router-link class="item" tag="div" v-for="item in $t('menu')" :key="item.index"
                     :to="item.link">{{item.title}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      headerFlag: true,
      isactiveNav: false,
      isSlecet: false,
      isActive: parseInt(localStorage.getItem('index')) || 1
    }
  },
  computed: {
    routerPath () {
      return this.$route.path
    }
  },
  watch: {
    routerPath () {
      this.checkActiveFun()
    }
  },
  methods: {
    checkActiveFun() {
      if (this.$route.path.includes('/home')) {
        this.$store.commit('SET_MENU_INDEX', 0)
      } else if(this.$route.path.includes('/PinWorld')) {
        this.$store.commit('SET_MENU_INDEX', 1)
      } else if(this.$route.path.includes('/economicSystem')) {
        this.$store.commit('SET_MENU_INDEX', 2)
      } else if(this.$route.path.includes('/TradingCenter')) {
        this.$store.commit('SET_MENU_INDEX', 3)
      } else if(this.$route.path.includes('/download')) {
        this.$store.commit('SET_MENU_INDEX', 3)
      } else if(this.$route.path.includes('/AboutUs')) {
        this.$store.commit('SET_MENU_INDEX', 4)
      }
    },
    clickMenu(item, index) {
      this.$store.commit('SET_MENU_INDEX', index)
      this.$router.push(item.link)
    },
    toHome() {
      this.isSlecet = false
      this.$router.push('/home')
    },
    changeLanguage(val, num) {
      this.isActive = num
      window.localStorage.setItem('index', this.isActive)
      window.localStorage.setItem('lang', val)
      window.location.reload()
    },
    selectMenu() {
      this.isSlecet = !this.isSlecet
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    width 100%
    .pc
      display flex
      width 100%
      flex-direction row
      padding 0 80px 0 40px
      justify-content space-between
      height 150px
      z-index 999
      background-color #fff
      @media only screen and (max-width 1400px)
        padding 0 50px 0 20px
      @media only screen and (max-width 1200px)
        display none
      .logo
        margin-top 40px
        cursor pointer
        user-select none
      .menu
        display flex
        flex-direction row
        margin-top 48px
        .menu-list
          height 20px
          margin 0
          display flex
          flex-direction row
          font-size 14px
          li
            margin-right 55px
            display inline-block
            cursor pointer
            font-weight 600
            user-select none
            &.activeMenu
              color #f02d6a
        .language
          height 20px
          font-size 14px
          font-weight 600
          span
            cursor pointer
            user-select none
            &:nth-child(2), &:nth-child(4)
              cursor default
              margin 0 2px
            &.active
               color #f02d6a
    .mobile
      @media only screen and (min-width 1200px)
        display none
      .header-container
        position fixed
        width 100%
        height 70px
        display flex
        align-items center
        justify-content space-between
        padding 0 20px 0 10px
        background-color #fff
        box-shadow 0 0 5px rgba(128, 128, 128, 0.2)
        z-index 999
        .header-left
          .logo
            display inline
            width 42px
            height 42px
            margin-right 15px
            img
              width 42px
              height 42px
          .language
            display inline
            float right
            line-height 42px
            span
              color #000
              &:nth-child(2)
                margin 0 2px
                padding 0 2px
              &:nth-child(4)
                margin 0 2px
                padding 0 2px
              &.active
                color #f02d6a
        .menu-icon
          cursor pointer
          width 32px
          height 32px
          background url("./images/nav.png")
          &.close-menu
            background url("./images/close.png")
      .mobile-nav-uls
        padding 0 20px 0 10px
        position fixed
        top 70px
        height 0
        transition all .5s linear
        overflow hidden
        background-color #fff
        width 100%
        box-shadow 0 0 5px rgba(128, 128, 128, 0.2)
        z-index 999
        &.nav-show
          height 280px
        .item
          padding-top 10px
          color #000
          font-family "微软雅黑 Light"
          font-weight 500
          height 45px
          line-height 45px
          &.router-link-active
            color #f02d6a
</style>
