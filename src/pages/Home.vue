<script setup lang="ts">
import { Count, Text } from "@/components";
import { getTodo } from "@/services";
import { useMouse } from "@/hooks";
import { useAxios } from "@/hooks/request";
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

  <button @click="getTodo">getTodo</button>
</template>
