import React, { Component } from 'react'
import TodosViewContainer from '../containers/TodosViewContainer'
import TodoMetadataContainer from '../containers/TodoMetadataContainer'
import CommentsViewContainer from '../containers/CommentsViewContainer'
import './App.css'

class AppSidebar extends Component {
  state = {
    isOpen: false
  }

  _toggleSidebar() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    return (
      <aside
        className={this.state.isOpen ? 'show' : ''}
      >
        <span
          className="toggle-sidebar"
          onClick={this._toggleSidebar.bind(this)}
        >
          <i
            className="fa fa-arrow-left" 
            aria-hidden="true"
          ></i>
        </span>
        <TodoMetadataContainer />
        <CommentsViewContainer />
      </aside>
    )
  }
}

class App extends Component {
  state = {
    isOpen: false
  }

  _toggleSidebar() {

  }

  render() {
    const { isOpen } = this.state
    return (
      <div id="app">
        <main>
          <TodosViewContainer />
        </main>
        <AppSidebar />
      </div>
    )
  }
}

export default App
