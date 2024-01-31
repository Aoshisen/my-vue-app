<script lang="ts" setup>
import { useCounter } from "@/hooks";
const { count, doubleCount, increase, decrease } = useCounter(0);
</script>
<template>
  <button @click="() => increase()">this is add</button>
  {{ count }}
  {{ doubleCount }}
  <button @click="() => decrease()">this is sub</button>
  <div class="box"></div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
