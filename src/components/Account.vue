<template>
<div class="m-find">
    <div class="m-info">
      <div class="basic-info">
        <div class="m-name">
          <img src="../assets/head.jpg">
          <div>
            <p>AprilChou<i class="iconfont">&#xe620;</i></p>
            <a href="javascript:;" class="ui-btn ui-btn-small ui-level">Lv.9</a>
          </div>
        </div>
        <a href="javascript:;" class="ui-btn ui-btn-mid"><i class="iconfont">&#xe620;</i>签到</a>
      </div>
      <card>
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span>1130</span>
            <p><b>动态</b></p>
          </div>
          <div class="vux-1px-r">
            <span>15</span>
            <p><b>关注</b></p>
          </div>
          <div class="vux-1px-r">
            <span>0</span>
            <p><b>粉丝</b></p>
          </div>
          <div>
            <span><i class="iconfont">&#xe620;</i></span>
            <p>我的资料</p>
          </div>
        </div>
      </card>
    </div>
    <group gutter="10px">
        <cell title="我的消息" value="207" is-link>
          <span slot="icon"><i class="iconfont">&#xe622;</i></span>
        </cell>
    </group>
    <group gutter="10px">
        <cell title="会员中心" is-link>
          <span slot="icon"><i class="iconfont">&#xe620;</i></span>
          <span slot="title"><span style="vertical-align:middle;">本地音乐</span> <badge text="2"></badge></span>
        </cell>
        <cell value="小黄人收发送耳机" title="商城" is-link>
          <span slot="icon"><i class="iconfont">&#xe6fd;</i></span>
        </cell>
        <cell is-link>
          <span slot="icon"><i class="iconfont">&#xe613;</i></span>
          <span slot="title"><span style="vertical-align:middle;">本地音乐qwqwqw</span> <badge text="2"></badge></span>
        </cell>
        <cell title="游戏推荐Beta" is-link>
          <span slot="icon"><i class="iconfont">&#xe622;</i></span>
        </cell>
        <cell title="在线听歌免流量" is-link>
          <span slot="icon"><i class="iconfont">&#xe622;</i></span>
        </cell>
    </group>
    <group gutter="10px">
        <cell title="设置" is-link>
          <span slot="icon"><i class="iconfont">&#xe620;</i></span>
          <span slot="title"><span style="vertical-align:middle;">本地音乐</span> <badge text="2"></badge></span>
        </cell>
        <cell title="扫一扫" is-link>
          <span slot="icon"><i class="iconfont">&#xe6fd;</i></span>
        </cell>
        <cell value="官方红" title="个性换肤" is-link>
          <span slot="icon"><i class="iconfont">&#xe613;</i></span>
          <span slot="title"><span style="vertical-align:middle;">本地音乐qwqwqw</span> <badge text="2"></badge></span>
        </cell>
        <cell title="夜间模式" value="207" is-link>
          <span slot="icon"><i class="iconfont">&#xe622;</i></span>
        </cell>
    </group>
</div>
</template>
<script>
import { Cell, Group, Card, Badge } from 'vux'
export default {
  name: 'Account',
  components: {
    Cell,
    Group,
    Card,
    Badge
  },
  mounted () {
    this.$store.commit('changeLinkIndex', 5)
  }
}
</script>
<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.m-find {
  overflow:auto;
  position: absolute;
  top: 3.75rem;
  left: 0;
  right: 0;
  bottom: 3.75rem;
  .m-info {
    background:#fff;
    padding:.875rem;
    .basic-info {
      display: flex;
      align-items: center;
      justify-content:space-between;
      img {
        height:4rem;
        width:4rem;
        border-radius:50%;
        margin-right:.875rem;
      }
      .m-name {
        display: flex;
        align-items: center;
        justify-content:space-between;
        .ui-level {
          color:#ccc;
          font-style:italic;
        }
      }
    }
  }
}
</style>
