import React from 'react'
import TodosViewContainer from '../containers/TodosViewContainer'
import TodoMetadataContainer from '../containers/TodoMetadataContainer'
import CommentsViewContainer from '../containers/CommentsViewContainer'
import './App.css'

function App() {
  return (
    <div id="app">
      <main>
        <TodosViewContainer />
      </main>
      <aside>
        <TodoMetadataContainer />
        <CommentsViewContainer />
      </aside>
    </div>
  )
}

export default App
