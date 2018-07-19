<template>
<transition name="showRouter">
  <div class="g-wrap">
    <div class="g-header">
          <i class="iconfont">&#xe77e;</i>
          <span>我的音乐</span>
          <i class="iconfont">&#xe649;</i>
      </div>
    <div class="g-main">
      <div class="m-find">
          <div>
            <div class="m-tab">
              <tab :line-width=3 active-color='#fff' v-model="index" custom-bar-width="1.5rem">
                <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
              </tab>
              <swiper v-model="index" height="100px" :show-dots="false">
                <swiper-item v-for="(item, index) in list2" :key="index">
                  <div class="tab-swiper vux-center">{{item}} <VHeader></VHeader></div>
                </swiper-item>
              </swiper>
            </div>
            <div class="m-banner">
              <div class="m-mask"></div>
              <swiper auto dots-position="center" height="120px" style="width:95%; border-radius:0.375rem; margin:0 auto;">
                <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index"><img :src="item"></swiper-item>
              </swiper>
            </div>
            <ul class="m-fmList">
              <li>
                <img src="../assets/head.jpg">
                <p>电台分类</p>
              </li>
              <li>
                <img src="../assets/head.jpg">
                <p>电台排行</p>
              </li>
              <li>
                <img src="../assets/head.jpg">
                <p>付费精品</p>
              </li>
              <li>
                <img src="../assets/head.jpg">
                <p>季冠霖声音课</p>
              </li>
            </ul>
            <panel header="图文结合" :list="list" type="1"></panel>
          </div>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
import VHeader from './Header.vue'
import { Tab, TabItem, Swiper, SwiperItem, Panel } from 'vux'
const list = () => ['个性推荐', '主播电台']
const baseList = [{
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]
const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

export default {
  name: 'Find',
  data () {
    console.log(demoList)
    return {
      index: 0,
      demo2: '美食',
      list2: list(),
      demo01_list: baseList,
      demo04_list: imgList,
      demo03_list: demoList,
      list: [{
        src: 'http://img3.tbcdn.cn/tfscom/TB1zqsLKpXXXXauapXXwu0bFXXX.png_100x100.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题三',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }]
    }
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Panel,
    VHeader
  },
  mounted () {
    this.$store.commit('changeLinkIndex', 1)
  }
}
</script>
<style lang="less" scoped>
.m-find {
  .m-tab {
    .vux-tab-item {
      background:#de0404;
      color:#fff;
    }
    .vux-tab-bar-inner {
      border-radius:10px;
    }
  }
  .m-banner {
    position: relative;
    display:flex;
    display:-webkit-flex;
    flex-direction:column;
    height:10rem;
    .m-mask {
      background:#de0404;
      height:6rem;
    }
    .vux-slider {
      position: absolute;
      top:1rem;
      left:2.5%;
    }
  }
  .m-fmList {
    display:flex;
    display:-webkit-flex;
    justify-content: space-around;
    margin-top:1rem;
    li {
      text-align:center;
      img {
        height:3.5rem;
        width:3.5rem;
        border-radius:50%;
      }
    }
  }
}
</style>
