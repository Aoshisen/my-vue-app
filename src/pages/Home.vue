<script setup lang="ts">
import { Count } from "@/components";
import { getTest,getTodo } from "@/services";
</script>

<template>
  this is home
  <Count />

  <button @click="getTest"></button>
</template>
