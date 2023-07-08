<template>
  <div>
    <!-- <div v-if="props.data.children"> 22
        <AsideMenu v-for="(item,index) in props.data.children"
        :key="item" :data="item" :index="index"/>
    </div> -->

    <el-sub-menu 
        v-if="props.data.children"
        :index="getIndex('/'+props.data.path)"
        >
        <template #title >
            <el-icon><location /></el-icon>
            <span v-if="!(store.setting.isAside && props.collapsed)">{{  props.data.menuName}}</span>
        </template>
        <AsideMenu v-for="item in props.data.children"
        :key="item" :data="item" :url="aurl"/>
    </el-sub-menu>
    <template v-else>
        <el-menu-item  :index="getIndex('/'+props.data.path)">
    
                {{ props.data.menuName }}
    
        </el-menu-item>
    </template>
  </div>
</template>

<script setup>

import { defineProps,ref } from "vue";
import store from '@/store/index'
import AsideMenu from "@/layout/components/AsideMenu"


const props = defineProps({data:Object,collapsed:Boolean,url:String})

const aurl = ref("")



function getIndex(routerPath){
  aurl.value = props.url!= undefined? props.url+routerPath:routerPath
  return aurl.value
}

</script>
<style  lang="scss" >


</style>