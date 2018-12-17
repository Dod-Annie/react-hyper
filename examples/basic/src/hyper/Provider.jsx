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
        console.log(storeName, store, actionName)
        store.actions[actionName] = async function(...data) {
          const oldState = Object.assign({}, store.state)
          await store.initActions[actionName](...data)(store)
          if (oldState !== store.state) {
            console.log('provider render')
            update(Object.assign({}, initStore))
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
