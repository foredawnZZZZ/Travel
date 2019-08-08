<template>
  <div class="header">
    <router-link
      tag="div"
      to="/"
      class="first"
    >
      1
    </router-link>
    <div
      class="second"
      v-show="!showBBBB"
      :style="opc"
    >
      <router-link to="/" class="iconfont city-back">&#xe624;</router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showBBBB: true,
      opc: {
        opacity: 0
      }
    }
  },
  methods: {
    getScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opc = { opacity }
        this.showBBBB = false
      } else {
        this.showBBBB = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style lang="less" scoped>
  .header {
    .first {
      position: absolute;
      left: 0.2rem;
      top: 0.2rem;
      width: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      border-radius: 0.4rem;
      text-align: center;
      background: rgba(0,0,0,0.8);
      color: #fff;
    }
    .second {
      z-index: 333;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: .86rem;
      line-height: .86rem;
      background-color: #00bcd4;
      font-size: .32rem;
      text-align: center;
      color: #fff;
      .city-back {
        position: absolute;
        left: 0;
        top: 0;
        width: 0.64rem;
        text-align: center;
        font-size: 0.4rem;
        color: #fff;
      }
    }
  }
</style>
