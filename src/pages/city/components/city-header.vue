<template>
  <div class="c_header">
    <router-link to="/" class="iconfont city-back">&#xe624;</router-link>
    城市选择
  </div>
</template>

<script>

export default {
  name: 'cityHeader'
}
</script>

<style lang="less" scoped>
  .c_header {
    position: relative;
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
</style>
