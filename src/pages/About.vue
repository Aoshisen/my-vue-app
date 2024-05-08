<script setup lang="ts">
import { reactive, toRefs, watch } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
const { params } = toRefs(router);
const activeList = reactive([0, 0, 0]);
const variableTypes = reactive([
  {
    name: "时间",
    value: 1,
    active: false,
  },
  {
    name: "日订单均值",
    value: 2,
    active: false,
  },
  {
    name: "插件金额占比",
    value: 3,
    active: false,
  },
]);
watch(activeList, () => {
  variableTypes.forEach((type) => {
    type.active = activeList.includes(type.value);
  });
});
</script>

<template>
  this is about {{ params.id }}
  <select v-for="item in 3" v-model="activeList[item - 1]">
    <option
      v-for="option in variableTypes"
      :value="option.value"
      :disabled="option.active"
    >
      {{ option.name }}
    </option>
  </select>
</template>
