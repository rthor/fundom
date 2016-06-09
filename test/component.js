import test from 'ava'
import component from '../lib/component'
import { jsdom } from 'jsdom'

global.document = jsdom('<body></body>')

test('returns a dom node of given type', assert => {
  const tags = ['div', 'p', 'input', 'span']
  for (const tag of tags) {
    assert.is(component(tag).tagName.toLowerCase(), tag)
  }
})
