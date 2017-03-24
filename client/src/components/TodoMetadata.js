import React from 'react'
import moment from 'moment'
import ActionTextarea from './ActionTextarea'
import './TodoMetadata.css'

function DateLabel({ show = false, label, date, format }) {
  if (!show) {
    return (
      <label>Date'll be displayed here</label>
    )
  }

  const parsedDate = new Date(date)
  const formattedDate = moment(parsedDate).format(format)

  return (
    <div>
      <label>{label}:</label> {formattedDate}
    </div>
  )
}

function TodoMetadata({ selectedTodo = {}, updateTodo }) {
  const { id, description, insertedAt } = selectedTodo
  let descriptionRef
  return (
    <header id="todo-metadata">
      <div className="todo-date">
        <DateLabel
          show={id}
          label="Created"
          date={insertedAt}
          format="MMM Do, h:mm a"
        />
      </div>
      <ActionTextarea
        placeholder="Todo description"
        value={description}
        action={text => {
          updateTodo(id, {
            description: text
          })
        }}
        disabled={!id}
      />
    </header>
  )
}

export default TodoMetadata
