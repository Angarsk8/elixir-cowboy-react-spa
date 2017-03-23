import React from 'react'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './TodosViewHeader.css'

function TodosViewHeader({ currentFilter, createTodo, filterTodos }) {
  return (
    <header id="todos-view-header">
      <section className="left">
        <h3>Todos</h3>
        <Select
          name="form-field-name"
          className="filters"
          value={currentFilter}
          clearable={false}
          searchable={false}
          options={[
            { value: 'ALL', label: 'All' },
            { value: 'COMPLETED', label: 'Completed' },
            { value: 'ACTIVE', label: 'Active' },
          ]}
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
