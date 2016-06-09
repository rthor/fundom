import test from 'ava'
import { createElement } from '../index'
import { jsdom } from 'jsdom'
global.document = jsdom('<body></body>')

test('returns a dom node of given type', assert => {
  const tags = ['div', 'p', 'input', 'span']
  for (const tag of tags) {
    const component = createElement(tag)()
    assert.is(component.tagName.toLowerCase(), tag)
  }
})

test('sets class name as specified by second param', assert => {
  const classTest = 'test foo'
  const props = { class: classTest }
  const div = createElement('div', props)()
  assert.is(div.className, classTest)
})
