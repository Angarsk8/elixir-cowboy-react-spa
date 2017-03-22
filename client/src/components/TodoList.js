import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TodoItem from './TodoItem'
import './TodoList.css'

const allTodos =
  Array(30)
    .fill({})
    .map((_, i) => ({
      id: i,
      title: `Test ${i}`,
      completed: Math.floor(Math.random()*2)
    }))

function TodoList({ todos = allTodos }) {

  return (
    <ReactCSSTransitionGroup
      transitionName={{
        appear: "fadeIn",
        enter: "fadeIn",
        leave: "fadeOut"
      }}
      transitionAppear={true}
      transitionEnterTimeout={500}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={350}
      className="todo-list"
      component="ul"
    >
      {todos.map(todo => {
        return (
          <TodoItem key={todo.id} { ...todo } />
        )
      })}
    </ReactCSSTransitionGroup>
  )
}

export default TodoList
