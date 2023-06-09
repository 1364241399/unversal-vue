<template>
    <div class="common-layout">
        <el-container class="box">
            <el-aside  :class="{wait: isAside,narrow: !isAside}">Aside</el-aside>
            <el-container>
                <el-header>Header
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
export default {
    name: 'DefaultLayout',
    data() {
        return {
            isAside: false,
            asideWidth: 200 + 'px',
            fromWidth: 200 + 'px',
            toWidth: 200 + 'px',
        }
    },
    created() {
        console.info("sdf")
        let localWidth = localStorage.getItem("asideWidth");
        if (localWidth) {
            this.asideWidth = localWidth
        }

    },
    methods: {
        clickTest() {
            console.log(this.isAside)
            this.isAside = !this.isAside;

            if (this.isAside) {
                this.asideWidth = 100 + 'px'
                this.fromWidth = 200 + 'px'
                this.toWidth = 100 + 'px'
            } else {
                this.asideWidth = 200 + 'px'
                this.fromWidth = 100 + 'px'
                this.toWidth = 200 + 'px'
            }
            console.log(this.fromWidth)
            console.log(this.toWidth)
            let html = document.documentElement
            html.setAttribute('data-theme', this.isAside ? 'dark' : 'light')
        }
    }
}

</script>
<style  lang="scss" scoped >
:root{
    --from-width:v-bind(fromWidth)
    --to-width:v-bind(toWidth)
}
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

.s {
    animation-name: switch;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

}
.narrow{
    animation-name: switchto;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}


@keyframes switch {
    from {
        width: var(--from-width);
    }

    to {
        width: var(--to-width);
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
@media (min-width: 1000px) {
    .wait {
        --from-width: 200px;
        --to-width: 50px
    }
}




.el-header {
    height: 50px;
    background-color: aliceblue;
}

.el-main {
    height: calc(100% - 50px);
    background-color: aqua;
}</style>