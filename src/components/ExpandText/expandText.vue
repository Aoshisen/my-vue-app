<script lang="ts" setup>
import { ref } from "vue";
const expanded = ref(false);
function handleExpanded() {
  expanded.value = !expanded.value;
}
</script>
<template>
  <div class="container">
    <div class="text-container" :class="{ expanded }">
      <div class="see-more" @click="handleExpanded">
        <div v-if="expanded">See Less</div>
        <div v-else>See More</div>
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped src="./style.scss"></style>
