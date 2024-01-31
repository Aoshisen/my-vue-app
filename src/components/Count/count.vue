<script lang="ts" setup>
import { useCounter } from "@/hooks";
import { ref } from "vue";
const init_value = ref(0);
const { count, doubleCount, increase, decrease } = useCounter(init_value);
const timer = setTimeout(() => {
  init_value.value = 3;
  clearTimeout(timer);
}, 2000);
</script>
<template>
  <button @click="() => increase()">this is add</button>
  {{ count }}
  {{ doubleCount }}
  <button @click="() => decrease()">this is sub</button>
  <div class="box"></div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
