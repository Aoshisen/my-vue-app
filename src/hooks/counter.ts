import { computed, ref } from "vue";
import {
  increase as increaseCount,
  decrease as decreaseCount,
  double as doubleCount,
} from "@/utils";

export function useCounter(initValue: number) {
  const count = ref(initValue);
  const double = computed(() => doubleCount(count.value));
  function increase(delta?: number) {
    count.value = increaseCount(count.value, delta);
  }
  function decrease(delta?: number) {
    count.value = decreaseCount(count.value, delta);
  }
  return {
    count,
    double,
    increase,
    decrease,
  };
}
