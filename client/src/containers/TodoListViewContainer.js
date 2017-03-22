import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodosRequest } from '../actions'
import { getAllTodos } from '../reducers'
import TodoListView from '../components/TodoListView'

class TodoListViewContainer extends Component {
  componentWillMount() {
    const { todos } = this.props
    if (!todos.length) {
      this.props.fetchTodosRequest()
    }
  }

  render() {
    return (
      <TodoListView {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: getAllTodos(state)
  }
}

function mapActionsToProps(dispatch) {
  return {
    fetchTodosRequest() {
      dispatch(fetchTodosRequest())
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoListViewContainer)
