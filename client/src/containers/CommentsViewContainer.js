import { connect } from 'react-redux'
import { createCommentRequest } from '../actions'
import {
  getSelectedTodoId,
  getCommentsFetchingStatus,
  getCommentsCreatingStatus
} from '../reducers'
import CommentsView from '../components/CommentsView'

function mapStateToProps(state) {
  return {
    todoId: getSelectedTodoId(state),
    isFetching: getCommentsFetchingStatus(state),
    isCreating: getCommentsCreatingStatus(state)
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
