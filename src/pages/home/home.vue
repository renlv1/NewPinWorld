<template>
  <div class="container">
    <div class="banner-content flex-just-content-center">
      <img class="banner" src="./images/banner.jpg" />
      <div class="banner-title"><span class="banner-title-highLight">{{$t('home.bannerTitle1')}}</span>{{$t('home.bannerTitle2')}}
      </div>
      <div class="banner-description">{{$t('home.bannerDescription1')}}<span class="banner-title-highLight"
                                                                             style="font-weight: 800">{{$t('home.bannerDescription2')}}</span>{{$t('home.bannerDescription3')}}
      </div>
      <div class="btn banner-btn" @click="more">{{$t('home.bannerButtonText')}}</div>
    </div>
    <div class="line-block"></div>
    <div class="ideaBanner flex-just-content-center">
      <div class="subTitle">{{$t('home.ideaBanner.title')}}</div>
      <div class="main-description">IDEAS</div>
      <i v-if="isPC" class="play-btn" @click="play"></i>
      <i v-else class="play-btn2" @click="play"></i>
      <div class="description" v-html="$t('home.ideaBanner.description')"></div>
    </div>
    <div class="main-content flex-just-content-center">
      <div class="subTitle">{{$t('home.createBanner.title')}}</div>
      <div class="main-description">CREATIONS</div>
      <div class="main-sub-description">{{$t('home.createBanner.description')}}</div>
      <div class="list-wrapper">
        <ul class="createList">
          <li v-for="item in createList" :key="item.index">
            <img :src="item.imgUrl" />
            <p>{{item.description}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="future-content flex-just-content-center">
      <div class="subTitle">{{$t('home.developBanner.title')}}</div>
      <div class="main-description">DEVELOP</div>
      <div class="list-wrapper">
        <ul class="createList">
          <li v-for="item in partThreeList" :key="item.index">
            <img class="img" :src="item.imgUrl" />
            <h5>{{item.title}}</h5>
            <div class="line"></div>
            <p>{{item.description}}</p>
            <div class="btn" @click="openDialog(item)"><span>{{$t('home.developBanner.list.buttonText')}}</span><img
              src="./images/pinList/arrow.png" /></div>
          </li>
        </ul>
      </div>
    </div>

    <div class="future-content flex-just-content-center">
      <div class="subTitle">{{$t('home.futureBanner.title')}}</div>
      <div class="main-description">FUTURE</div>
      <div class="description">{{$t('home.futureBanner.description')}}</div>
      <div class="list-wrapper-no-bg">
        <ul class="createList">
          <li v-for="item in futureList" :key="item.index">
            <img class="img" :src="item.imgUrl" />
            <h5>{{item.title}}</h5>
            <div class="line"></div>
            <p>{{item.description}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!--<div class="link" @click="$router.push('/AboutUs')"></div>-->

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
  name: "home",
  data() {
    return {
      videoShow: false,
      videoBShow: false,
      isPC: window.innerWidth > 1200,
      createList: [
        {
          imgUrl: require('./images/createList/1.svg'),
          description: this.$t('home.createBanner.list.description1'),
        },
        {
          imgUrl: require('./images/createList/2.svg'),
          description: this.$t('home.createBanner.list.description2'),
        },
        {
          imgUrl: require('./images/createList/3.svg'),
          description: this.$t('home.createBanner.list.description3'),
        },
        {
          imgUrl: require('./images/createList/4.svg'),
          description: this.$t('home.createBanner.list.description4'),
        },
        {
          imgUrl: require('./images/createList/5.svg'),
          description: this.$t('home.createBanner.list.description5'),
        },
        {
          imgUrl: require('./images/createList/6.svg'),
          description: this.$t('home.createBanner.list.description6'),
        }
      ],
      partThreeList: [
        {
          index: 'a',
          imgUrl: require('./images/pinList/3-1.svg'),
          title: this.$t('home.developBanner.list.title1'),
          subtitle: this.$t('home.developBanner.list.subTitle1'),
          description: this.$t('home.developBanner.list.description1'),
          icon: require('./images/pinList/3-1-1.png'),
          bottom_pic: require('./images/pinList/3-1-a.png'),
          content: this.$t('home.developBanner.list.detail1'),
          linkUrl: ''
        },
        {
          index: 'b',
          imgUrl: require('./images/pinList/3-3.svg'),
          title: this.$t('home.developBanner.list.title2'),
          subtitle: this.$t('home.developBanner.list.subTitle2'),
          description: this.$t('home.developBanner.list.description2'),
          icon: require('./images/pinList/3-1-2.png'),
          bottom_pic: require('./images/pinList/3-1-b.png'),
          content: this.$t('home.developBanner.list.detail2')
        },
        {
          index: 'c',
          imgUrl: require('./images/pinList/3-2.svg'),
          title: this.$t('home.developBanner.list.title3'),
          subtitle: this.$t('home.developBanner.list.subTitle3'),
          description: this.$t('home.developBanner.list.description3'),
          icon: require('./images/pinList/3-1-3.png'),
          bottom_pic: require('./images/pinList/3-1-c.png'),
          content: this.$t('home.developBanner.list.detail3')
        },
      ],
      futureList: [
        {
          imgUrl: require('./images/futureList/3-1.svg'),
          title: this.$t('home.futureBanner.list.title1'),
          description: this.$t('home.futureBanner.list.description1'),
          icon: require('./images/pinList/3-1-1.png')
        },
        {
          imgUrl: require('./images/futureList/3-3.svg'),
          title: this.$t('home.futureBanner.list.title2'),
          description: this.$t('home.futureBanner.list.description2'),
          icon: require('./images/pinList/3-1-2.png')
        },
        {
          imgUrl: require('./images/futureList/3-2.svg'),
          title: this.$t('home.futureBanner.list.title3'),
          description: this.$t('home.futureBanner.list.description3'),
          icon: require('./images/pinList/3-1-3.png')
        },
      ],
      panelShow: false,
      obj: {}
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.$refs.video.src = `/vedio/${this.$lang === 'cn' ? 'cn' : 'en'}/home.mp4`
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
    openDialog(item) {
      this.panelShow = true
      this.obj = item
    },
    close() {
      this.panelShow = false
    },
    more() {
      this.$store.commit('SET_MENU_INDEX', 1)
      this.$router.push('/PinWorld')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .play-btn {
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
    background: url(../../assets/images/play.svg) no-repeat 14% center;
    background-size: 100%;
    display: inline-block;
    width: 56px;
    height: 56px;
    cursor: pointer;
    overflow: hidden;
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
    @media only screen and (max-width 375px)
      padding-bottom 0
    .banner-content
      @media only screen and (max-width 1200px)
        padding-top 130px
      .banner
        width 442px
        height 420px
        @media only screen and (max-width 1200px) {
          width 320px
          height 320px
        }
        @media only screen and (max-width 768px) {
          width 250px
          height 250px
        }
      .btn
        width 261px
        height 50px
        background url("./images/btn-bg.png") no-repeat
        background-position center
        background-size cover
        text-align center
        line-height 55px

    .line-block
      width 100%
      height 150px
      background url("./images/line-block.jpg") no-repeat
      background-size cover
      background-position center
      margin 200px 0
      @media only screen and (max-width 1200px) {
        height 100px
        margin 100px 0
      }
      @media only screen and (max-width 768px) {
        height 50px
        margin-top 50px
        margin-bottom 0
      }
    .ideaBanner
      .description
        max-width 1000px
        text-align center
        line-height 2
        margin 50px 0 300px
        @media only screen and (max-width 1024px) {
          padding 0 50px
        }
        @media only screen and (max-width 768px) {
          font-size 14px
          padding 0 15px
          margin 30px 0 50px
        }
    .main-content
      .list-wrapper
        width 100%
        margin-top 80px
        background url("./images/createList/list-bg.png")
        background-repeat no-repeat
        background-position center
        overflow hidden
        ul
          margin 0 auto
          width 65%
          padding-top 170px
          display flex
          justify-content space-between
          flex-wrap wrap
          @media only screen and (max-width 1600px) {
            width 80%
          }
          @media only screen and (max-width 1200px) {
            width 90%
            padding 64px 0
          }
          @media only screen and (max-width 768px) {
            width 100%
          }
          li
            display flex
            flex-direction column
            justify-content center
            margin-bottom 110px
            width 33%
            @media only screen and (max-width 1200px) {
              width 50%
              margin-bottom 0
            }
            @media only screen and (max-width 768px) {
              margin-bottom 20px
            }
            img
              margin 0 auto
              display block
              width 88px
              height 88px
            p
              text-align center
              padding 0 10px
              margin 20px 0 50px
              height 20px
              @media only screen and (max-width 768px) {
                font-size 14px
                margin-bottom 0
              }
              @media only screen and (max-width 375px) {
                height 55px
              }
    .future-content
      margin-top 150px
      @media only screen and (max-width 768px) {
        margin-top 100px
      }
      @media only screen and (max-width 376px) {
        margin-top 0px
      }
      .description
        max-width 800px
        text-align center
        line-height 1.5
        @media only screen and (max-width 768px) {
          font-size 14px
          padding 0 15px
        }
      .list-wrapper-no-bg
        width 100%
        margin-top 80px
        overflow hidden
        @media only screen and (max-width 1200px) {
          background-size cover
        }
        @media only screen and (max-width 376px) {
          margin-top 0
        }
        ul
          margin 0 auto
          width 70%
          padding-top 110px
          display flex
          justify-content space-between
          margin-bottom 180px
          flex-wrap wrap
          @media only screen and (max-width 1600px) {
            width 80%
          }
          @media only screen and (max-width 1800px) {
            width 90%
          }
          @media only screen and (max-width 768px) {
            margin-bottom 0
            padding-top 30px
            width 100%
          }
          li
            display flex
            flex-direction column
            align-items center
            justify-content center
            width 33%
            @media only screen and (max-width 1200px) {
              width 100%
            }
            @media (max-width: 378px) {
              margin-bottom 50px
            }
            img
              margin 0 auto
              display block
              width 190px
              height 160px
            h5
              margin-top 80px
              font-weight 600
              text-align center
              height 30px
              @media only screen and (max-width 768px) {
                margin-top 40px
              }
            .line
              width 60px
              height 4px
              border-radius 2px
              @media (min-width: 1200px) {
                margin 30px 0
              }
              @media (max-width: 1200px) {
                margin 20px 0
              }
            &:nth-child(1)
              .line
                background-color #00e7ff
            &:nth-child(2)
              .line
                background-color #a9bb0d
            &:nth-child(3)
              .line
                background-color #ef4868
            p
              width 90%
              height 50px
              line-height 1.5
              text-align center
              padding 0 10px
              margin-bottom 100px
              @media (max-width: 768px) {
                font-size 14px
                margin-bottom 20px
                min-height 50px
                height auto
              }
              @media (max-width: 378px) {
                width 95%
              }
            .btn
              position relative
              height 44px
              width 140px
              line-height 34px
              cursor pointer
              user-select none
              border 1px solid #000
              display flex
              flex-direction row
              font-weight 600
              align-items center
              justify-content center
              transition .3s
              span
                margin-right 5px
              img
                margin-right 0
                margin-left 0
                width 24px
                height 12px
              &:hover
                img
                  margin-left 5px
      .list-wrapper
        width 100%
        margin-top 80px
        background url("./images/pinList/bg.png")
        background-repeat no-repeat
        background-position contain
        overflow hidden
        @media only screen and (max-width 1200px) {
          background-size cover
        }
        @media only screen and (max-width 376px) {
          margin-top 0
        }
        ul
          margin 0 auto
          width 65%
          padding-top 110px
          display flex
          justify-content space-between
          flex-wrap wrap
          @media only screen and (max-width 1600px) {
            width 90%
          }
          @media only screen and (max-width 768px) {
            padding-top 30px
          }
          @media only screen and (max-width 378px) {
            width 100%
          }
          li
            display flex
            flex-direction column
            align-items center
            justify-content center
            margin-bottom 110px
            width 33%
            @media only screen and (max-width 1200px) {
              width 100%
            }
            @media only screen and (max-width 768px) {
              margin-bottom 60px
            }
            img
              margin 0 auto
              display block
              width 190px
              height 160px
            h5
              margin-top 80px
              font-weight 600
              @media only screen and (max-width 768px) {
                margin-top 40px
              }
            .line
              width 60px
              height 4px
              border-radius 2px
              @media (min-width: 1200px) {
                margin 30px 0
              }
              @media (max-width: 1200px) {
                margin 20px 0
              }
            &:nth-child(1)
              .line
                background-color #00e7ff
            &:nth-child(2)
              .line
                background-color #a9bb0d
            &:nth-child(3)
              .line
                background-color #ef4868
            p
              width 90%
              height 50px
              line-height 1.5
              text-align center
              padding 0 10px
              margin-bottom 50px
              @media (max-width: 768px) {
                font-size 14px
                margin-bottom 20px
                min-height 50px
                height auto
              }
              @media (max-width: 378px) {
                width 95%
              }
            .btn
              position relative
              height 44px
              width 140px
              line-height 34px
              cursor pointer
              user-select none
              border 1px solid #000
              display flex
              flex-direction row
              font-weight 600
              align-items center
              justify-content center
              transition .3s
              span
                margin-right 5px
              img
                margin-right 0
                margin-left 0
                width 24px
                height 12px
              &:hover
                img
                  margin-left 5px
    .link
      width 850px
      height 124px
      background url("./images/about.png") no-repeat
      background-size cover
      background-position center
      margin 200px auto 100px
      cursor pointer
      user-select none
      @media only screen and (max-width 900px) {
        background-size contain
        width 100%
        margin 200px auto 100px
      }
      @media only screen and (max-width 768px) {
        margin 100px auto 50px
      }
      @media only screen and (max-width 375px) {
        margin 30px auto
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
