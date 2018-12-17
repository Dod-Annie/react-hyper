import React from 'react'
import { connect } from '../hyper'

class Header extends React.Component {
  render() {
    const { store } = this.props
    console.log('header render', store.actions.changeColor)
    return (
      <div style={{ color: store.state.headerColor }}>
        Header
        <button onClick={() => store.actions.changeColor()}>changeColor</button>
      </div>
    )
  }
}

// export default Header
export default connect('headerStore')(Header)
