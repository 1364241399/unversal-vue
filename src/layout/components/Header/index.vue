<template>
  <div class="header">
    <div class="left">
      <hHamburger />
    </div>
    <div class="right">
      <el-dropdown>
        <div>
          退出
          <el-avatar :size="60" src="https://empty" @error="errorHandler">
            <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
          </el-avatar>
        </div>
        <el-dropdown-menu>退出</el-dropdown-menu>
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
</style>