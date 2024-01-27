import { defineStore } from "pinia";
import { computed, ref } from "vue";
//做一个简单的演示,,纯粹的逻辑抽离
import { increase, decrease, double } from "@/utils";

export const useCounterStore = defineStore("counter", () => {
  const count = ref<number>(0);
  const doubleCount = computed(() => double(count.value));
  function increaseCount() {
    count.value = increase(count.value);
  }
  function decreaseCount() {
    count.value = decrease(count.value);
  }
  return {
    count,
    doubleCount,
    increment: increaseCount,
    decrement: decreaseCount,
  };
});
