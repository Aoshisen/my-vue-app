import { ObjectDirective } from "vue";

export const vCopy: ObjectDirective<HTMLElement> = {
  async mounted(el, binding) {
    const { value, modifiers } = binding;
    const modifier = modifiers.dblclick ? "dblclick" : "click";
    el.addEventListener(modifier, copyElementInnerText);
    el.innerText = value;
    async function copyElementInnerText() {
      try {
        await copy(value);
        alert("Text copied to clipboard" + value);
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
