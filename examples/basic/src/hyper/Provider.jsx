import React, { Component } from 'react'
import Context from './context'
import PropTypes from 'prop-types'

class Provider extends Component {
  constructor(props) {
    super(props)

    this.actions = newState => {
      this.setState({
        state: newState
      })
    }

    const { store } = props

    for (let key in store) {
      for (let action in store[key].actions) {
        console.log(store[key].actions[action], 'action')
      }
    }

    this.state = {
      store
    }
  }

  render() {
    console.log(this.state, 'provider State')
    return (
      <Context.Provider value={this.state.store}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  context: PropTypes.object,
  children: PropTypes.any
}

export default Provider
