import test from 'ava'
import component from './component'
import { jsdom } from 'jsdom'

global.document = jsdom('<body></body>')
global.window = document.defaultView
global.navigator = window.navigator

test('should create an object with specified type', assert => {
  const types = ['div', 'p', 'input', 'span']
  for (const type of types) {
    const testComponent = component(type)
    assert.is(testComponent.type, type)
  }
})

test('should contain an HTMLElement', assert => {
  const { node } = component('div')
  assert.true(node instanceof window.HTMLElement)
})

test('should set class name as specified by prop', assert => {
  const classTest = 'test foo'
  const props = { class: classTest }
  const { node } = component('div', props)
  assert.is(node.className, classTest)
})

test('should return a function', assert => {
  const testComponent = component('div')
  assert.is(typeof testComponent, 'function')
})

test('should append child node created in curried function', assert => {
  const div = component('div')(component('p'))
  assert.is(div.node.children.length, 1)
})

test('should create a text node given no argument', assert => {
  const { node } = component()
  assert.true(node instanceof window.Text)
})

test('should set text', assert => {
  const p = component('p')('test')
  assert.is(p.text.innerText, 'test')
  assert.is(p.node.innerText, 'test')
})

test('should create a dom tree', assert => {
  const root = component('div', { class: 'wrapper' })(
    component('h1')('Hello World')
  )(
    component('p')('First Paragraph.')
  )
  assert.is(root.children.length, 2)
  assert.is(root.children[0].type, 'h1')
  assert.is(root.children[0].text.innerText, 'Hello World')
  assert.is(root.children[1].type, 'p')
  assert.is(root.children[1].text.innerText, 'First Paragraph.')
})
