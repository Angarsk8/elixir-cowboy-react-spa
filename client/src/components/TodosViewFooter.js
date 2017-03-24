import React from 'react'
import ActionCheckbox from './ActionCheckbox'
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
      <ActionCheckbox
        show={todosIds.length}
        checked={areAllCompleted}
        action={() => {
          if (areAllCompleted) {
            toggleAllTodos(todosIds, false)
          } else {
            toggleAllTodos(todosIds, true)
          }
        }}
      >
        {areAllCompleted ? 'Unmark all todos' : 'Mak all as completed'}
      </ActionCheckbox>
      <ActionCheckbox
        show={areAllCompleted && todosIds.length}
        action={() => { deleteAllTodos(todosIds) }}
      >
        Delete all
      </ActionCheckbox>
    </footer>
  )
}

export default TodosViewFooter
