<template>
    <div class="common-layout">
        <el-container class="box">
            <el-aside :class="{ wait: isAside, narrow: !isAside }">Aside</el-aside>
            <el-container>
                <el-header>Header
                    <LayoutHeader />
                    <el-button type="primary" @click="clickTest">测试用</el-button>
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
import { LayoutHeader } from './components'
import setting from '@/store'
import { computed, ref } from 'vue'
const Wide = 200 + 'px'
const Narrow = 50 + 'px'
const isAside = ref(0)
const asideWidth = computed(()=>localStorage.getItem("localWidth"))
const fromWidth = computed(()=>localStorage.getItem("localWidth"))
const toWidth = computed(()=>localStorage.getItem("localWidth"))

isAside.value = setting.isAside


function clickTest() {
    console.info(setting.isAside,isAside,1)
    isAside.value = !isAside.value
    console.info(setting.isAside,isAside,2)

    asideWidth.value = isAside.value ? Narrow : Wide
    fromWidth.value = isAside.value ? Wide : Narrow
    toWidth.value = isAside.value ? Narrow : Wide
    
    localStorage.setItem("localWidth", asideWidth.value)
    localStorage.setItem("localAside", isAside.value)
    let html = document.documentElement
    html.setAttribute('data-theme', isAside.value ? 'dark' : 'light')
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

.el-aside {
    height: 100%;
    width: v-bind(asideWidth);
    background-color: antiquewhite;
}

.wait {
    animation-name: switch;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

}

.narrow {
    animation-name: switchto;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}


@keyframes switch {
    from {
        width: v-bind(fromWidth);
    }

    to {
        width: v-bind(toWidth);
    }
}

@keyframes switchto {
    from {
        width: v-bind(fromWidth);
    }

    to {
        width: v-bind(toWidth);
    }
}

@media (max-width: 1000px) {
    .wait {
        width: 50px;
    }
}


.el-header {
    display: flex;
    height: 50px;
    background-color: aliceblue;
}

.el-main {
    height: calc(100% - 50px);
    background-color: aqua;
}
</style>