<template>
  <div id="app">
    <div class="m-index">
      <VHeader></VHeader>
      <router-view></router-view>
      <VFooter> </VFooter>
    </div>
  </div>
</template>

<script>
import VHeader from './components/Header.vue'
import VFooter from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style>
@import './common/common.less';
#app, .m-index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background:#f7f7f7;
}
</style>
