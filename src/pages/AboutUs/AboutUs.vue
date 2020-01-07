<template>
  <div>
    <div class="banner-content flex-just-content-center">
      <img class="banner" src="./images/banner.jpg" />
      <div class="subTitleBlueColor">{{$t('AboutUs.title')}}</div>
      <p class="main-sub-sub-description">{{$t('AboutUs.description')}}</p>
    </div>
    <div class="Introduction flex-just-content-center">
      <div class="subTitleBlueColor center">{{$t('AboutUs.CompanyProfile.title1')}}</div>
      <img src="./images/Introduction.png" />
      <div class="description" v-html="$t('AboutUs.CompanyProfile.description')">
      </div>
    </div>
    <ul class="development">
      <li v-for="item in list" :key="item.index">
        <div class="subTitleBlueColor">{{item.title}}</div>
        <div class="description pc" v-html="item.description"></div>
        <div class="description mobile" v-html="item.mobileDescription"></div>
        <img :src="item.img" />
      </li>
    </ul>
    <div class="cover" v-if="panelShow"></div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
  data() {
    return {
      list: [
        {
          title: this.$t('AboutUs.CompanyProfile.list.title1'),
          description: this.$t('AboutUs.CompanyProfile.list.description1'),
          mobileDescription: this.$t('AboutUs.CompanyProfile.list.description1'),
          img: require('./images/img-list/1.jpg')
        },
        {
          title: this.$t('AboutUs.CompanyProfile.list.title2'),
          description: this.$t('AboutUs.CompanyProfile.list.description2'),
          mobileDescription: this.$t('AboutUs.CompanyProfile.list.mobileDescription2'),
          img: require('./images/img-list/2.jpg')
        },
        {
          title: this.$t('AboutUs.CompanyProfile.list.title3'),
          description: this.$t('AboutUs.CompanyProfile.list.description3'),
          mobileDescription: this.$t('AboutUs.CompanyProfile.list.description3'),
          img: require('./images/img-list/3.png')
        }
      ],
      panelShow: false,
      obj: {}
    }
  },
  mounted() {
    this.$store.commit('SET_MENU_INDEX', 5)
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner-content
    @media only screen and (max-width 1200px)
      padding-top 150px
    .banner
      width 1282
      height 420
      margin-bottom 120px
      @media only screen and (max-width 1200px) {
        margin-bottom 0
        width 900px
        height 320px
      }
      @media only screen and (max-width 1024px) {
        width 600px
        height 220px
      }
      @media only screen and (max-width 768px) {
        width 320px
        height 140px
      }
    .subTitleBlueColor
      @media only screen and (max-width 1200px)
        text-align center
    .subTitle
      margin 140px 0 50px

  .Introduction
    margin-top 200px
    @media only screen and (max-width 1200px)
      margin-top 100px
    @media only screen and (max-width 768px)
      margin-top 50px
    img
      width 863px
      height 304px
      margin-bottom 80px
      @media only screen and (max-width 1200px) {
        width 863px
        height 304px
      }
      @media only screen and (max-width 1024px) {
        width 663px
        height 164px
      }
      @media only screen and (max-width 768px) {
        width 303px
        height 164px
        margin-bottom 50px
      }
    .description
      margin-top 10px
      text-align center
      max-width 1200px
      line-height 36px
      @media only screen and (max-width 1200px) {
        width 70%
      }
      @media only screen and (max-width 768px) {
        width 93%
      }
      @media only screen and (max-width 768px) {
        padding 0 5px
        font-size 14px
        line-height 30px
      }

  .development
    margin 200px auto
    width 90%
    display flex
    flex-direction row
    @media only screen and (max-width 1400px)
      width 100%
    @media only screen and (max-width 1200px)
      margin 80px auto
      flex-direction column
      align-items center
    li
      flex 1
      display flex
      align-items center
      flex-direction column
      @media only screen and (max-width 1200px)
        display flex
        align-items center
        flex-direction column
        width 70%
      @media only screen and (max-width 414px)
        width 90%
      .subTitleBlueColor
        @media only screen and (min-width 1200px)
          width 380px
          text-align left
      .description
        width 380px
        line-height 32px
        margin-bottom 30px
        @media only screen and (max-width 1200px)
          text-align center
          width 100%
        @media only screen and (max-width 768px)
          font-size 14px
      &:nth-child(2)
        margin-top 120px
        @media only screen and (max-width 1200px)
          margin-top 50px
      &:nth-child(3)
        margin-top 240px
        @media only screen and (max-width 1200px)
          margin-top 50px
      img
        @media only screen and (max-width 375px)
          width 100%
</style>
