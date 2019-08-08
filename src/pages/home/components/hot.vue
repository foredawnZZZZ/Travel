<template>
  <div>
    <div class="h_title">热门推销</div>
    <ul class="wrap">
      <router-link
        v-for="(item) in list"
        :key="item.id"
        :to="'/detail/' + item.id"
        tag="li"
      >
        <img :src="item.imgUrl" class="img-box">
        <div class="content-box">
          <p class="p_one" v-text="item.title"></p>
          <p class="p_two" v-text="item.desc"></p>
          <button class="btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeHot',
  props: {
    list: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .h_title {
    margin-top: .3rem;
    background-color: #ccc;
    line-height: .8rem;
    padding-left: .2rem;
    font-size: .3rem;
  }
    li {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
      .img-box {
         width: 1.7rem;
         height: 1.7rem;
         padding: .1rem;
      }
      .content-box {
        flex: 1;
        padding: .1rem;
        min-width: 0;
        .p_one {
          line-height: .54rem;
          font-size: .32rem;
          color: #000;
        }
        .p_two {
          line-height: .4rem;
          color: #ccc;
        }
        .btn {
          line-height: .44rem;
          margin-top: .16rem;
          background: #ff9300;
          padding: 0 .2rem;
          border-radius: .06rem;
          color: #fff;
        }
      }
    }
</style>
