import { Directive } from "vue";

export const vFormat: Directive = {
  updated(el, binding) {
    const { value } = binding;
    let shouldFormat = isNumber(value);
    if (!shouldFormat) return;
    let formatValue = +el.innerHTML;
    formatValue = value.toFixed(2);
    el.innerText = formatValue;
  },
};

function isNumber(value: any) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
