import { Directive } from "vue";

export const vEllipsis: Directive = {
  mounted(el, binding) {
    const overLoadStyle = {
      width: binding.arg || 100 + "px",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      display: "inline-block",
    };
    Object.assign(el.style, overLoadStyle);
  },
};
