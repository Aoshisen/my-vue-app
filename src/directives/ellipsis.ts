import { ObjectDirective } from "vue";

export const vEllipsis: ObjectDirective<HTMLDivElement> = {
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
