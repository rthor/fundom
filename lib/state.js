function createState(component = {}) {
  return initialState => (
    Object.assign({}, component, {
      state: Object.assign({}, initialState),
    })
  )
}

export default createState
