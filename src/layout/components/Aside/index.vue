<template>
  <div class="sidebar-box">
    <div class="sidebar-header">
      <div class="sidebar-header-logo"><img :src="logoImg" alt="logo" >
      </div>
      <div class="sidebar-header-title" v-show="!store.setting.isAside" :class="{title: isAside}">标题标题标题</div>
    </div>
          <!-- background-color="#faebd7" -->
    <el-menu 
      mode="vertical"
      :collapse="isAside"
      :background-color="color"
      text-color="#ff0ff0"
      collapse-transition="true">
      <el-sub-menu >
        <template #title>
          <el-icon color="#409EFC"><House /></el-icon>
          <span>236</span>
        </template>
        <el-menu-item-group>111</el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="index">index</el-menu-item>
      <el-menu-item index="22">22</el-menu-item>
      <el-menu-item index="33">33</el-menu-item>
      <el-menu-item index="44">44</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import store from '@/store'
import logoImg from '@/assets/logo.png'
const a = ref(0)
a.value = 1
const isAside = computed(()=>store.setting.isAside)
const color = ref("#faebd7")

</script>
<style  lang="scss" scoped>
.sidebar-header{
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.sidebar-header-logo{
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.title{
  
}

img{
  height: 30px;
  width: 30px;
  object-fit:cover;
}
.el-menu{
  border-right: solid 1px var(--asideBackgroundColor);
  transition-delay: 0ms;
}
.el-menu-item{
  justify-content: center;
  align-content: center;
}
</style>