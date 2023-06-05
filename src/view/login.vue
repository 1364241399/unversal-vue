<template>
  <div>"登陆页面"</div>
</template>

<script>
export default {
name:'LoginPage',

data(){
    return {
      key:{
        ss: 1134567890,
        ts: 274,
        df: 132
      }
    }
},
created (){ 
    console.log('login page') 
    console.log(!sessionStorage)
    this.$alert('登陆页面','你已经登录了，不要再次登陆')
}
}

</script>
<style  lang="scss" scoped>
</style>