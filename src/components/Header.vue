<template>
    <div class="g-header">
        <i class="iconfont">&#xe77e;</i>
        <span>我的音乐</span>
        <i class="iconfont">&#xe649;</i>
    </div>
</template>
<script>
export default {
  name: 'vheader'
}
</script>
<style lang="less" scoped>
.g-header {
    padding:0 0.625rem;
    background:#de0404;
    color:#fff;
    height:3.75rem;
    line-height: 3.75rem;
    display:flex;
    display: -webkit-flex;
    justify-content: space-around;
    text-align: center;
    span {
        flex:1;
        -webkit-flex:1;
    }
}
</style>
