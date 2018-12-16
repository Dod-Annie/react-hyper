import React from 'react'
import { connect } from '../hyper'

class Header extends React.Component {
  render() {
    console.log('header render', this.props)
    const { store } = this.props
    return <div style={{ color: store.state.headerColor }}>Header</div>
  }
}

// export default Header
export default connect('headerStore')(Header)
