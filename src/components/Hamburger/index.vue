<template>
  <div class="hamburger">
    <div class="icon" @click="spark">
      <svg t="1686554967484" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="1543" width="30" height="30">
        <path
          d="M40.978062 880.633227A40.978062 40.978062 0 0 0 0 921.611289a40.978062 40.978062 0 0 0 40.978062 40.978062h942.043876a40.978062 40.978062 0 0 0 40.978062-40.978062 40.978062 40.978062 0 0 0-40.978062-40.978062H40.978062z m389.122258-272.622644c-22.633888 0-40.978062 18.344174-40.978062 40.978062s18.344174 40.978062 40.978062 40.978062h552.978062c22.633888 0 40.978062-18.344174 40.978062-40.978062s-18.344174-40.978062-40.978062-40.978062H430.10032zM19.642377 345.54779C12.078933 339.677654 1.185316 344.92691 1.185316 354.352993v315.124683c0 9.482527 11.006504 14.731783 18.457061 8.805204l200.036159-157.53412a11.192768 11.192768 0 0 0 0-17.666851L19.642377 345.54779z m410.457943-11.458053c-22.633888 0-40.978062 18.344174-40.978062 40.978061s18.344174 40.978062 40.978062 40.978062h552.978062c22.633888 0 40.978062-18.344174 40.978062-40.978062s-18.344174-40.978062-40.978062-40.978061H430.10032zM40.978062 61.467093C18.344174 61.467093 0 79.811267 0 102.388711s18.344174 40.978062 40.978062 40.978062h942.043876c22.633888 0 40.978062-18.344174 40.978062-40.978062s-18.344174-40.978062-40.978062-40.978062H40.978062z"
          p-id="1544"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import store from '@/store'
import { watch, ref, computed} from 'vue';
const isAside = computed(() => store.setting.isAside);
const angle = ref(isAside.value ? 180 + 'deg' : 0 + 'deg');

watch(() => isAside.value, (newValue) => {
  angle.value = newValue ? 180 + 'deg' : 0 + 'deg'
})
function spark() {
  store.setting.isAside = !isAside.value
  localStorage.setItem("localAside", isAside.value)
}

</script>

<style  lang="scss" scoped>
@property --x {
  syntax: '<length>';
  initial-value: 0px;
  inherits: false;
}

@property --y {
  syntax: '<length>';
  initial-value: 0px;
  inherits: false;
}

.hamburger {
  display: flex;
  justify-content: center;
  align-items: center;

}

.ball {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;

  transform: translate(var(--x), var(--y));
  animation: x 2s, y 1s;
  animation-timing-function: cubic-bezier(0.5, -50, 0.5, 50);
  animation-iteration-count: infinite;
}

@keyframes x {
  to {
    --x: 10px;
  }
}

@keyframes y {
  to {
    --y: 1px;
  }
}

.icon {
  svg {
    --r: v-bind(angle);
    transform-origin: center;
    transform: rotate(var(--r));
    transition: 1s;
  }

  svg:hover {
    cursor: pointer;
  }
}
</style>