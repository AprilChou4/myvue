<template>
<transition name="showRouter">
  <div class="g-wrap">
    <div class="g-header">
        <i class="iconfont">&#xe77e;</i>
        <span>我的音乐</span>
        <i class="iconfont">&#xe649;</i>
    </div>
    <div class="g-main">
      <div class="m-vedio">
      </div>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'Vedio',
  mounted () {
    this.$store.commit('changeLinkIndex', 2)
  }
}
</script>
<style lang="less" scoped>
.m-vedio {
}
</style>
