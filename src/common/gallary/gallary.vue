<template>
  <div class="container" @click.stop="handleClickShow">
    <div class="box">
      <swiper :options="swiperOptions">
        <swiper-slide
          class="swiper-box"
          v-for="(item,index) in img"
          :key="index"
        >
          <img class="img-box" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    img: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleClickShow () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
  .container {
    z-index: 111;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    .box {
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .img-box {
        width: 100%;
      }
      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
