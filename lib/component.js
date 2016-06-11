function createText() {
  const node = document.createTextNode('')

  function setText(newText = '') {
    node.innerText = newText
    return setText
  }

  setText.node = node

  return setText
}

function createElement(type, props = {}) {
  const node = Object.keys(props).reduce((element_, key) => {
    element_.setAttribute(key, props[key])
    return element_
  }, document.createElement(type))

  function element(child) {
    if (typeof child === 'string') {
      element.text = createText()(child).node
      node.innerText = element.text.innerText
    } else {
      node.appendChild(child.node)
    }
    element.children.push(child)
    return element
  }

  element.children = []
  element.node = node
  element.props = props
  element.type = type.toLowerCase()

  return element
}

export default function component(...args) {
  return args.length ? createElement(...args) : createText()
}
