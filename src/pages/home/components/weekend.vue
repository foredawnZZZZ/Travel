<template>
  <div>
    <div class="info">
      周末去哪儿
    </div>
    <ul class="wrap">
      <li v-for="(item) in list" :key="item.id">
        <img :src="item.imgUrl" class="img-box">
          <p class="p_one" v-text="item.title"></p>
          <p class="p_two" v-text="item.desc"></p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .info {
    width: 100%;
    line-height: .8rem;
    background-color: #eee;
    padding-left: .2rem;
  }
  .wrap {
    width: 100%;
    overflow: hidden;
    li {
      float: left;
      width: 100%;
      .img-box {
        width: 100%;
      }
      p {
        padding-left: .2rem;
        font-size: .32rem;
      }
      .p_one {
        line-height: .54rem;
        color: #000;
      }
      .p_two {
        line-height: .4rem;
        color: #ccc;
      }
    }
  }
</style>
