<template>
<div class="m-vedio">
    我的视频
</div>
</template>
<script>
// import { Cell, CellBox, CellFormPreview, Group, Badge, Spinner } from 'vux'
export default {
  name: 'Vedio',
  mounted () {
    this.$store.commit('changeLinkIndex', 2)
  }
}
</script>
<style lang="less" scoped>

</style>
