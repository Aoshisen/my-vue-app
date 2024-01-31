<script setup lang="ts">
import { Count, Text } from "@/components";
import { getTodo } from "@/services";
import { useMouse, useAxios } from "@/hooks";
import { vFocus, vExpandClick, vEllipsis, vFormat } from "@/directives";
const { x, y } = useMouse();
const { data, error, loading } = useAxios("test");
</script>

<template>
  <Count />
  <div v-ellipsis>
    this is a
    loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog
    text
  </div>

  <div v-format="2263.556"></div>
  <Text :text="1111" />
  {{ x }}
  {{ y }}
  <!-- <button @click="handleGetTest">getTest</button> -->
  <div>
    test_length:{{ data }}<br />
    test_loading:{{ loading }} <br />
    test_error:{{ error }}
  </div>

  <!-- //v-expand-click 上右下左 区域扩展 -->
  <button @click="getTodo" v-expand-click="[20, 20, 20, 20]">getTodo</button>
  <input type="text" v-focus />
</template>
