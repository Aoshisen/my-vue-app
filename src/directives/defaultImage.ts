import { Directive } from "vue";
export const vDefaultImage: Directive<HTMLImageElement, string> = {
  async beforeMount(el, binding) {
    try {
      await checkImage(el.src);
    } catch (error) {
      // image load fail use binding.value instead of el.src
      el.src = binding.value;
    }
  },
};

async function checkImage(src: string) {
  if (!src) {
    throw new Error("image src not specified");
  }
  const img = new Image();
  img.src = src;
  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(true);
    };
    img.onerror = () => {
      reject(false);
    };
  });
}
