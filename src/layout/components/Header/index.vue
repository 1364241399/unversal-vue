<template>
  <div class="header">
    <div class="left">
      <hHamburger />
    </div>
    <div class="right">
      <el-dropdown trigger="hover">
        <div class="s">
          <el-avatar :size="40" src="http://localhost:81/static/img/profile.473f5971.jpg" />
        </div>
        <template #dropdown>   
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>布局设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import hHamburger from '@/components/Hamburger'
export default {
  name: 'LayoutHeader',
  components: {
    hHamburger
  },
  data() {
    return {}
  }
}

</script>
<style  lang="scss" scoped>
.header {
  display: flex;
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.left {
  display: flex;
  flex-direction: row;
}
.el-dropdown:hover{
  cursor: pointer;
}

</style>