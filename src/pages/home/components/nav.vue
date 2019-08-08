<template>
  <div class="nav">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div v-for="(item) in page" :key="item.id" class="swiper-box">
          <div class="imgBox">
            <img :src="item.imgUrl" class="img-content">
          </div>
          <p class="text" v-text="item.desc"></p>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }

  }
}
</script>

<style lang="less" scoped>
.nav {
  margin-top: 0.1rem;
  .swiper-box {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .imgBox {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      padding: 0.1rem;
      box-sizing: border-box;
      .img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .text {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0.08rem;
      text-align: center;
      font-size: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
