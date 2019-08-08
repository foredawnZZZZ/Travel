<template>
  <div class="header">
    <div class="h_left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="h_center">
      <p class="h_txt">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
      </p>
    </div>
    <router-link to="/city">
      <div class="h_right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="less" scoped>
  .header {
    position: relative;
    overflow: hidden;
    display:flex;
    height: .86rem;
    line-height: .86rem;
    background-color: #00bcd4;
    padding-left: .8rem;
    padding-right: 1.2rem;
    text-align: center;
    .h_left {
      position: absolute;
      left: 0;
      top: 0;
      width: .8rem;
      height: 100%;
      font-size: .42rem;
      color: #fff;
    }
    .h_right {
      width: 1.2rem;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      text-align: center;
      color: #fff;
      .iconfont.arrow-icon {
        font-size: .24rem;
      }
    }
    .h_center {
      width: 100%;
      height: .64rem;
      padding-top: .1rem;
      padding-bottom: .1rem;
      .h_txt {
        flex: 1;
        height: .64rem;
        line-height: .64rem;
        text-align: left;
        border-radius: .1rem;
        background-color: #fff;
        padding-left: .2rem;
        color:#ccc;
      }
    }
  }
</style>
