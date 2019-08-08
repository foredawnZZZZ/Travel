<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
    <HomeNav :list="iconList"></HomeNav>
    <HomeHot :list="recommendList"></HomeHot>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeNav from './components/nav'
import HomeHot from './components/hot'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeHot,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeres () {
      axios.get('../../../static/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      let result = res.data
      if (result.ret && result.data) {
        this.swiperList = result.data.swiperList
        this.iconList = result.data.iconList
        this.recommendList = result.data.recommendList
        this.weekendList = result.data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeres()
  }
}
</script>

<style>
</style>
