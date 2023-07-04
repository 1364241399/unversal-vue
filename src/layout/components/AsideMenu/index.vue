<template>
  <div>
    <!-- <div v-if="props.data.children"> 22
        <AsideMenu v-for="(item,index) in props.data.children"
        :key="item" :data="item" :index="index"/>
    </div> -->

    <el-sub-menu 
        v-if="props.data.children"
        :index="`${props.data.menuId}`"
        >
        <template #title >
            <el-icon><location /></el-icon>
            <span v-if="!(store.setting.isAside && props.collapsed)">{{  props.data.menuName}}</span>
        </template>
        <AsideMenu v-for="item in props.data.children"
        :key="item" :data="item" />
    </el-sub-menu>
    <template v-else>
        <el-menu-item  :index="`${props.data.menuId}`">
    
                {{ props.data.menuName }}
    
        </el-menu-item>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import store from '@/store/index'
import AsideMenu from "@/layout/components/AsideMenu"

const props = defineProps({data:Object,collapsed:Boolean})


</script>
<style  lang="scss" scoped>
</style>