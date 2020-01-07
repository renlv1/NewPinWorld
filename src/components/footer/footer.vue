<template>
  <div class="footer-container">
    <div class="footer-title">{{$t('footer.title1')}} <span>{{$t('footer.title2')}}</span></div>
    <ul>
      <li v-for="(item, index) in $t('menu')" :key="item.index" @click="clickMenu(item, index)"
          :class="{activeMenu: $store.state.currentMenuIndex === index}">{{item.title}}
      </li>
    </ul>
    <div class="copyright">
      <div v-if="$route.path.includes('/download')" class="pdf-wrapper">
        <div><a :href="link1" target="_blank">{{$t('download.pdf.text1')}}</a></div>
        <div><a :href="link2" target="_blank">{{$t('download.pdf.text2')}}</a></div>
      </div>
      <span>
        {{$t('footer.info')}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VFooter",
  data() {
    return {
      link1: '',
      link2: '',
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
  updated() {
    this.toPdfLink()
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
    toPdfLink() {
      let lan = window.localStorage.getItem('lang')
      if (lan === 'cn') {
        this.link1 = '/pdf/version_CN.pdf'
        this.link2 = '/pdf/model_CN.pdf'
      } else if (lan === 'jn') {
        this.link1 = '/pdf/version_JN.pdf'
        this.link2 = '/pdf/model_JN.pdf'
      } else if (lan === 'en') {
        this.link1 = '/pdf/version_EN.pdf'
        this.link2 = '/pdf/model_EN.pdf'
      }
    },
    changeLanguage(val, num) {
      this.isActive = num
      localStorage.setItem('index', this.isActive)
      localStorage.setItem('lang', val)
      location.reload()
      window.scrollTo(0,0)
    },
    clickMenu(item, index) {
      this.$store.commit('SET_MENU_INDEX', index)
      this.$router.push(item.link)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer-container
    width 100%
    padding 0 60px
    background-color #231f20
    color #fff
    overflow hidden
    display flex
    font-size 16px
    @media only screen and (min-width 1300px)
      flex-direction row
      justify-content space-between
      align-items flex-end
      padding 50px 120px 60px
    @media only screen and (max-width 1300px)
      flex-direction column
      align-items center
      padding 20px 50px
    @media only screen and (max-width 768px)
      padding 15px 0
    .footer-title
      span
        color #999
    ul
      display flex
      flex-direction row
      color #ccc
      @media only screen and (max-width 768px)
        flex-direction column
        text-align center
      li
        margin-right 60px
        cursor pointer
        user-select none
        @media only screen and (max-width 768px)
          margin-right 0
          height 30px
          line-height 30px
        &:last-child
          margin-right 0
        &.activeMenu
          color #f02d6a
  .copyright
      color #666
      .pdf-wrapper
        display flex
        flex-direction column
        font-size 12px
        @media only screen and (max-width 768px)
          flex-direction column
          text-align center
        div
          margin-top 10px
          @media only screen and (max-width 768px)
           margin-top 8px
          a
            margin-right 30px
            cursor pointer
            color #666
            @media only screen and (max-width 768px)
              margin-right 0
      span
        display block
        margin-top 10px
</style>
