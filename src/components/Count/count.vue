<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/store";
const countStore = useCounterStore();
const { increment, decrement } = countStore;
const { doubleCount, count } = storeToRefs(countStore);
</script>
<template>
  <button @click="increment">this is add</button>
  {{ count }}
  {{ doubleCount }}
  <button @click="decrement">this is sub</button>
  <div class="box"></div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
