const state = {
  headerColor: 'red'
}

const changeColor = () => ({ state, actions }) => {
  state.headerColor = 'blue'
  actions.testAction('test')
}

const testAction = test => ({ state }) => {
  console.log(state, 'testAction', test)
}

export default { state, actions: { changeColor, testAction } }
