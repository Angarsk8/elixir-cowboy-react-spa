import React from 'react'
import Loading from './Loading'
import TodoListContainer from '../containers/TodoListContainer'
import './TodosViewMain.css'

function TodosViewMain({ isFetching }) {
  return (
    <main id="todos-view-main">
      {isFetching ? <Loading color="#5dcff3" /> : null}
      <TodoListContainer />
    </main>
  )
}

export default TodosViewMain
