import { ObjectDirective } from "vue";

export const vFocus: ObjectDirective<HTMLInputElement> = {
  mounted(el) {
    el.focus();
  },
};
