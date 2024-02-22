import debounce from './debounce'
import throttle from './throttle'
import type { App, Directive } from 'vue'

type DirectiveListType = {
  [key: string]: Directive
}

const directivesList: DirectiveListType = {
  debounce,
  throttle
}

const directivePlugin = {
  install: (app: App<Element>) => {
    Object.keys(directivesList).forEach(key => {
      app.directive(key, directivesList[key])
    })
  }
}

export default directivePlugin