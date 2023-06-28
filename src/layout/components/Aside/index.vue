<template>
  <div class="sidebar-box">
    <div class="sidebar-header">
      <div class="sidebar-header-logo"><img :src="logoImg" alt="logo">
      </div>
      <div class="sidebar-header-title" :class="{ title: isAside }">标题标题标题</div>
    </div>
    <!-- background-color="#faebd7" -->
    <el-menu mode="vertical" :collapse="isAside" :background-color="colors" text-color="#ff0ff0"
    collapse-transition @open="ssd" @close="ssd">
      <el-sub-menu  index="144"> 
        <template #title >
          <el-icon><Check /></el-icon>
  
            <span>236</span>
        </template>
        <span>15452</span>
      </el-sub-menu>
      <el-menu-item index="11">
        <el-icon >
          <House />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="22"><el-icon >
          <House />
        </el-icon></el-menu-item>
      <el-menu-item index="33"><el-icon >
          <House />
        </el-icon></el-menu-item>
      <el-menu-item index="44"><el-icon >
          <House />
        </el-icon></el-menu-item>
    </el-menu>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import store from '@/store'
import logoImg from '@/assets/logo.png'

const isAside = computed(() => {
  return store.setting.isAside
})
const colors = ref("#faebd7")

const asideWidth = computed(() => isAside.value ? store.setting.Narrow : store.setting.Wide)

function ssd(s){
  console.log(s)
}

</script>
<style  lang="scss" scoped>
.sidebar-box{
  overflow-x: hidden;
}
.sidebar-header {
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.sidebar-header-logo {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
}

.sidebar-header-title {
  opacity: 1;
  white-space: nowrap;
  transition: all var(--time) ease-in-out;
}

.title {
  opacity: 0;
  width: 0;
  transition: all var(--time) ease-in-out;
}

img {
  height: 30px;
  width: 30px;
  object-fit: cover;
}

.el-menu {
  --width:v-bind(asideWidth);
  border-right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: var(--width);
}

.el-menu-item {
  display: flex;
  justify-content: left;
  align-items: center;
}
.el-icon{
  color:#409EFC
}
</style>