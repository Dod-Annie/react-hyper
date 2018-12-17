const state = {
  headerColor: 'red'
}

var getRandomColor = function() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const changeColor = () => ({ state, actions }) => {
  console.log('changeColor')
  state.headerColor = getRandomColor()
  // actions.testAction('test')
}

const testAction = test => ({ state }) => {
  console.log(state, 'testAction', test)
}

export default { state, actions: { changeColor, testAction } }
