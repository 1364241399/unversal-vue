<template>
    <div class="common-layout">
        <el-container class="box">
            <el-aside width="auto"  >
                <div id="asideData" class="asideDiv" :style="`display:${display}`">
                    <LayoutAside />
                </div>
                <el-drawer v-model="drawer" direction="ltr" :with-header="false" :before-close="closeDrawer" >
                    <LayoutAside />
                </el-drawer>
            </el-aside>
            <el-container>
                <el-header>
                    <LayoutHeader />
                </el-header>
                <el-main>
                    Main0
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import { LayoutHeader, LayoutAside } from './components'
import store from '@/store'
import { computed } from 'vue'
import setting from '@/store/setting'

const Wide = 200 + 'px'
const Narrow = 50 + 'px'
const isAside = computed(() => store.setting.isAside)
const drawer = computed(()=>store.setting.drawer)
const asideWidth = computed(() => isAside.value ? Narrow : Wide)
const display =computed(()=>drawer.value?'none':'')

function closeDrawer(){
    setting.drawer = false
}

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
    transition: 1s;
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