const state = {
  footerColor: 'red'
}

const changeColor = () => ({ state }) => {
  state.footerColor = 'blue'
}

export default { state, actions: { changeColor } }
