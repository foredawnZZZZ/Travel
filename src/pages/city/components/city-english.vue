<template>
  <ul>
    <li
      v-for="(item,index) in english"
      :key="index"
      :ref="item"
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>

export default {
  name: 'cityEnglish',
  props: {
    city: Object
  },
  data () {
    return {
      TouchStatus: false,
      timerId: null
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.TouchStatus = true
    },
    handleTouchMove (e) {
      if (this.TouchStatus) {
        if (this.timerId) {
          clearTimeout(this.timerId)
        }
        this.timerId = setTimeout(() => {
          let offsetY = this.$refs['A'][0].offsetTop
          let touchY = e.touches[0].clientY - 74
          let index = Math.floor((touchY - offsetY) / 20)
          if (index >= 0 && index < this.english.length) {
            this.$emit('change', this.english[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.TouchStatus = false
    }
  },
  computed: {
    english () {
      let english = []
      for (let k in this.city) {
        english.push(k)
      }
      return english
    }
  }
}
</script>

<style lang="less" scoped>
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: .4rem;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    li {
      line-height: .4rem;
      color: #00bcd4;
      text-align: center;
    }
  }
</style>
