/**
 * 防抖指令
 */
import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
	__handleClick__: () => any;
}

const debounce: Directive = {
  mounted(el: ElType, binding: DirectiveBinding){
    if ( typeof binding.value !== 'function' ) {
			throw "callback must be a function"
		}

    let timer: ReturnType<typeof setTimeout> | null = null
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__)
  }
}

export default debounce