import React from 'react'
import CommentListContainer from '../containers/CommentListContainer'
import CommentsViewFooter from './CommentsViewFooter'
import Loading from './Loading'
import './CommentsView.css'

function CommentsView({ todoId, isFetching, isCreating, createComment }) {
  return (
    <section className="comments-view">
      <div className="main">
        {isFetching
          ? <Loading color="#5dcff3" margin="18px"/>
          : <CommentListContainer todoId={todoId}/>}
      </div>
      <CommentsViewFooter
        todoId={todoId}
        isCreating={isCreating}
        createComment={createComment}
      />
    </section>
  )
}

export default CommentsView
