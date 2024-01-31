import { Directive } from "vue";

export const vExpandClick: Directive = {
  mounted(el, binding) {
    const DEFAULT = -10; // 默认向外扩展10px
    const [top, right, bottom, left] = binding.value.length
      ? binding.value
      : [];
    const parentNode = el.parentNode as HTMLElement;
    const styleTag = document.createElement("style");
    const className = "expand_click_range";
    const styleText = `
	.${className} {
		position:relative;
	}
	.${className}::before {
        content:"";
		position:absolute;
		top:-${top || DEFAULT}px;
		bottom:-${bottom || DEFAULT}px;
		right:-${right || DEFAULT}px;
		left:-${left || DEFAULT}px;
	}
	`;
    styleTag.innerHTML = styleText;
    parentNode.insertBefore(styleTag, el);
    addClass(el, className);
  },
};

function addClass(el: HTMLElement, className: string) {
  el.className = el.className + " " + className;
}
