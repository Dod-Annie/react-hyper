import React from 'react'
import { connect } from '../hyper'

class Header extends React.Component {
  render() {
    const { store } = this.props.context
    return <div style={{ color: store.color }}>Header</div>
  }
}

// export default Header
export default connect()(Header)
