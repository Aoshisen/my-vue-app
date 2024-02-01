import { ObjectDirective } from "vue";

export const vFormat: ObjectDirective<HTMLElement> = {
  mounted(el) {
    const value = el.innerText;
    let formatValue = el.innerText;
    if (isNumber(value)) {
      el.innerText = parseFloat(formatValue).toFixed(2);
    }
  },
};

function isNumber(value: any): value is number {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
