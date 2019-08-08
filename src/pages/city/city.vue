<template>
  <div>
    <cityHeader></cityHeader>
    <citySearch :city="cities"></citySearch>
    <cityList :hot="hotCities" :city="cities" :english="english"></cityList>
    <cityEnglish :city="cities" @change="formEnglish"></cityEnglish>
  </div>
</template>

<script>
import axios from 'axios'
import cityHeader from './components/city-header'
import citySearch from './components/city-search'
import cityList from './components/city-list'
import cityEnglish from './components/city-english'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityEnglish
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      english: ''
    }
  },
  methods: {
    getAjaxinfo () {
      axios.get('../../../static/mock/city.json')
        .then(this.getRes)
    },
    getRes (res) {
      res = res.data
      if (res.ret && res.data) {
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
        console.log(res.data)
      }
    },
    formEnglish (val) {
      this.english = val
    }
  },
  mounted () {
    this.getAjaxinfo()
  }
}
</script>

<style></style>
