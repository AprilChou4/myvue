<template lang="html">
    <div class="g-footer">
        <ul class="m-menu">
            <li class="link">
                <p><i class="iconfont">&#xe620;</i></p>
                <p>发现</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>视频</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>我的</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>朋友</p>
            </li>
            <li>
                <p><i class="iconfont">&#xe620;</i></p>
                <p>账号</p>
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
      height:4rem;
      line-height:4rem;
      background:#f2f3f1;
      li {
          line-height:1.5;
          flex:1;
          -webkit-flex:1
      }
      li.link {
          color:#d33a31;
      }
  }
}
</style>
