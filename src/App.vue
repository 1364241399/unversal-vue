<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    let html = document.documentElement
    let localAside = localStorage.getItem("localAside")
    if(localAside == 'undefined'){
      localAside = false
    }
    const isAside = JSON.parse(localAside);
    let aside = isAside ? 'dark' : 'light';
    html.setAttribute('data-theme',aside)
  }
}
</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
