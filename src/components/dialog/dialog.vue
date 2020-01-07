<template>
  <div class="dialog">
    <div class="content_dialog">
      <div class="top-dialog">
        <div class="left">
          <img :src="obj.icon" />
          <h5>{{obj.subtitle}}</h5>
        </div>
        <div class="right" @click="close">
          <img class="close" src="./images/close.png" />
        </div>
      </div>
      <img :src="obj.bottom_pic" />
      <div class="content-dialog" v-html="obj.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      require: true
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dialog
    position fixed
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-repeat no-repeat
    background-position center
    background-size cover
    width 55%
    background-image url("./images/dialog_bg.png")
    color #000
    z-index 10000
    @media (max-width: 1024px){
      width 95%
      border-radius 10px
    }
    .content_dialog
      z-index 10000
      @media (min-width: 1024px){
        padding 50px
      }
      @media (max-width: 1024px){
        margin-top 10px
        padding 10px
      }
      @media (max-width: 768px){
        max-height 350px
        overflow scroll
      }
      @media (max-width: 320px){
        max-height 300px
        overflow scroll
      }
      .top-dialog
        display flex
        flex-direction row
        align-items center
        justify-content space-between
        @media (min-width: 1024px){
          margin-top 50px
          height 70px
        }
        @media (max-width: 1024px){
          margin-top 20px
          height 20px
        }
        .left
          display flex
          flex-direction row
          align-items center
          @media (min-width: 1024px){
            padding-left 8px
          }
          @media (max-width: 1024px){
          }
          img
            @media (min-width: 1024px){
              margin-right 20px
            }
            @media (max-width: 1024px){
              margin-right 20px
              width 30px
              height 32px
            }
          h5
            @media (min-width: 1024px){
              font-size 30px
            }
            @media (max-width: 1024px){
              font-size 20px
            }
            @media (max-width: 768px){
              font-size 18px
            }
        .right
          position absolute
          top 40px
          right 30px
          @media (max-width: 768px){
            top 20px
            right 15px
          }
          .close
            cursor pointer
            user-select none
      img
        @media (max-width: 1024px){
          width 30px
        }
      .content-dialog
        font-family "微软雅黑 Light"
        @media (min-width: 1024px){
          line-height 1.5
          margin 40px 0 70px
          font-size 18px
        }
        @media (max-width: 1024px){
          line-height 1.4
          margin 20px 0 25px
          font-size 18px
        }
        @media (max-width: 768px){
          font-size 14px
        }
</style>
