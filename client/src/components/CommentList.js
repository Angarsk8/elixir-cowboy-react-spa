import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CommentItem from './CommentItem'
import './CommentList.css'

function CommentList({ comments, ...rest }) {
  return (
    <ul className="comment-list">
      {comments.map(comment => {
        return (
          <CommentItem
            key={comment.id}
            { ...comment }
            { ...rest }
          />
        )
      })}
    </ul>
  )
}

export default CommentList
