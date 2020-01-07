<template>
  <div>
    <div class="banner-content flex-just-content-center">
      <img class="banner" src="./images/banner.jpg" />
      <div class="subTitleBlueColor">{{$t('TradingCenter.title')}}</div>
      <div class="btn" @click="toTrading()">{{$t('TradingCenter.buttonText')}}</div>
    </div>
    <div class="main-content">
      <!--<div class="main-top common">-->
        <!--<div class="common-left">-->
          <!--<div class="subTitleBlueColor">{{$t('TradingCenter.LeasingMarket.title')}}</div>-->
          <!--<div class="highLight">{{$t('TradingCenter.LeasingMarket.subTitle')}}</div>-->
          <!--<p class="description">{{$t('TradingCenter.LeasingMarket.description1')}}</p>-->
          <!--<p class="description">{{$t('TradingCenter.LeasingMarket.description2')}}</p>-->
          <!--<p class="description">{{$t('TradingCenter.LeasingMarket.description3')}}</p>-->
          <!--<p class="description">{{$t('TradingCenter.LeasingMarket.description4')}}</p>-->
        <!--</div>-->
        <!--<div class="common-right">-->
          <!--<img src="./images/right-container/1.png" />-->
          <!--<p>{{$t('TradingCenter.LeasingMarket.title')}}</p>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="line">-->
        <!--<img src="./images/line.png" />-->
      <!--</div>-->
      <div class="main-bottom common">
        <div class="common-left">
          <div class="subTitleBlueColor">{{$t('TradingCenter.BlockMarket.title')}}</div>
          <p class="description">{{$t('TradingCenter.BlockMarket.description1')}}</p>
          <p class="description">{{$t('TradingCenter.BlockMarket.description2')}}</p>
          <p class="description">{{$t('TradingCenter.BlockMarket.description3')}}</p>
          <p class="description">{{$t('TradingCenter.BlockMarket.description4')}}</p>
          <p class="description">{{$t('TradingCenter.BlockMarket.description5')}}</p>
        </div>
        <div class="common-right">
          <img src="./images/right-container/2.png" />
          <p>{{$t('TradingCenter.BlockMarket.title')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TradingCenter",
  created() {
    window.scrollTo(0,0)
  },
  methods: {
    toTrading() {
      window.location.href = 'http://exchange.arworld.ai/?lang=zh-CN'
    }
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
    .btn
      text-align: center;
      color: #fff;
      background-image: url("./images/btn.png");
      background-repeat: no-repeat;
      background-size: contain;
      width: 100%;
      background-position: center;
      cursor: pointer;
      user-select: none;
      margin 20px 0 250px
      font-weight 800
      letter-spacing 2px
      font-size 20px
      height: 60px;
      line-height: 60px;
      @media screen and (max-width: 768px) {
        margin: 20px auto 100px;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
      }

  .main-content
    padding-bottom 150px
    @media only screen and (max-width 1800px) {
      padding-bottom 100px
    }
    @media only screen and (max-width 1024px) {
      padding 0
    }
    @media only screen and (max-width 768px) {
      text-align center
      padding 0 5px
      margin-left 0
      padding-bottom 50px
    }
    .line
      margin 180px auto 140px
      text-align center
      @media only screen and (max-width 1024px)
        width 100%
        overflow hidden
        margin 50px 0 30px
    .common
      margin-left 300px
      display flex
      flex-direction row
      @media only screen and (max-width 1700px)
        margin-left 0
        justify-content center
      @media only screen and (max-width 768px) {
        flex-direction column-reverse
        padding 0 5px
      }
      .common-left
        max-width 850px
        margin-right 200px
        @media only screen and (max-width 1700px)
          margin-right 50px
        @media only screen and (max-width 768px) {
          margin-right 0
        }
        .subTitleBlueColor
          text-align left
        .highLight
          font-size 20px
          color #2ac0ff
          font-weight 600
          margin 60px 0 40px
          letter-spacing 2px
        .description
          font-size 16px
          margin-bottom 40px
          line-height 36px
          @media only screen and (max-width 768px) {
            text-align left
            line-height 25px
            margin-bottom 15px
            font-size 14px
          }
      .common-right
        display flex
        flex-direction column
        align-items center
        img
          width 200px
          height 200px
          margin-bottom 10px
          @media only screen and (max-width 768px) {
            margin-top 10px
            width 150px
            height 150px
          }
</style>
