import React from 'react'
import TodosViewHeader from './TodosViewHeader'
import TodosViewFooter from './TodosViewFooter'
import TodosViewMain from './TodosViewMain'
import './TodosView.css'

function TodosView({
  isBusy,
  isCreating,
  currentFilter,
  availableFilters,
  createTodo,
  filterTodos,
  ...rest
}) {
  return (
    <div className="todos-view">
      <TodosViewHeader
        isCreating={isCreating}
        createTodo={createTodo}
        currentFilter={currentFilter}
        filters={availableFilters}
        filterTodos={filterTodos}
      />
      <TodosViewMain isBusy={isBusy} />
      <TodosViewFooter
        isBusy={isBusy}
        { ...rest }
      />
    </div>
  )
}

export default TodosView
