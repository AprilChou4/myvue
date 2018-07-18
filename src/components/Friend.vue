<template>
<transition name="showRouter">
  <div class="g-wrap">
    <div class="g-header">
        <i class="iconfont">&#xe77e;</i>
        <span>
          <button-tab>
            <button-tab-item selected>动态</button-tab-item>
            <button-tab-item><span class="vux-reddot-s">附近</span></button-tab-item>
          </button-tab>
        </span>
        <i class="iconfont">&#xe649;</i>
    </div>
    <div class="g-main">
      <div class="m-friend">
        <ul class="m-list">
          <li>
            <i class="iconfont">&#xe644;</i>
            <span>发动态</span>
          </li>
          <li>
            <i class="iconfont">&#xe645;</i>
            <span>发布视频</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
import { ButtonTab, ButtonTabItem } from 'vux'
export default {
  name: 'Friend',
  components: {
    ButtonTab,
    ButtonTabItem
  },
  mounted () {
    this.$store.commit('changeLinkIndex', 4)
  }
}
</script>
<style lang="less" scoped>
.vux-button-group {
    width:5rem;
  }
.m-friend {
  .m-list {
    display:flex;
    display:-webkit-flex;
    background:#de0404;
    color:#fff;
    height: 2rem;
    font-size: .875rem;
    li {
      flex:1;
      text-align:center;
      i {
        vertical-align:middle;
      }
    }
  }
}
</style>
