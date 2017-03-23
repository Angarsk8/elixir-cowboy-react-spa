import React from 'react'
import FilterInput from './FilterInput'
import './TodosViewFooter.css'

function TodosViewFooter({
  todosIds,
  areAllCompleted,
  toggleAllTodos,
  deleteMarkedTodos,
  deleteAllTodos
}) {
  return (
    <footer id="todos-view-footer">
      <FilterInput
        show={todosIds.length}
        condition={areAllCompleted}
        onChange={() => {
          if (areAllCompleted) {
            toggleAllTodos(todosIds, false)
          } else {
            toggleAllTodos(todosIds, true)
          }
        }}
      >
        {areAllCompleted ? 'Unmark all todos' : 'Mak all as completed'}
      </FilterInput>
      <FilterInput
        show={areAllCompleted && todosIds.length}
        condition={false}
        onChange={() => { deleteAllTodos(todosIds) }}
      >
        Delete all
      </FilterInput>
    </footer>
  )
}

export default TodosViewFooter
