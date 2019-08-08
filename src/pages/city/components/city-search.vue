<template>
  <div class="c_search">
    <input
      type="text"
      placeholder="输入城市名或者拼音"
      class="c_input"
      v-model="keycode"
    >
    <div class="search_content" ref="uul" v-show="keycode">
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          @click="handleClickCity(item.name)"
        >
          {{item.name}}
        </li>
        <li v-show="hasData">没有匹配到您想要的数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'citySearch',
  props: {
    city: Object
  },
  data () {
    return {
      keycode: '',
      list: [],
      timerId: null
    }
  },
  computed: {
    hasData () {
      return !this.list.length
    }
  },
  watch: {
    keycode () {
      if (!this.keycode) {
        this.list = []
        return
      }
      if (this.timerId) {
        clearTimeout(this.timerId)
      }
      this.timerId = setTimeout(() => {
        const res = []
        for (let k in this.city) {
          this.city[k].forEach((item, index) => {
            if (item.spell.indexOf(this.keycode) > -1 || item.name.indexOf(this.keycode) > -1) {
              res.push(item)
            }
          })
        }
        this.list = res
      }, 100)
    }
  },
  methods: {
    handleClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.uul)
  }
}
</script>

<style lang="less" scoped>
  .c_search {
    height: 0.72rem;
    padding: 0 0.1rem;
    background: #00bcd4;
    .c_input {
      box-sizing: border-box;
      width: 100%;
      height: 0.62rem;
      line-height: 0.62rem;
      text-align: center;
      color: #666;
      padding: 0 .1rem;
      border-radius: .1rem;
    }
    .search_content {
      overflow: hidden;
      z-index: 2;
      position: absolute;
      top: 1.58rem;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
      li {
        line-height: .76rem;
        padding-left: .1rem;
        background: #fff;
        color: #666;
        border-bottom: 0.01rem solid #ccc;
      }
    }
  }
</style>
