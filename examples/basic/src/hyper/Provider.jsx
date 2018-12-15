import React, { Component } from 'react'
import Context from './context'
import PropTypes from 'prop-types'

class Provider extends Component {
  constructor(props) {
    super(props)

    const { store } = props

    this.state = {
      store
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
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
