<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <VFooter> </VFooter>
  </div>
</template>

<script>
import VFooter from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    VFooter
  }
}
</script>

<style>
@import './common/common.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
