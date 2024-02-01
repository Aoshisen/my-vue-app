<script setup lang="ts">
import { Count, Text } from "@/components";
import { getTodo } from "@/services";
import { useMouse, useAxios } from "@/hooks";
import {
  vFocus,
  vExpandClick,
  vEllipsis,
  vFormat,
  vDefaultImage,
  vCopy,
} from "@/directives";
const { x, y } = useMouse();
const { data, error, loading } = useAxios("test");
</script>

<template>
  <Count />
  <div v-ellipsis v-copy>
    this is a
    loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog
    text
  </div>

  <div v-format>223.5578</div>
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
  <img
    src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
    alt=""
    v-default-image="
      'https://p3-passport.byteacctimg.com/img/user-avatar/ed8de6811706a68595555fec7dc85a13~50x50.awebp'
    "
  />
  <input type="text" v-focus />
</template>
