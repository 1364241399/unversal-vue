<template>
  <div class="sidebar-box">
    <div class="sidebar-header">
      <div class="sidebar-header-logo"><img :src="logoImg" alt="logo">
      </div>
      <div class="sidebar-header-title" :class="{ title: isAside }">标题标题标题</div>
    </div>
    <!-- background-color="#faebd7" -->
    <el-menu mode="vertical" :collapse="isAside" :background-color="color" text-color="#ff0ff0"
      collapse-transition="true">
      <el-sub-menu  expand-open-icon="el-icon-location" expand-close-icon="el-icon-location">
        <template #title >
            <el-icon color="#409EFC">
              <House />
            </el-icon>
            <span>236</span>
        </template>
        <el-menu-item-group>111</el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="index">
        <el-icon color="#409EFC">
          <House />
        </el-icon>
      </el-menu-item>
      <el-menu-item index="22"><el-icon color="#409EFC">
          <House />
        </el-icon></el-menu-item>
      <el-menu-item index="33"><el-icon color="#409EFC">
          <House />
        </el-icon></el-menu-item>
      <el-menu-item index="44"><el-icon color="#409EFC">
          <House />
        </el-icon></el-menu-item>
    </el-menu>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import store from '@/store'
import logoImg from '@/assets/logo.png'
const Wide = 200 + 'px'
const Narrow = 70 + 'px'
const isAside = computed(() => store.setting.isAside)
const color = ref("#faebd7")
const asideWidth = computed(() => isAside.value ? Narrow : Wide)

</script>
<style  lang="scss" scoped>
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
</style>