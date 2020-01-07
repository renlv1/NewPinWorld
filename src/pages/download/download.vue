<template>
  <div>
    <div class="banner-content flex-just-content-center">
      <img class="banner" src="./images/banner.png" />
      <div class="subTitleBlueColor">{{$t('download.title')}}</div>
      <div class="banner-title-highLight">{{$t('download.description')}}</div>


      <div class="btn-wrapper">
        <div class="btn banner-btn">
          <div v-waves class="download" @click="toDownload(1)"><img width="20" height="20"
                                                                    src="./images/iOS_logo.png" />(iOS)
          </div>
          <div class="IOS">
            <img src="./images/IOS.png" />
          </div>
        </div>
        <div class="btn banner-btn">
          <div v-waves class="download" @click="toDownload(2)"><img width="20" height="20"
                                                                    src="./images/Android_logo.png" />(Android)
          </div>
          <div class="android">
            <img src="./images/android.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waves from '@/dircetive/waves/waves'

export default {
  name: "download",
  directives: {waves},
  data() {
    return {
      AndroidAppShow: false,
      IOSAppShow: false
    }
  },
  created() {
    window.scrollTo(0, 0)
  },
  mounted() {
  },
  methods: {
    toDownload(num) {
      if (num === 1) {
        window.location.href = 'https://apps.apple.com/cn/app/拼世界/id1468883042?l=en'
      } else if (num === 2) {
        window.location.href = 'https://download.arworld.ai/arworld1.0.11.apk '
      }
    },
    openErCode(num) {
      this.AndroidAppShow = false
      this.IOSAppShow = false
      if (num === 1) {
        this.AndroidAppShow = true
      } else {
        this.IOSAppShow = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner-content
    padding-bottom 10px
    @media only screen and (max-width 1200px)
      padding-top 130px
    .banner
      width 510px
      height 428px
      margin-bottom 70px
      @media only screen and (max-width 768px) {
        width 375px
        height 325px
        margin-bottom 50px
      }
      @media only screen and (max-width 414px) {
        width 300px
        height 260px
        margin-bottom 0
      }
    .subTitleBlueColor
      @media only screen and (max-width 768px) {
        margin-top 20px
      }
    .banner-title-highLight
      font-family pixel
      letter-spacing 5px
      font-size 20px
      margin-bottom 20px
      @media only screen and (max-width 768px) {
        padding 0 1px
        font-size 16px
        width 100%
        text-align center
      }
    .pdf-wrapper
      margin-bottom 30px
      div
        padding 11px 20px
        border 1px solid #7b604f
        border-radius 30px
        cursor pointer
        margin-bottom 30px
        color #000
        user-select none
        a
          color #000
          display block
    .btn-wrapper
      width 600px
      max-width 100%
      // height 80px
      display flex
      flex-direction row
      justify-content space-between
      align-items center
      margin-bottom 60px
      @media only screen and (max-width 768px) {
        flex-direction column
      }
      .btn
        width 45%
        height 100%
        font-weight normal
        font-size 14px
        color #fff
        display flex
        flex-direction column
        justify-content center
        @media only screen and (max-width 768px) {
          width 80%
          line-height 40px
          font-size 14px
          display flex
          flex-direction column
          align-items center
          &:nth-child(1) {
            margin-right 0
          }
        }
        .download
          padding 11px 20px
          border-radius 20px
          background-color #7b604f
          text-align center
          display flex
          align-items center
          justify-content center
          letter-spacing 0.5
          box-shadow 0 0 15px rgba(128, 128, 128, 1)
          @media only screen and (max-width 768px) {
            width 200px
            height 40px
          }
          img
            margin-right 10px
        .IOS
          width 250px
          height 250px
          border 1px solid #ccc
          margin 20px auto
          @media only screen and (max-width 768px) {
            width 200px
            height 200px
          }
          img
            width 100%
            height 100%
        .android
          width 250px
          height 250px
          border 1px solid #ccc
          padding 10px
          margin 20px auto
          @media only screen and (max-width 768px) {
            width 200px
            height 200px
          }
          img
            width 100%
            height 100%
</style>
