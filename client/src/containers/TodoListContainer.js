import { connect } from 'react-redux'
import {
  updateTodoRequest,
  deleteTodoRequest,
  selectTodo
} from '../actions'
import { getAllTodos, getSelectedTodo } from '../reducers'
import TodoList from '../components/TodoList'

function mapStateToProps(state) {
  return {
    todos: getAllTodos(state),
    selectedTodo: getSelectedTodo(state)
  }
}

function mapActionsToProps(dispatch) {
  return {
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
)(TodoList)
