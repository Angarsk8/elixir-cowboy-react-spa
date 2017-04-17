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

function App() {
  return (
    <div id="app">
      <AppSidebar />
      <main>
        <TodosViewContainer />
      </main>
      <div className="screen"></div>
    </div>
  )
}

export default App
