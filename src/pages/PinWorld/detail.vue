<template>
  <div>
    <div class="detail">
      <div class="content">
        <h5 class="subTitleBlueColor">{{title}}</h5>
        <p class="text" v-html="description"></p>
        <div class="back" @click="$router.back()">
          <img width="26" height="16" src="./images/back.png"/>
          <span>{{$t('ArWorld.other')}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      detailDetail: [
        {
          "index": "0",
          "title": this.$t('ArWorld.rule.list.title1'),
          "description": this.$t('ArWorld.rule.list.detail1'),
        },
        {
          "index": "1",
          "title": this.$t('ArWorld.rule.list.title2'),
          "description": this.$t('ArWorld.rule.list.detail2'),
        },
        {
          "index": "2",
          "title": this.$t('ArWorld.rule.list.title3'),
          "description": this.$t('ArWorld.rule.list.detail3'),
        },
        {
          "index": "3",
          "title": this.$t('ArWorld.rule.list.title4'),
          "description": this.$t('ArWorld.rule.list.detail4'),
        },
        {
          "index": "4",
          "title": this.$t('ArWorld.rule.list.title5'),
          "description": this.$t('ArWorld.rule.list.detail5'),
        },
        {
          "index": "5",
          "title": this.$t('ArWorld.rule.list.title6'),
          "description": this.$t('ArWorld.rule.list.detail6'),
        },
        {
          "index": "6",
          "title": this.$t('ArWorld.rule.list.title7'),
          "description": this.$t('ArWorld.rule.list.detail7'),
        },
        {
          "index": "7",
          "title": this.$t('ArWorld.rule.list.title8'),
          "description": this.$t('ArWorld.rule.list.detail8'),
        }
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.getDetail()
  },
  methods: {
    getDetail() {
      const id = this.$route.params.id
      this.detailDetail.forEach((item) => {
        if (String(item.index) === id) {
          this.title = item.title
          this.description = item.description
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail
    min-height 100vh
    width 100%
    color #000
    overflow hidden
    z-index auto
    @media only screen and (max-width 1200px)
      padding-top 30px
    .content
      height 100%
      padding 0 40px
      margin 0 auto
      display flex
      flex-direction column
      justify-content center
      @media (min-width: 1024px) {
        width 60%
        padding-bottom 40px
      }
      @media (max-width: 1024px) {
        width 100%
        padding 0 20px
        padding-bottom 20px
      }
      h5
        font-size 32px
        @media (max-width: 1024px) {
          margin-top 100px
        }
        @media (max-width: 320px) {
          margin-top 80px
        }
      .text
        @media (min-width: 1024px) {
          font-size 16px
          line-height 48px
        }
        @media (max-width: 1024px) {
          margin-top 60px
          font-size 16px
          line-height 2
        }
        @media (max-width: 768px) {
          margin-top 10px
          font-size 14px
        }
        p
          margin-top 50px
      .back
        margin-top 80px
        display flex
        align-items center
        font-size 16px
        padding-bottom 150px
        @media only screen and (max-width 1400px) {
          padding-bottom 100px
        }
        @media (max-width: 1024px) {
          font-size 16px
        }
        @media (max-width: 768px) {
          margin-top 40px
          font-size 14px
          padding-bottom 50px
        }
        img
          margin-right 10px
          cursor pointer
          z-index 10
</style>
