const state = {
  footerColor: 'red'
}

const setState = obj => ({ state }) => {
  state = {
    state,
    ...obj
  }
}

var getRandomColor = function() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

const changeColor = () => ({ state }) => {
  console.log('changeColor')
  state.footerColor = getRandomColor()
}

function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

const asyncPrint = (ms, value) => async ({ state }) => {
  console.log(ms, state, value, 'front')
  await timeout(ms)
  console.log(ms, state, value)
  state.text = value
}

export default { state, actions: { changeColor, asyncPrint, setState } }
