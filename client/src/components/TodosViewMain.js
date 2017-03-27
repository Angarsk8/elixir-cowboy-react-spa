import React from 'react'
import Loading from './Loading'
import TodoListContainer from '../containers/TodoListContainer'
import './TodosViewMain.css'

function TodosViewMain({ isBusy }) {
  return (
    <div id="todos-view-main">
      {isBusy
        ? <Loading color="#5dcff3" />
        : <TodoListContainer />}
    </div>
  )
}

export default TodosViewMain
