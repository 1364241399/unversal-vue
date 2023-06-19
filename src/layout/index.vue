<template>
    <div class="common-layout">
        <el-container class="box">
            <el-aside width="auto">
                <div id="asideData" class="asideDiv" >
                    <LayoutAside />
                </div>
                <el-drawer 
                v-model="drawer" 
                direction="ltr" 
                :with-header="false" 
                :before-close="closeDrawer">
                    <LayoutAside />
                </el-drawer>
            </el-aside>
            <el-container>
                <el-header>
                    <LayoutHeader />
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { LayoutHeader, LayoutAside } from './components'
import store from '@/store'
import { computed,onMounted,onUnmounted} from 'vue'

const Wide = 200 + 'px'
const Narrow = 50 + 'px'
const isAside = computed(() => store.setting.isAside)
const drawer = computed({
    get(){
        return store.setting.drawer
    },
    set(value){
        store.setting.drawer =value
    }
})
const asideWidth = computed(() => isAside.value ? Narrow : Wide)


const mediaQuery = "(max-width:500px)"
function checkMediaQuery(){
    const match = window.matchMedia(mediaQuery).matches;
    if(match){
        store.setting.drawer = false
    }
}

function closeDrawer() {

    store.setting.drawer = false
}
onMounted(()=>{
    // 监听 resize 方法
    window.addEventListener('resize', checkMediaQuery)
})
onUnmounted(()=>{
    // 移除 resize 方法
    window.removeEventListener('resize', checkMediaQuery)
})

</script>
<style  lang="scss" scoped >

.common-layout {
    width: 100%;
    height: 100%;
}

.box {

    height: 100%;
}

.asideDiv {
    height: 100%;
    width: v-bind(asideWidth);
    background-color: antiquewhite;
    transition-duration: var(--time);
}

@media (max-width: 500px) {
    .asideDiv {
      
        width: 0px;
    }
}

.el-header {
    display: flex;
    height: 50px;
    background-color: aliceblue;
}

.el-main {
    height: calc(100% - 50px);
    background-color: #f0f0f0;
}
</style>