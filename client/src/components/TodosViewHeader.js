import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './TodosViewHeader.css'

function TodosViewHeader({ currentFilter, filters, createTodo, filterTodos }) {
  return (
    <header id="todos-view-header">
      <section className="left">
        <h4>TODOS</h4>
        <Select
          name="form-field-name"
          className="filters"
          value={currentFilter}
          clearable={false}
          searchable={false}
          options={filters.map(f => {
            return {
              value: f,
              label: f[0] + f.slice(1).toLowerCase()
            }
          })}
          onChange={option => { filterTodos(option.value) }}
        />
      </section>
      <a
        className="add-todo"
        href="#"
        onClick={e => {
          e.preventDefault()
          createTodo({title: "New Todo"})
        }}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </a>
    </header>
  )
}

export default TodosViewHeader
