import { connect } from 'react-redux'
import {
  createTodoRequest,
  toggleAllTodosRequest,
  deleteAllTodosRequest,
  setFilter
} from '../actions'
import {
  getAllTodosIds,
  getMarkedStatus,
  getFetchingStatus,
  getAllFilters,
  getFilter
} from '../reducers'
import TodosView from '../components/TodosView'

function mapStateToProps(state) {
  return {
    todosIds: getAllTodosIds(state),
    isFetching: getFetchingStatus(state),
    areAllCompleted: getMarkedStatus(state),
    availableFilters: getAllFilters(state),
    currentFilter: getFilter(state),
  }
}

function mapActionsToProps(dispatch) {
  return {
    createTodo(todo) {
      dispatch(createTodoRequest(todo))
    },
    toggleAllTodos(ids, completed) {
      dispatch(toggleAllTodosRequest(ids, completed))
    },
    deleteAllTodos(ids) {
      dispatch(deleteAllTodosRequest(ids))
    },
    filterTodos(filter) {
      dispatch(setFilter(filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodosView)
