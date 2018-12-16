import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { connect } from '../hyper'

class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
        <button>click</button>
      </div>
    )
  }
}

export default connect()(Index)
