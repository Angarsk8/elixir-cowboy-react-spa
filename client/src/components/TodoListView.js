import React from 'react'
import Loading from './Loading'
import TodoList from './TodoList'

function TodoListView({ todos }) {
  if (!todos.length) {
    return (
      <Loading color="#5dcff3" />
    )
  }

  return (
    <TodoList todos={todos} />
  )
}

export default TodoListView
