const state = {
  bodyColor: 'red'
}

const changeColor = () => ({ state }) => {
  state.bodyColor = 'blue'
}

export default { state, actions: { changeColor } }
