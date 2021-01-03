import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ComponentA from './components/ComponentA'
import store from './store'
export default class App extends Component {
  render() {
    return (
      <Provider store={store}> 
        <ComponentA /> 
      </Provider>
    )
  }
}
