<template>
    <div class="common-layout">
        <el-container class="box">
            <el-aside  :width="asideWidth" :class="{wait: isAside,narrow: !isAside}">Aside</el-aside>
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
            isAside: null,
            asideWidth: 200 + 'px'
        }
    },
    created() {
        console.info("sdf")
    },
    methods:{
        clickTest(){
            console.log(this.isAside)
            this.isAside = !this.isAside;
            console.info(this.$refs)
            if(this.isAside){
                this.asideWidth = 100+'px';
            }else{
                this.asideWidth = 200+'px';
            }
        }
    }
}

</script>
<style  lang="scss" scoped>
.common-layout {
    width: 100%;
    height: 100%;
}

.box {

    height: 100%;
}

.el-aside {
    height: 100%;
    background-color: antiquewhite;
}
.wait{
    animation-name: wait;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

}

.narrow{
    animation-name: narrow;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}

@keyframes wait{
    from {width : 200px}
    to {width: 50px;}
}
@keyframes narrow{
    from {width: 50px;}
    to {width: 200px;}
}
.el-header {
    height: 50px;
    background-color: aliceblue;
}

.el-main {
    height: calc(100% - 50px);
    background-color: aqua;
}</style>