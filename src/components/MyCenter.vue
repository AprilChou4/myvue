<template>
<div class="m-myCenter">
    <group gutter="0">
      <cell title="本地音乐" value="207" is-link>
        <span slot="icon"><i class="iconfont">&#xe620;</i></span>
        <span slot="title"><span style="vertical-align:middle;">本地音乐</span> <badge text="2"></badge></span>
      </cell>
      <cell title="最近播放" value="207" is-link>
        <span slot="icon"><i class="iconfont">&#xe6fd;</i></span>
      </cell>
      <cell value="207" is-link>
        <span slot="icon"><i class="iconfont">&#xe613;</i></span>
        <span slot="title"><span style="vertical-align:middle;">本地音乐qwqwqw</span> <badge text="2"></badge></span>
      </cell>
      <cell title="我的收藏" value="207" is-link>
        <span slot="icon"><i class="iconfont">&#xe622;</i></span>
      </cell>
    </group>
    <dl class="f-clearfix">
        <dt class="f-clearfix">
            <i class="iconfont">&#xe615;</i>
            <span>我创建的歌单(17)</span>
            <i class="iconfont f-fr">&#xe67a;</i>
        </dt>
        <dd class="f-clearfix">
            <img class="f-fl" src="../assets/logo.png">
            <div class="m-item f-fl">
                <div class="f-fl">
                    <p>我喜欢的音乐</p>
                    <p class="m-little"><i class="iconfont">&#xe602;</i>433首，已下载134首</p>
                </div>
                <i class="iconfont f-fr">&#xe62c;</i>
            </div>
        </dd>
        <dd class="f-clearfix">
            <img class="f-fl" src="../assets/logo.png">
            <div class="m-item f-fl">
                <div class="f-fl">
                    <p>我喜欢的音乐</p>
                    <p class="m-little"><i class="iconfont">&#xe602;</i>433首，已下载134首</p>
                </div>
                <i class="iconfont f-fr">&#xe62c;</i>
            </div>
        </dd>
    </dl>
</div>
</template>
<script>
import { Cell, CellBox, CellFormPreview, Group, Badge, Spinner } from 'vux'
export default {
  name: 'MyCenter',
  components: {
    Group,
    Cell,
    CellBox,
    CellFormPreview,
    Badge,
    Spinner
  },
  mounted () {
    this.$store.commit('changeLinkIndex', 3)
  }
}
</script>
<style lang="less" scoped>
.m-myCenter {
    dl {
        dt{
            font-size:.875rem;
            background:#e2e2e2;
            padding:.375rem;
            i {
                font-size:.875rem;
            }
        }
        dd {
            display: flex;
            display: -webkit-flex;
            justify-content: space-around;
            padding: 0.375rem 0 .375rem .375rem;
            img {
                width:4rem;
                height:4rem;
                border-radius:0.375rem;
                background:#ccc;
                margin-right:0.625rem;
            }
            .m-item {
                border-bottom:1px solid #f3f3f3;
                padding-right:.375rem;
                padding-top: 0.375rem;
                flex:1;
            }
            .m-little {
                font-size:0.625rem;
                padding-top:0.5em;
                i {
                    font-size:.625rem;
                }
            }

        }
    }
}
</style>
