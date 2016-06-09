import { child } from './child'

export function createElement(tag, props = {}) {
  const element = Object.keys(props).reduce((element_, key) => {
    element_.setAttribute(key, props[key])
    return element_
  }, document.createElement(tag))
  return child(element)
}
