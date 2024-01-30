import { Ref, ref, toValue, watchEffect } from "vue";
import axios from "@/services/base";

export function useAxios(url: Ref<string> | string) {
  const data = ref(null);
  const error = ref("");
  const loading = ref(false);
  async function fetchData() {
    loading.value = true;
    const result = await axios.get(toValue(url));
    loading.value = false;
    if (result.status === 200) {
      data.value = result.data;
    } else {
      error.value = result.statusText;
    }
  }
  watchEffect(() => {
    fetchData();
  });
  return { data, error, loading };
}
