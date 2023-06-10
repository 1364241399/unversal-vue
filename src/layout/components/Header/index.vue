<template>
  <div class="header">
    <hHamburger/>
    33
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
  .header{
    display: flex;
  }
</style>