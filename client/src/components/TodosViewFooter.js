import React from 'react'
import classNames from 'classnames'
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
          toggleAllTodos(todosIds, !areAllCompleted)
        }}
      >
        {areAllCompleted ? 'Unmark all todos' : 'Mak all as completed'}
      </ActionCheckbox>
      <div
        className={classNames('delete-all', {
          show: areAllCompleted && todosIds.length
        })}
        onClick={() => { deleteAllTodos(todosIds) }}
      >
        Delete All
      </div>
    </footer>
  )
}

export default TodosViewFooter
