<script setup lang="ts">
import { Count, Text } from "@/components";
import { getTodo } from "@/services";
import { useMouse, useAxios } from "@/hooks";
import { vFocus, vExpandClick } from "@/directives";
const { x, y } = useMouse();
const { data, error, loading } = useAxios("test");
</script>

<template>
  <Count />
  <Text :text="1111" />
  {{ x }}
  {{ y }}
  <!-- <button @click="handleGetTest">getTest</button> -->
  test_length:{{ data }} <br />
  test_loading:{{ loading }} <br />
  test_error:{{ error }}

  <button @click="getTodo" v-expand-click="[10, 20, 30, 40]">getTodo</button>
  <input type="text" v-focus />
</template>
