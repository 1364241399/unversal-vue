<template>
  <div>
    
    {{ a }}
  </div>
</template>

<script setup>
import {ref} from 'vue'
const a = ref(0)
a.value = 1

</script>
<style  lang="scss" scoped>
</style>