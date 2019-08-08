<template>
  <div class="banner" @click="handleClick">
    <img
      :src="bannerImg"
      class="banner-img"
    >
    <div class="banner-info">
      <div class="banner-txt">{{this.sightName}}</div>
      <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          2
      </div>
    </div>
    <fadeAimate>
      <Gallary
        @close="formGallary"
        v-show="showBB"
        :img="gallaryImgs"
      ></Gallary>
    </fadeAimate>
  </div>
</template>

<script>
import Gallary from '../../../common/gallary/gallary'
import fadeAimate from '../../../common/fade/fadeAimate'
export default {
  name: 'DetailBanner',
  components: {
    Gallary,
    fadeAimate
  },
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showBB: false
    }
  },
  methods: {
    handleClick () {
      this.showBB = true
    },
    formGallary (val) {
      this.showBB = false
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  overflow: hidden;
  position: relative;
  padding-bottom: 55%;
  height: 0;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    .banner-txt {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 .2rem;
    }
    .banner-number {
      height: .32rem;
      line-height: .32rem;
      margin-top: .14rem;
      padding: 0 0.4rem;
      font-size: .24rem;
      background-color: #000;
      border-radius: .2rem;
      .iconfont {
        font-size: .24rem;
      }
    }
  }
}
</style>
