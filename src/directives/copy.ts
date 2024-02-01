import { ObjectDirective } from "vue";

export const vCopy: ObjectDirective<HTMLElement> = {
  async mounted(el, binding) {
    const modifier = binding.modifiers.dblclick ? "dblclick" : "click";
    el.addEventListener(modifier, copyElementInnerText);
    async function copyElementInnerText() {
      const text = el.innerText;
      try {
        await copy(text);
        alert("Text copied to clipboard" + text);
      } catch (error) {
        alert("Error in copying text to clipboard" + error);
      }
    }
  },
};

function copy(text: string) {
  return new Promise((resolve, reject) => {
    navigator.clipboard.writeText(text).then(resolve).catch(reject);
  });
}
