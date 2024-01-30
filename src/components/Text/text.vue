<script setup lang="ts">
import { toRefs } from "vue";
interface TextProps {
  text: number;
}
const props = defineProps<TextProps>();
const { text } = toRefs(props);
</script>

<template>
  <div class="red-text">{{ text }}</div>
  <div class="blue-text">{{ text }}</div>
</template>

<style lang="scss" src="./style.scss" scoped></style>
