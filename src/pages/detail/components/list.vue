<template>
  <div class="content">
    <div
      class="item"
      v-for="(item,index) in categoryList"
      :key="index"
    >
      <div class="item_title">{{item.title}}</div>
      <div v-if="item.children" class="item_child">
        <DetailList :categoryList="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailList',
  props: {
    categoryList: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
  .item_title {
      line-height: .8rem;
      padding: 0 .2rem;
      font-size: 0.32rem;
      border-bottom: 0.01rem solid #ccc;
    }
  .item_child {
    padding: 0 .2rem;
  }
</style>
