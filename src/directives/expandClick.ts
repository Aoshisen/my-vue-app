import { generateDirectionValue } from "@/utils";
import { Directive } from "vue";

export const vExpandClick: Directive<HTMLElement, Array<number>> = {
  mounted(el, binding) {
    const DEFAULT = 10;
    const [top, right, bottom, left] = generateDirectionValue(
      binding.value || DEFAULT
    );
    const parentNode = el.parentNode as HTMLElement;
    const styleTag = document.createElement("style");
    const className = "expand_click_range";
    const styleText = getStyleText(className, [top, right, bottom, left]);
    styleTag.innerHTML = styleText;
    parentNode.insertBefore(styleTag, el);
    el.classList.add(className);
  },
};

function getStyleText(className: string, expand_values: Array<number>) {
  const [top, right, bottom, left] = expand_values;
  const result = `
	.${className} {
		    position:relative;
	}
	.${className}::before {
        content:"";
        position:absolute;
        top:-${top}px;
        bottom:-${bottom}px;
        right:-${right}px;
        left:-${left}px;
	  }
	`;
  return result;
}
