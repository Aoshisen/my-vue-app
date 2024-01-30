import { ref } from "vue";
import { useEventListener } from "./eventListener";

export function useMouse() {
  const x = ref(0);
  const y = ref(0);
  function update(e: MouseEvent) {
    x.value = e.clientX;
    y.value = e.clientY;
  }
  useEventListener(window, "mousemove", update);
  return {
    x,
    y,
  };
}
