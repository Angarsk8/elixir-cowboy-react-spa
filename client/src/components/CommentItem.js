import React, { Component } from 'react'
import moment from 'moment'
import './CommentItem.css'

class CommentItem extends Component {
  state = {
    editable: false
  }

  _onClickComment() {
    this.setState({editable: true})
    setTimeout(() => {
      this.textRef.focus()
    }, 0)
  }

  _onBlurContentEditable() {
    const { id, todoId, updateComment, text } = this.props
    const textRef  = this.textRef
    const titleText = textRef.innerText.trim()

    if (titleText.length) {
      updateComment(todoId, id, {text: titleText})
      this.setState({editable: false})
      textRef.innerText = titleText
    } else {
      textRef.innerText = text
    }
  }

  _onKeyUpContentEditable(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      this.textRef.blur()
    }
  }

  _onClickDelete(e) {
    const { id, todoId, deleteComment } = this.props
    e.stopPropagation()
    deleteComment(todoId, id)
  }

  render() {
    const updatedAt = new Date(this.props.updatedAt)
    const formattedDate = moment(updatedAt).fromNow()
    return (
      <li
        className="comment-item animated"
        onClick={this._onClickComment.bind(this)}
      >
        <section className="left">
          <div
            contentEditable={this.state.editable}
            className="text"
            onBlur={this._onBlurContentEditable.bind(this)}
            onKeyPress={this._onKeyUpContentEditable.bind(this)}
            ref={node => { this.textRef = node }}
            spellCheck={false}
          >
            {this.props.text}
          </div>
          <div className="time-ago">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            {formattedDate}
          </div>
        </section>
        <div
          className="delete-icon"
          onClick={this._onClickDelete.bind(this)}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </li>
    )
  }
}

export default CommentItem
