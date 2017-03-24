import { connect } from 'react-redux'
import { createCommentRequest } from '../actions'
import { getSelectedTodoId } from '../reducers'
import CommentsView from '../components/CommentsView'

function mapStateToProps(state) {
  return {
    todoId: getSelectedTodoId(state)
  }
}

function mapActionsToProps(dispatch) {
  return {
    createComment(postId, comment) {
      dispatch(createCommentRequest(postId, comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CommentsView)
