import React from 'react'

export default class extends React.Component {
  componentDidMount() {
    console.log('compoenntDidMount');
    console.log(chrome.tabs.onCreated)
  }
  render() {
    return (
      <div>
        111222
      </div>
    )
  }
}