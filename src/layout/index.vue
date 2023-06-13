<template>
    <div class="common-layout">
        <el-container class="box">
            <el-aside :class="{ wait: isAside, narrow: !isAside }">Aside</el-aside>
            <el-container>
                <el-header>Header
                    <LayoutHeader/>
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

<script>
import {LayoutHeader} from './components'
export default {
    name: 'DefaultLayout',
    components:{
        LayoutHeader
    },
    data() {
        return {
            isAside: false,
            Wide: 200 + 'px',
            Narrow: 50 + 'px',
            asideWidth: 200 + 'px',
            fromWidth: '',
            toWidth: '',
        }
    },
    created() {

        let localWidth = localStorage.getItem("localWidth");
        let localAside = localStorage.getItem("localAside")
        if (localWidth||localAside) {
            this.asideWidth = localWidth
            this.isAside = JSON.parse(localAside)
        }
        this.fromWidth = this.asideWidth
        this.toWidth = this.asideWidth

    },
    methods: {
        clickTest() {
            console.info(this.isAside,typeof(this.isAside),1)
            this.isAside =  !this.isAside;
            console.info(this.isAside,typeof(this.isAside),2)
            this.asideWidth = this.isAside ? this.Narrow : this.Wide
            this.fromWidth = this.isAside ? this.Wide : this.Narrow
            this.toWidth = this.isAside ? this.Narrow : this.Wide
            localStorage.setItem("localWidth",this.asideWidth)
            localStorage.setItem("localAside",this.isAside)
            let html = document.documentElement
            html.setAttribute('data-theme', this.isAside ? 'dark' : 'light')
        }
    }
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