<template>
<div class="m-find">
    发现页面
</div>
</template>
<script>
// import { Cell, CellBox, CellFormPreview, Group, Badge, Spinner } from 'vux'
export default {
  name: 'Find',
  mounted () {
    this.$store.commit('changeLinkIndex', 1)
  }
}
</script>
<style lang="less" scoped>

</style>
