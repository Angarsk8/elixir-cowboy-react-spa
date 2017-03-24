import React from 'react'
import Loading from './Loading'
import TodoListContainer from '../containers/TodoListContainer'
import './TodosViewMain.css'

function TodosViewMain({ isFetching }) {
  return (
    <div id="todos-view-main">
      {isFetching ? <Loading color="#5dcff3" /> : null}
      <TodoListContainer />
    </div>
  )
}

export default TodosViewMain
