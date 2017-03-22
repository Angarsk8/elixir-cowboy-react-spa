import React from 'react'
import './TodoItem.css'

function TodoItem({ title, completed }) {
  return (
    <li className="todo-item animated">
      <section className="left">
        <input type="checkbox" checked={completed}/>
        <div
          contentEditable={true}
          className={`title ${completed ? 'completed' : ''}`}
        >
          {title}
        </div>
      </section>
      <div className="delete-icon">
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
    </li>
  )
}

export default TodoItem
