<template>
<div class="m-friend">
    朋友页面
</div>
</template>
<script>
// import { Cell, CellBox, CellFormPreview, Group, Badge, Spinner } from 'vux'
export default {
  name: 'Friend',
  mounted () {
    this.$store.commit('changeLinkIndex', 4)
  }
}
</script>
<style lang="less" scoped>

</style>
