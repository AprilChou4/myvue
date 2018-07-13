<template lang="html">
    <div class="g-footer">
        <ul class="m-menu">
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>发现</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>发现</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>发现</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>发现</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>发现</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'vfooter'
}
</script>
<style lang="less">
.g-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  .m-menu {
      display:flex;
      display:-webkit-flex;
      li {
          flex:1;
          -webkit-flex:1
      }
  }
}
</style>
