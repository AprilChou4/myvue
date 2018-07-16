<template lang="html">
    <div class="g-footer">
        <ul class="m-menu">
            <li :class="{link:linkIndex==1}">
                <router-link to="/">
                    <p><i class="iconfont">&#xe68e;</i></p>
                    <p>发现</p>
                </router-link>
            </li>
            <li :class="{link:linkIndex==2}">
                <router-link to="/vedio">
                    <p><i class="iconfont">&#xe645;</i></p>
                    <p>视频</p>
                </router-link>
            </li>
            <li :class="{link:linkIndex==3}">
                <router-link to="/mycenter">
                    <p><i class="iconfont">&#xe620;</i></p>
                    <p>我的</p>
                </router-link>
            </li>
            <li>
                <router-link to="/friend">
                    <p><i class="iconfont">&#xe783;</i></p>
                    <p>朋友</p>
                </router-link>
            </li>
            <li>
                <router-link to="/account">
                    <p><i class="iconfont">&#xe66c;</i></p>
                    <p>账号</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'vfooter',
  computed: {
    linkIndex () {
      return this.$store.state.linkIndex
    }
  }
}
</script>
<style lang="less">
.g-footer {
    text-align: center;
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
      li.link a {
          color:#d33a31;
      }
  }
}
</style>
