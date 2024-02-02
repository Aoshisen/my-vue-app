import { ObjectDirective } from "vue";

export const vFormat: ObjectDirective<HTMLElement> = {
  mounted(el, binding) {
    const { value } = binding;
    if (isNumber(value)) {
      el.innerText = value.toFixed(2);
    }
  },
};

//Type assertion syntax.
function isNumber(value: any): value is number {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
