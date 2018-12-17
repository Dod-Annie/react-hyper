import React from 'react'
import Context from './context'
import PropTypes from 'prop-types'

class Provider extends React.Component {
  constructor(props) {
    super(props)
    const { initStore } = props

    this.state = {
      store: Object.assign({}, initStore)
    }
  }

  componentDidMount() {
    const { initStore } = this.props
    const update = store => this.setState({ store })
    for (const storeName in initStore) {
      let store = initStore[storeName]
      store.initActions = Object.assign({}, store.actions)
      store.actions = {}
      for (const actionName in store.initActions) {
        store.actions[actionName] = function(data) {
          const oldState = Object.assign({}, store.state)
          store.initActions[actionName](data)(store)
          if (oldState !== store.state) {
            update(initStore)
          }
        }
      }
    }
  }

  render() {
    return (
      <Context.Provider value={this.state.store}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

Provider.propTypes = {
  initStore: PropTypes.object.isRequired,
  context: PropTypes.object,
  children: PropTypes.any
}

export default Provider
