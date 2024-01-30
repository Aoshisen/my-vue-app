import { onMounted, onUnmounted } from "vue";

export function useEventListener(
  target: any,
  event: string,
  callback: (e: MouseEvent) => void
) {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onUnmounted(() => {
    target.removeEventListener(event, callback);
  });
}
