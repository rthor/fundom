import test from 'ava'
import createState from './state'

test('should return a mixin function', assert => {
  const component = {}
  const mixin = createState(component)
  assert.is(typeof mixin, 'function')
})

test('should create a state object on given component', assert => {
  const { state } = createState({})()
  assert.is(typeof state, 'object')
})

test('should inherit from initial state', assert => {
  const initialState = {
    foo: 'bar',
    n: 1337,
  }
  const component = {}
  const { state } = createState(component)(initialState)
  assert.deepEqual(state, initialState)
})

test('should not mutate initial state', assert => {
  const initialState = {
    foo: 'bar',
    n: 1337,
  }
  const component = {}
  const { state } = createState(component)(initialState)
  assert.not(state, initialState)
})

