import React from 'react'
import './CommentsViewFooter.css'

function CommentsViewFooter({ todoId, isCreating, createComment }) {
  let commentRef
  return (
    <footer id="comments-view-footer">
      <form
        onSubmit={e => {
          e.preventDefault()
          const commentText = commentRef.value.trim()
          
          if (commentText.length) {
            createComment(todoId, {text: commentRef.value})
            commentRef.value = ''
          }
        }}
      >
        <input
          type="text"
          className={isCreating ? 'processing' : ''}
          placeholder={todoId ? 'Create a comment' : 'Input disabled'}
          ref={node => { commentRef = node }}
          disabled={!todoId}
        />
      </form>
    </footer>
  )
}

export default CommentsViewFooter
