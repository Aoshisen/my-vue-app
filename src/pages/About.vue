<script setup lang="ts">
import { toRefs } from "vue";
import { useRoute } from "vue-router";
const router = useRoute();
const { params } = toRefs(router);
</script>

<template>this is about {{ params.id }}</template>
