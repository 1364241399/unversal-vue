<template>
    <div class="common-layout">
        <el-container class="box">
            <el-aside id="asideData">
                <LayoutAside/>
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
import { LayoutHeader,LayoutAside } from './components'
import store from '@/store'
import { computed,watch} from 'vue'

const Wide = 200 + 'px'
const Narrow = 50 + 'px'
const isAside =computed(()=> store.setting.isAside)

const asideWidth = computed(()=> isAside.value ? Narrow : Wide)


watch(()=>asideWidth.value,(newValue,oldValue)=>{
    console.log(newValue,1)
    console.log(oldValue,2)
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

.el-aside {
    height: 100%;
    width: v-bind(asideWidth);
    background-color: antiquewhite;
    transition:1s;
}

@media (max-width: 500px) {
    .el-aside {
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