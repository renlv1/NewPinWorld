<template>
  <div>
    <div class="banner-content flex-just-content-center">
      <img class="banner" src="./images/banner.png" />
      <div class="subTitleBlueColor">{{$t('EconomicSystem.title')}}</div>
      <p class="main-sub-sub-description">{{$t('EconomicSystem.description')}}</p>
    </div>
    <div class="line">
      <img src="./images/line.png" />
    </div>
    <div class="plan flex-just-content-center">
      <div class="subTitleBlueColor">{{$t('EconomicSystem.plan.title')}}</div>
      <div class="subTitle-wrapper">
        <div class="subTitleLine"></div>
        <div class="subTitle-title">{{$t('EconomicSystem.plan.subTitle')}}</div>
        <div class="subTitleLine"></div>
      </div>
      <ul>
        <li class="item" v-for="item in listPlan" :key="item.index">
          <div class="item-top">
            <img :src="item.linkUrl" />
            <h5>{{item.title}}</h5>
          </div>
          <div class="item-bottom">
            <p>{{item.description}}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="machine flex-just-content-center">
      <img class="machine-logo" src="./images/machine/machine.svg" />
      <div class="subTitle-wrapper">
        <div class="subTitleLine"></div>
        <div class="subTitle-title">{{$t('EconomicSystem.title1')}}</div>
        <div class="subTitleLine"></div>
      </div>
      <div class="collection">
        <div class="title">{{$t('EconomicSystem.title2')}}</div>
        <ul>
          <li v-for="item in machineList" :key="item.index">
            <div class="item-top">
              <img :src="item.linkUrl" />
              <h5>{{item.title}}</h5>
            </div>
            <div class="item-bottom">
              <p>{{item.description}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="attr">
        <div class="title">{{$t('EconomicSystem.title3')}}</div>
        <ul>
          <li v-for="item in arrtList" :key="item.index">
            <div class="item-top">
              <img :src="item.linkUrl" />
              <h5>{{item.title}}</h5>
            </div>
            <div class="item-bottom">
              <p>{{item.description}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="idea">
      <div class="idea-left">
        <img src="./images/idea/idea.png"/>
      </div>
      <div class="idea-right">
        <div class="title">{{$t('EconomicSystem.plan.idea.title')}}</div>
        <img src="./images/idea/box.png" />
        <div class="description" v-html="$t('EconomicSystem.plan.idea.description')"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EconomicSystem",
  data() {
    return {
      listPlan: [
        {
          linkUrl: require('./images/listPlan/1.svg'),
          title: this.$t('EconomicSystem.plan.list.title1'),
          description: this.$t('EconomicSystem.plan.list.description1')
        },
        {
          linkUrl: require('./images/listPlan/2.svg'),
          title: this.$t('EconomicSystem.plan.list.title2'),
          description: this.$t('EconomicSystem.plan.list.description2')
        },
        {
          linkUrl: require('./images/listPlan/3.svg'),
          title: this.$t('EconomicSystem.plan.list.title3'),
          description: this.$t('EconomicSystem.plan.list.description3')
        }],
      machineList: [
        {
          linkUrl: require('./images/machine/machineList/1.svg'),
          title: this.$t('EconomicSystem.plan.machineList.title1'),
          description: this.$t('EconomicSystem.plan.machineList.description1'),
        },
        {
          linkUrl: require('./images/machine/machineList/2.svg'),
          title: this.$t('EconomicSystem.plan.machineList.title2'),
          description: this.$t('EconomicSystem.plan.machineList.description2'),
        },
        {
          linkUrl: require('./images/machine/machineList/3.svg'),
          title: this.$t('EconomicSystem.plan.machineList.title3'),
          description: this.$t('EconomicSystem.plan.machineList.description3'),
        }
      ],
      arrtList: [
        {
          linkUrl: require('./images/machine/arrtList/1.svg'),
          title: this.$t('EconomicSystem.plan.arrtList.title1'),
          description: this.$t('EconomicSystem.plan.arrtList.description1'),
        },
        {
          linkUrl: require('./images/machine/arrtList/2.svg'),
          title: this.$t('EconomicSystem.plan.arrtList.title2'),
          description: this.$t('EconomicSystem.plan.arrtList.description2'),
        },
        {
          linkUrl: require('./images/machine/arrtList/3.svg'),
          title: this.$t('EconomicSystem.plan.arrtList.title3'),
          description: this.$t('EconomicSystem.plan.arrtList.description3'),
        },
        {
          linkUrl: require('./images/machine/arrtList/4.svg'),
          title: this.$t('EconomicSystem.plan.arrtList.title4'),
          description: this.$t('EconomicSystem.plan.arrtList.description4'),
        },
        {
          linkUrl: require('./images/machine/arrtList/5.svg'),
          title: this.$t('EconomicSystem.plan.arrtList.title5'),
          description: this.$t('EconomicSystem.plan.arrtList.description5'),
        }
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner-content
    @media only screen and (max-width 1200px)
      padding-top 130px
    .banner
      width 800px
      height 420px
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

  .line
    width 900px
    margin 180px auto 140px
    text-align center
    @media only screen and (max-width 1024px)
      width 100%
      overflow hidden
      margin 50px 0 30px
    img
      width 100%
      @media only screen and (max-width 1024px)
        display none
  .plan
    width 90%
    margin 0 auto
    background-color #fbfbfb
    padding 135px 0 150px
    border-top 1px solid #e3e3e3
    border-bottom 1px solid #e3e3e3
    @media only screen and (max-width 1024px) {
      width 100%
      padding 80px 0 0
    }
    .subTitleBlueColor
      margin-top 50px
      text-align center
    .subTitle-wrapper
      height 50px
      display flex
      flex-direction row
      align-items center
      margin-bottom 10px
      .subTitleLine
        height 1px
        width 60px
        background-color #e3e3e3
        @media only screen and (max-width 320px) {
          width 30px
        }
      .subTitle-title
        font-size 22px
        margin 0 50px
    ul
      width 100%
      margin 100px auto
      display flex
      flex-direction row
      justify-content flex-start
      @media only screen and (min-width 1400px)
        padding-left 200px
      @media only screen and (max-width 1024px) {
        flex-direction column
        align-items center
        margin-bottom 0
      }
      li
        width 33%
        display flex
        flex-direction column
        align-items flex-start
        @media only screen and (max-width 1024px) {
          width 100%
          align-items center
        }
        @media only screen and (max-width 378px) {
          font-size 14px
        }
        .item-top
          display flex
          flex-direction row
          @media only screen and (max-width 1024px) {
            align-items center
            flex-direction column
          }
          img
            width 75px
            height 75px
            margin-right 30px
            @media only screen and (max-width 1024px) {
              margin 0 auto
            }
          h5
            font-size 20px
            font-weight 600
            @media only screen and (max-width 1024px) {
              margin-top 20px
            }
        .item-bottom
          margin-top 40px
          p
            line-height 1.5
            text-align left
            width 55%
            @media only screen and (max-width 1024px) {
              width 100%
              margin 0 auto
              line-height 2
              text-align center
              margin-bottom 100px
            }
  .machine
    width 90%
    margin 112px auto
    border-bottom 1px solid #e3e3e3
    @media only screen and (max-width 1024px)
      width 100%
    .machine-logo
      width 64px
      height 64px
    .subTitle-wrapper
      margin 50px 0 100px
      height 50px
      display flex
      flex-direction row
      align-items center
      .subTitleLine
        height 1px
        width 60px
        background-color #e3e3e3
        @media only screen and (max-width 375px) {
          width 40px
        }
        @media only screen and (max-width 320px) {
          display none
        }
      .subTitle-title
        font-size 22px
        white-space nowrap
        margin 0 40px
    .attr
      ul
        li
          margin-bottom 30px
    .collection, .attr
      @media only screen and (min-width 1400px)
        margin-left 200px
      .title
        margin 0 auto
        width 100%
        color #765d4e
        font-size 28px
        font-weight bold
        @media only screen and (max-width 1024px)
          width 100%
          text-align center
      ul
        width 100%
        margin 60px auto
        display flex
        flex-direction row
        justify-content flex-start
        flex-wrap wrap
        @media only screen and (max-width 1024px)
          flex-direction column
          margin-bottom 0
        li
          width 33%
          display flex
          flex-direction column
          align-items flex-start
          @media only screen and (max-width 1024px)
            align-items center
            width 100%
          @media only screen and (max-width 378px)
            font-size 14px
          .item-top
            display flex
            flex-direction row
            @media only screen and (max-width 1024px)
              align-items center
              flex-direction column
            img
              width 75px
              height 75px
              margin-right 30px
              @media only screen and (max-width 1024px)
                margin 0 auto
            h5
              font-size 20px
              font-weight 600
              @media only screen and (max-width 1024px)
                margin-top 20px
          .item-bottom
            margin-top 40px
            p
              line-height 1.5
              text-align left
              width 65%
              @media only screen and (max-width 1024px)
                width 100%
                line-height 2
                text-align center
                margin-bottom 100px

  .idea
    background-color #fbfbfb
    padding 135px 0 150px
    width 90%
    margin 0 auto
    display flex
    flex-direction row
    flex-wrap wrap
    @media only screen and (max-width 1024px)
      flex-direction column
      width 100%
    .idea-left
      width 45%
      margin-right 50px
      @media only screen and (max-width 1024px)
        padding 0 20px
        width 100%
      img
       width 100%
    .idea-right
      margin-top 70px
      width 45%
      @media only screen and (max-width 1024px)
        padding 0 20px
        width 100%
      .title
        color #765d4e
        font-size 28px
        font-weight bold
        @media only screen and (max-width 1024px)
          text-align center
      img
        margin 50px 0 56px
        @media only screen and (max-width 1024px)
          width 100%
      .description
        line-height 2
        @media only screen and (max-width 1024px)
          width 100%
        @media only screen and (max-width 378px)
          font-size 14px
  .list
    margin-left 400px
    @media only screen and (max-width 1600px)
      margin-left 10%
    @media only screen and (max-width 1024px)
      margin-left 0
      padding 0 50px
    @media only screen and (max-width 1024px)
      margin-left 0
      padding 0 20px
    .item
      display flex
      flex-direction row
      justify-content flex-start
      margin-bottom 200px
      @media only screen and (max-width 768px) {
        margin-bottom 50px
      }
      &:last-child
        margin-bottom 0
      .img
        width 80px
        height 80px
        margin-right 40px
        @media only screen and (max-width 768px) {
          width 45px
          height 45px
          margin-right 20px
        }
      .item-right
        display flex
        flex-direction column
        align-items flex-start
        justify-content flex-start
        h5
          margin-top -12px
          margin-bottom 80px
          padding 0
          font-size 50px
          color #765d4e
          @media only screen and (max-width 1200px) {
            font-size 60px
            margin-bottom 60px
          }
          @media only screen and (max-width 768px) {
            margin-top 0
            font-size 20px
            margin-bottom 20px
          }
        ul
          .child-item
            margin-bottom 40px
            line-height 36px
            @media only screen and (max-width 768px) {
              line-height 25px
              margin-bottom 15px
            }
            p
              @media only screen and (max-width 768px) {
                font-size 14px
              }

  .text-highLight
    margin-left 520px
    padding-bottom 150px
    color #ff5576
    @media only screen and (max-width 1600px)
      margin-left 20%
    @media only screen and (max-width 1800px) {
      padding-bottom 100px
    }
    @media only screen and (max-width 1024px) {
      padding 0 50px
    }
    @media only screen and (max-width 768px) {
      margin-top 50px
      text-align left
      padding 0 50px
      margin-left 0
      padding-bottom 50px
      font-size 14px
    }
</style>
