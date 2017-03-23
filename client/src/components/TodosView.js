import React from 'react'
import TodosViewHeader from './TodosViewHeader'
import TodosViewFooter from './TodosViewFooter'
import TodosViewMain from './TodosViewMain'
import './TodosView.css'

function TodosView({
  isFetching,
  currentFilter,
  createTodo,
  filterTodos,
  ...rest
}) {
  return (
    <section className="todos-view">
      <TodosViewHeader
        createTodo={createTodo}
        currentFilter={currentFilter}
        filterTodos={filterTodos}
      />
      <TodosViewMain isFetching={isFetching} />
      <TodosViewFooter { ...rest } />
    </section>
  )
}

export default TodosView
