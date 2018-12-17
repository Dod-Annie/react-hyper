import React from 'react'
import { connect } from '../hyper'

class Footer extends React.Component {
  render() {
    const {
      store: {
        state: { text, footerColor },
        actions: { asyncPrint, changeColor }
      }
    } = this.props
    console.log('footer render', changeColor)
    return (
      <div style={{ color: footerColor }}>
        Footer
        <button
          onClick={() => {
            changeColor()
          }}
        >
          changeColor
        </button>
        <button onClick={() => asyncPrint(1000, 'ss')}>async click</button>
        <span>{text}</span>
      </div>
    )
  }
}

export default connect('footerStore')(Footer)
