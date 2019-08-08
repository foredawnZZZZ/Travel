<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="item">
      <div class="title border-bottom">当前城市</div>
      <div class="box pl">
        <div class="button-box">
          <div class="button">{{this.currentCity}}</div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="title border-bottom">热门城市</div>
      <div class="button-box" v-for="item in hot" :key="item.id">
        <div class="button" @click="handleClickCity(item.name)">{{item.name}}</div>
      </div>
    </div>
    <div class="item" v-for="(page,key) in city" :key="key" :ref="key">
      <div class="title border-bottom">{{key}}</div>
      <div class="selected" v-for="item in page" :key="item.id">
        <div class="select border-bottom" @click="handleClickCity(item.name)">{{item.name}}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cityList',
  props: {
    hot: Array,
    city: Object,
    english: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    handleClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    english () {
      if (this.english) {
        const element = this.$refs[this.english][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .border-bottom {
    border-bottom: 0.02rem solid #eee;
  }
  .list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
      .item {
        overflow: hidden;
        .title {
          line-height: 0.54rem;
          background-color: #eee;
          font-size: 0.26rem;
          color: #666;
          padding-left: .1rem;
        }
        .button-box {
          margin-top: .1rem;
          float: left;
          width: 33.1%;
          .button {
            margin: .1rem;
            padding: .1rem 0;
            text-align: center;
            color: #666;
            border: 0.03rem solid #eee;
          }
        }
        .select {
          line-height: 0.76rem;
          padding-left: .2rem;
        }
    }
  }

</style>
