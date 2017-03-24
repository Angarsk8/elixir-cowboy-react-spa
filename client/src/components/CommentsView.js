import React from 'react'
import CommentListContainer from '../containers/CommentListContainer'
import CommentsViewFooter from './CommentsViewFooter'
import './CommentsView.css'

function CommentsView({ todoId, createComment }) {
  return (
    <section className="comments-view">
      <div className="main">
        <CommentListContainer todoId={todoId}/>
      </div>
      <CommentsViewFooter
        todoId={todoId}
        createComment={createComment}
      />
    </section>
  )
}

export default CommentsView
