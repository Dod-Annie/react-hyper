import React from 'react'
import Context from './context'

const connect = store => Component => {
  class Connect extends React.PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        store
      }
    }
    render() {
      return (
        <Context.Consumer>
          {context => <Component store={context[this.state.store]} />}
        </Context.Consumer>
      )
    }
  }
  return Connect
}

export default connect
