<template>
  <div class="container">
    <div class="banner-content flex-just-content-center">
      <img class="banner" src="./images/banner.jpg" />
      <div class="subTitleBlueColor">{{$t('ArWorld.bannerTitle')}}</div>
      <i v-if="isPC" class="play-btn" @click="play"></i>
      <i v-else class="play-btn2" @click="play"></i>
      <p class="main-sub-sub-description">{{$t('ArWorld.bannerDescription')}}</p>
      <p class="main-sub-description-highLight" style="width: 80%">{{$t('ArWorld.highLightBannerDescription')}}</p>
    </div>
    <div class="pin-rule flex-just-content-center">
      <div class="subTitleBlueColor">{{$t('ArWorld.rule.title')}}</div>
      <div class="main-sub-description">{{$t('ArWorld.rule.description')}}</div>
      <ul>
        <li class="item flex-just-content-center" v-for="item in list" :key="item.key">
          <img width="88px" height="88px" class="img" :src="item.picUrl" />
          <p class="title">{{item.title}}</p>
          <p class="description">{{item.description}}</p>
          <div class="btn" @click="$router.push(`/PinWorld/detail/${item.index}`)">{{$t('ArWorld.rule.list.buttonText')}}</div>
        </li>
      </ul>
    </div>
    <div class="square-system">
      <div class="square-left">
        <div class="subTitleBlueColor">{{$t('ArWorld.squareSystem.title')}}</div>
        <p class="sub-title">{{$t('ArWorld.squareSystem.subTitle')}}</p>
        <p class="description">{{$t('ArWorld.squareSystem.description1')}}</p>
        <p class="description description-margin">{{$t('ArWorld.squareSystem.description2')}}</p>
        <p class="description description-margin">{{$t('ArWorld.squareSystem.description3')}}</p>
        <p class="description description-margin">{{$t('ArWorld.squareSystem.description4')}}</p>
        <p class="description description-margin">{{$t('ArWorld.squareSystem.description5')}}</p>
        <div class="btn-wrapper">
          <div class="btn blue-btn" @click="openDialog(0)">
            <img src="./images/btn-wrapper/1.png" />
            <span class="btn-text">{{$t('ArWorld.squareSystem.buttonText1')}}</span>
          </div>
          <div class="btn red-btn" @click="openDialog(1)">
            <img src="./images/btn-wrapper/2.png" />
            <span class="btn-text">{{$t('ArWorld.squareSystem.buttonText2')}}</span>
          </div>
        </div>
      </div>
      <div class="square-right">
        <img src="./images/right.png" />
        <!--<p>颜色仅供参考</p>-->
      </div>
    </div>
    <div class="merchant-system">
      <div class="subTitleBlueColor">{{$t('ArWorld.MerchantSystem.title')}}</div>
      <p class="description">{{$t('ArWorld.MerchantSystem.description')}}</p>
      <ul>
        <li v-for="item in merchantList" :key="item.index">
          <div class="sub-title">{{item.title}}</div>
          <img :src="item.imgUrl">
          <p class="description" v-html="item.description"></p>
        </li>
      </ul>
    </div>
    <div class="square-sort">
      <div class="subTitleBlueColor">{{$t('ArWorld.MerchantBlueprint.title')}}</div>
      <p class="description">{{$t('ArWorld.MerchantBlueprint.description1')}}</p>
      <p class="description">{{$t('ArWorld.MerchantBlueprint.description2')}}</p>
      <p class="description">{{$t('ArWorld.MerchantBlueprint.description3')}}</p>
      <p class="description">{{$t('ArWorld.MerchantBlueprint.description4')}}</p>
      <div class="pic-wrapper">
        <img class="margin-img" src="./images/img-wrapper/1.png" />
        <img class="img" src="./images/img-wrapper/2.png" />
      </div>
    </div>
    <div class="video" v-show="videoShow">
      <div class="video-content">
        <i class="close" @click="closeVideo"></i>
        <video id="video" ref="video" width="100%" controls="" preload="" webkit-playsinline="true" playsinline="true">
          <source src="" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="cover" v-show="panelShow"></div>
    <v-dialog v-show="panelShow" :obj="obj" @close="close"></v-dialog>
  </div>
</template>

<script>
import dialog from '@/components/dialog/dialog'

export default {
  components: {VDialog: dialog},
  name: "PinWorld",
  data() {
    return {
      videoShow: false,
      videoBShow: false,
      isPC: window.innerWidth > 1200,
      list: [
        {
          index: 0,
          title: this.$t('ArWorld.rule.list.title1'),
          picUrl: require('./images/list/1.svg'),
          description: this.$t('ArWorld.rule.list.description1')
        },
        {
          index: 1,
          title: this.$t('ArWorld.rule.list.title2'),
          picUrl: require('./images/list/2.svg'),
          description: this.$t('ArWorld.rule.list.description2')
        },
        {
          index: 2,
          title: this.$t('ArWorld.rule.list.title3'),
          picUrl: require('./images/list/3.svg'),
          description: this.$t('ArWorld.rule.list.description3')
        },
        {
          index: 3,
          title: this.$t('ArWorld.rule.list.title4'),
          picUrl: require('./images/list/4.svg'),
          description: this.$t('ArWorld.rule.list.description4')
        },
        {
          index: 4,
          title: this.$t('ArWorld.rule.list.title5'),
          picUrl: require('./images/list/5.svg'),
          description: this.$t('ArWorld.rule.list.description5')
        },
        {
          index: 5,
          title: this.$t('ArWorld.rule.list.title6'),
          picUrl: require('./images/list/6.svg'),
          description: this.$t('ArWorld.rule.list.description6')
        },
        {
          index: 6,
          title: this.$t('ArWorld.rule.list.title7'),
          picUrl: require('./images/list/7.svg'),
          description: this.$t('ArWorld.rule.list.description7')
        },
        {
          index: 7,
          title: this.$t('ArWorld.rule.list.title8'),
          picUrl: require('./images/list/8.svg'),
          description: this.$t('ArWorld.rule.list.description8')
        }
      ],
      merchantList: [
        {
          title: this.$t('ArWorld.MerchantSystem.list.subTitle1'),
          imgUrl: require('./images/merchantListImg/1.svg'),
          description: this.$t('ArWorld.MerchantSystem.list.description1'),
        },
        {
          title: this.$t('ArWorld.MerchantSystem.list.subTitle2'),
          imgUrl: require('./images/merchantListImg/2.svg'),
          description: this.$t('ArWorld.MerchantSystem.list.description2'),
        },
        {
          title: this.$t('ArWorld.MerchantSystem.list.subTitle3'),
          imgUrl: require('./images/merchantListImg/3.svg'),
          description: this.$t('ArWorld.MerchantSystem.list.description3'),
        }
      ],
      dialogList: [
        {
          icon: require('./images/a.png'),
          subtitle: this.$t('ArWorld.squareSystem.buttonText1'),
          bottom_pic: require('./images/c.png'),
          content: this.$t('ArWorld.squareSystem.detail1')
        },
        {
          icon: require('./images/b.png'),
          subtitle: this.$t('ArWorld.squareSystem.buttonText2'),
          bottom_pic: require('./images/d.png'),
          content: this.$t('ArWorld.squareSystem.detail2')
        }
      ],
      panelShow: false,
      obj: {}
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.$refs.video.src = `/vedio/${this.$lang === 'cn' ? 'cn' : 'en'}/pin.mp4`
  },
  methods: {
    play() {
      this.videoShow = true
      this.$refs.video.play()
    },
    closeVideo() {
      this.videoShow = false
      this.$refs.video.pause()
    },
    close() {
      this.panelShow = false
    },
    openDialog(num) {
      if (num === 0) {
        this.obj = this.dialogList[0]
      } else if (num === 1) {
        this.obj = this.dialogList[1]
      }
      this.panelShow = true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .play-btn {
    margin-bottom 40px
    background: url(../../assets/images/play.svg) no-repeat center;
    background-size: 100%;
    display: inline-block;
    width: 65px;
    height: 65px;
    cursor: pointer;
    border-radius 100%
    overflow: hidden;
  }

  .play-btn2 {
    margin-bottom 40px
    background: url(../../assets/images/play.svg) no-repeat 14% center;
    background-size: 100%;
    display: inline-block;
    width: 56px;
    height: 56px;
    cursor: pointer;
    border-radius 100%
  }

  .video {
    position: fixed;
    background: rgba(0, 0, 0, .6);
    width: 100%;
    height: 100%;
    z-index: 99;
    top: 0;
    left: 0;
    &-content {
      width: 800px;
      position: absolute;
      left: 50%;
      top: 20%;
      transform: translateX(-50%);
      background: #000;
      @media screen and (max-width: 1200px) {
        top: 40%;
        width 80%
      }
    }
    .close {
      position: absolute;
      right: 0;
      top: -18px;
      width: 20px;
      height: 20px;
      transform: rotate(-45deg);
      transform-origin: 30% 20%;
      &:before, &:after {
        content: '';
        width: 2px;
        height: 20px;
        position: absolute;
        left: 9px;
        top: 0;
        background: #999;
      }
      &:after {
        transform: rotate(90deg)
      }
      &:hover {
        &:before, &:after {
          background: #dc2f2f;
        }
      }
      cursor: pointer;
      z-index: 22;
    }
  }

  .container
    position relative
    .banner-content
      @media only screen and (max-width 1200px)
        padding-top 130px
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
          height 105px
        }
      .subTitle
        margin 140px 0 50px

    .pin-rule
      margin-top 270px
      @media only screen and (max-width 1200px) {
        margin-top 100px
      }
      @media only screen and (max-width 768px) {
        margin-top 40px
      }
      ul
        margin-top 100px
        width 90%
        display flex
        flex-direction row
        flex-wrap wrap
        @media only screen and (max-width 1024px) {
          margin-top 70px
          width 100%
        }
        li
          width 25%
          margin-bottom 80px
          @media only screen and (max-width 1024px) {
            width 50%
          }
          @media only screen and (max-width 365px) {
            margin-bottom 60px
            width 100%
          }
          .title
            text-align center
            margin-top 20px
            height 50px
          .description
            height 40px
            text-align center
            font-size 14px
            padding 0 30px
            line-height 1.5
            overflow hidden
            text-overflow ellipsis
            display -webkit-box
            -webkit-line-clamp 4
            -webkit-box-orient vertical
            @media only screen and (max-width 1024px) {
              height 60px
              padding 0 50px
            }
            @media only screen and (max-width 768px) {
              padding 0 15px
              -webkit-line-clamp 8
              height 100px
            }
            @media only screen and (max-width 375px) {
              overflow hidden
              text-overflow ellipsis
              display -webkit-box
              -webkit-line-clamp 4
              -webkit-box-orient vertical
              margin-bottom 10px
              max-height 80px
            }
          .btn
            margin-top 20px
            height 34px
            width 120px
            text-align center
            line-height 34px
            cursor pointer
            user-select none
            border 1px solid #000
            @media only screen and (max-width 768px) {
              margin-top 0
            }
            @media only screen and (max-width 414px) {
            }

    .square-system
      width 100%
      padding 0 300px
      display flex
      flex-direction row
      justify-content space-between
      margin-top 270px
      @media only screen and (max-width 1800px) {
        padding 0 150px

      }
      @media only screen and (max-width 1400px) {
        padding 0 100px
      }
      @media only screen and (max-width 1024px) {
        margin-top 70px
        padding 0
        align-items center
        flex-direction column
      }
      @media only screen and (max-width 768px) {
        margin-top 0
      }
      .square-left
        width 800px
        position relative
        @media only screen and (max-width 1200px) {
          margin-right 50px
          width 100%
        }
        @media only screen and (max-width 1024px) {
          margin-right 0
          display flex
          align-items center
          flex-direction column
        }
        .sub-title
          font-size 24px
          color #f02d6a
          margin-bottom 40px
          font-weight 800
          letter-spacing 1px
          @media only screen and (max-width 768px) {
            text-align center
            margin-bottom 20px
          }
        .description
          font-size 16px
          line-height 36px
          color #000
          width 100%
          @media only screen and (max-width 1024px) {
            padding 0 50px
            font-size 14px
          }
          @media only screen and (max-width 768px) {
            font-size 14px
            padding 0 15px
          }
        .description-margin
          margin 30px 0
          @media only screen and (max-width 1024px) {
            margin 0
          }
        .btn-wrapper
          display flex
          flex-direction row
          margin-top 70px
          @media only screen and (max-width 768px) {
            margin-top 30px
            width 100%
            display flex
            justify-content space-between
            padding 0 20px
            font-size 14px
          }
          .btn
            width 220px
            height 50px
            display flex
            align-items center
            justify-content center
            cursor pointer
            user-select none
            @media only screen and (max-width 1200px) {
            }
            span
              margin-left 8px
          .blue-btn
            background-color #d6f5ff
            margin-right 220px
            @media only screen and (max-width 1200px) {
              margin-right 15px
            }
          .red-btn
            background-color #ffeff7

      .square-right
        display flex
        flex-direction column
        align-items center

        @media only screen and (max-width 1200px) {
          margin-top 60px
        }
        img
          margin-bottom 10px
          @media only screen and (max-width 1024px) {
            width 83px
            height 320px
          }
    .merchant-system
      width 100%
      padding 0 300px 150px
      margin-top 270px
      display flex
      flex-direction column
      justify-content flex-start
      @media only screen and (max-width 1800px) {
        padding 0 150px

      }
      @media only screen and (max-width 1400px) {
        padding 0 100px
      }
      @media only screen and (max-width 1024px) {
        margin-top 70px
        padding 0
        align-items center
        flex-direction column
      }
      .sub-title
        font-size 24px
        color #f02d6a
        margin 60px 0 50px
        font-weight 800
        letter-spacing 1px
        @media only screen and (max-width 768px) {
          text-align center
          margin 30px 0 20px
        }
      .description
        text-align center
        @media only screen and (max-width 1024px) {
          text-align center
          font-size: 14px;
        }
        @media only screen and (max-width 768px) {
          padding 0 15px
        }
      ul
        display flex
        flex-direction row
        @media only screen and (max-width 1024px) {
          align-items center
          flex-direction column
        }
        li
          flex 1
          @media only screen and (max-width 1024px) {
            display flex
            flex-direction column
            align-items center
          }
          img
            width 160px
            height 160px
            margin-bottom 80px
            @media only screen and (max-width 768px) {
              margin-bottom 20px
            }
          &:nth-child(2)
            margin 0 100px
            @media only screen and (max-width 1024px) {
              margin 0
            }
          .description
            margin-bottom 30px
            line-height 36px
            text-align left
            @media only screen and (max-width 1024px) {
              padding 0 50px
            }
            @media only screen and (max-width 768px) {
              line-height 30px
              padding 0 15px
              font-size 14px
            }
    .square-sort
      width 100%
      padding 0 300px 150px
      display flex
      flex-direction column
      justify-content flex-start
      margin-top 100px
      @media only screen and (max-width 1800px) {
        padding 0 150px 100px
      }
      @media only screen and (max-width 1400px) {
        padding 0 100px 100px
      }
      @media only screen and (max-width 1024px) {
        margin-top 70px
        padding 0
        flex-direction column
        align-items center
      }
      @media only screen and (max-width 768px) {
        margin-top 70px
        padding-bottom 50px
      }
      .description
        width 100%
        margin-bottom 30px
        line-height 36px
        text-align left
        @media only screen and (max-width 1024px) {
          padding 0 50px
        }
        @media only screen and (max-width 768px) {
          line-height 30px
          padding 0 15px
          font-size 14px
        }
      .pic-wrapper
        width 100%
        margin-top 120px
        display flex
        flex-direction row
        align-items center
        @media only screen and (max-width 1024px) {
          margin 20px 0 120px
          flex-direction column
        }
        .margin-img
          margin-right 80px
          @media only screen and (max-width 950px) {
            margin-right 0
            width 312px
            height 80px
          }
        .img
          @media only screen and (max-width 950px) {
            margin-right 0
            width 200px
            height 82px
          }
        img
          display block
          @media only screen and (max-width 950px) {
            margin-top 40px
          }
    .cover
      z-index 9999
      height 100%
      width 100%
      position absolute
      top 0
      left 0
      background-color rgba(0, 0, 0, .5)
</style>
