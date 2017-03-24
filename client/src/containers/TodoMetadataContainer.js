import { connect } from 'react-redux'
import { updateTodoRequest } from '../actions'
import { getSelectedTodo } from '../reducers'
import TodoMetadata from '../components/TodoMetadata'

function mapStateToProps(state) {
  return {
    selectedTodo: getSelectedTodo(state)
  }
}

function mapActionsToProps(dispatch) {
  return {
    updateTodo(id, changes) {
      dispatch(updateTodoRequest(id, changes))
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(TodoMetadata)
