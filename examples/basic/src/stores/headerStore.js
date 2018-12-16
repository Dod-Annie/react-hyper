const state = {
  headerColor: 'red'
}

const changeColor = () => ({ state }) => {
  state.headerColor = 'blue'
}

export default { state, actions: { changeColor } }
