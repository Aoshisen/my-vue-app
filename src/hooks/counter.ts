import { Ref, computed, ref, toValue } from "vue";
import {
  increase as increaseCount,
  decrease as decreaseCount,
  double,
} from "@/utils";

export function useCounter(initValue: number | Ref<number>) {
  const count = ref(initValue);
  const doubleCount = computed(() => double(toValue(count)));
  function increase(delta?: number) {
    count.value = increaseCount(toValue(count), delta);
  }
  function decrease(delta?: number) {
    count.value = decreaseCount(toValue(count), delta);
  }
  return {
    count,
    doubleCount,
    increase,
    decrease,
  };
}
