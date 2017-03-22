import React from 'react'
import TodoListViewContainer from '../containers/TodoListViewContainer'
import './TodosView.css'

function TodosView({ todos }) {
  return (
    <section className="todos-view">
      <header>
        <div>Todos</div>
        <a className="add-todo" href="#">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </a>
      </header>
      <main>
        <TodoListViewContainer />
      </main>
      <footer>
        <input type="checkbox"/>
        <div className="mark-all-completed">
          Mark all as completed
        </div>
      </footer>
    </section>
  )
}

export default TodosView
