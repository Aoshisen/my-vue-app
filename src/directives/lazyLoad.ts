//image lazyLoad
// if this custom directive with v-default-image in same element,  ensure this directive comes after  v-default-image
import { DirectiveBinding, ObjectDirective } from "vue";

export const vLazyLoad: ObjectDirective<HTMLImageElement> = {
  beforeMount: beforeAction,
  mounted: afterAction,
  beforeUpdate: beforeAction,
  updated: afterAction,
  unmounted: unMountAction,
};

let observer: IntersectionObserver;

function onElementInViewport(
  el: HTMLElement,
  callback: (observer: IntersectionObserver) => void
) {
  observer = new IntersectionObserver((entries) => {
    //all entries in viewport
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(observer);
      }
    });
  });
  // observe the html el
  observer.observe(el);
}

function beforeAction(el: HTMLElement, binding: DirectiveBinding) {
  if (!binding.value) {
    console.log("lazyLoad must have a specified binding value");
    return;
  }
  el.dataset.src = binding.value;
}

function afterAction(el: HTMLElement) {
  const dataSetSrc = el.dataset.src as string;
  onElementInViewport(el, (observer) => {
    el.setAttribute("src", dataSetSrc);
    observer.disconnect();
  });
}

function unMountAction() {
  if (observer) {
    observer.disconnect();
  }
}
