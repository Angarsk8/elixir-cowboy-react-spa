import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchTodosRequest,
  updateTodoRequest,
  deleteTodoRequest,
  selectTodo
} from '../actions'
import { getAllTodos, getSelectedTodo } from '../reducers'
import TodoList from '../components/TodoList'

class TodoListContainer extends Component {
  componentWillMount() {
    const { todos, fetchTodos } = this.props
    if (!todos.length) {
      fetchTodos()
    }
  }

  render() {
    return (
      <TodoList {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: getAllTodos(state),
    selectedTodo: getSelectedTodo(state)
  }
}

function mapActionsToProps(dispatch) {
  return {
    fetchTodos() {
      dispatch(fetchTodosRequest())
    },
    updateTodo(id, changes) {
      dispatch(updateTodoRequest(id, changes))
    },
    deleteTodo(id) {
      dispatch(deleteTodoRequest(id))
    },
    selectTodo(id) {
      dispatch(selectTodo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoListContainer)
