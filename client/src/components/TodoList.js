import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TodoItem from './TodoItem'

function TodoList({ todos, ...rest }) {
  return (
    <ReactCSSTransitionGroup
      transitionName={{
        enter: "fadeInDown",
        leave: "zoomOut"
      }}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={300}
      component="ul"
    >
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            { ...todo }
            { ...rest }
          />
        )
      })}
    </ReactCSSTransitionGroup>
  )
}

export default TodoList
