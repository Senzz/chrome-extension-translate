import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Index  from './pages/Index'
export default class App extends Component {
  render() {
    const { store } = this.props;
    console.log('store', store);
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}
