import React from 'react'
import Context from './context'

const connect = () => Component => {
  class Connect extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {context => <Component context={context} />}
        </Context.Consumer>
      )
    }
  }
  return Connect
}

export default connect
