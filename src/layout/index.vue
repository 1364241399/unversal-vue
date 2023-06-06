<template>
    <div>
        <div class="common-layout">
            <el-container>
                
                <el-aside width="auto">Aside</el-aside>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>
                        Main0
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {}
    },
    created(){
        console.info("sdf")
    }
}

</script>
<style  lang="scss" scoped>
.common-layout {
 width: 100%;
 height: 100%;
}
.el-container {
    width: 100%;
    height: 100%;
}
</style>