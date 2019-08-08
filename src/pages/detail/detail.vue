<template>
  <div class="center">
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <DetailHeader></DetailHeader>
    <DetailList :categoryList="categoryList"></DetailList>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      categoryList: [],
      children: []
    }
  },
  methods: {
    getAjaxinfo () {
      axios.get('../../../static/mock/detail.json')
        .then(this.getRes)
    },
    getRes (res) {
      res = res.data
      if (res.ret && res.data) {
        this.bannerImg = res.data.bannerImg
        this.sightName = res.data.sightName
        this.gallaryImgs = res.data.gallaryImgs
        this.categoryList = res.data.categoryList
        this.children = res.data.categoryList[0].children
      }
    }
  },
  mounted () {
    this.getAjaxinfo()
  }
}
</script>

<style>
  .center {
    height: 40rem;
  }
</style>
