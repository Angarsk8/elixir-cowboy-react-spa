import { connect } from 'react-redux'
import {
  createTodoRequest,
  toggleAllTodosRequest,
  deleteAllTodosRequest,
  setFilter
} from '../actions'
import {
  getInitializingStatus,
  getFetchingStatus,
  getAllTodosIds,
  getMarkedStatus,
  getCreatingStatus,
  getAllFilters,
  getFilter
} from '../reducers'
import TodosView from '../components/TodosView'

function mapStateToProps(state) {
  const isBusy =
    getInitializingStatus(state) || getFetchingStatus(state)

  return {
    isBusy,
    todosIds: getAllTodosIds(state),
    isCreating: getCreatingStatus(state),
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
