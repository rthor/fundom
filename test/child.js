import test from 'ava'
import { child } from '../index'
import { jsdom } from 'jsdom'
global.document = jsdom('<body></body>')

test('if no content provided, return parent', assert => {
  const parent = document.createElement('div')
  assert.is(child(parent)(), parent)
})
