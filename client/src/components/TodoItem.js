import React, { Component } from 'react'
import BounceLoader from 'halogen/BounceLoader'
import classNames from 'classnames'
import './TodoItem.css'

class TodoItem extends Component {
  static defaultProps = {
    selectedTodo: {}
  }

  state = {
    editable: false
  }

  _onClickCheckbox(e) {
    e.stopPropagation()
    const { id, completed, updateTodo, selectTodo } = this.props
    updateTodo(id, {completed: !completed})
    selectTodo(id)
  }

  _onClickTodo() {
    const { id, selectTodo } = this.props
    selectTodo(id)

    this.setState({editable: true})
    setTimeout(() => {
      this.titleRef.focus()
    }, 0)
  }

  _onBlurContentEditable() {
    const { id, updateTodo, title } = this.props
    const titleRef  = this.titleRef
    const titleText = titleRef.innerText.trim()

    if (titleText.length && titleText !== title) {
      updateTodo(id, {title: titleText})
      this.setState({editable: false})
      titleRef.innerText = titleText
    } else {
      titleRef.innerText = title
    }
  }

  _onKeyUpContentEditable(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      this.titleRef.blur()
    }
  }

  _onClickDelete(e) {
    e.stopPropagation()
    const { id, deleteTodo } = this.props
    deleteTodo(id)
  }

  render() {
    const { id, title, completed, updating, deleting, selectedTodo } = this.props
    const processing = updating || deleting
    const active = selectedTodo.id === id
    const todoClass = classNames('todo-item', 'animated', {
      active,
      updating,
      deleting
    })

    return (
      <li
        className={todoClass}
        onClick={this._onClickTodo.bind(this)}
      >
        <section className="left">
          {updating
            ? (
              <BounceLoader
                className="loading"
                color="#fac801"
                size="18px"
              />
            ): (
              <input
                type="checkbox"
                checked={completed}
                onClick={this._onClickCheckbox.bind(this)}
                disabled={processing}
              />
            )}
          <div
            contentEditable={this.state.editable && !processing}
            className={classNames('title', { completed })}
            onBlur={this._onBlurContentEditable.bind(this)}
            onKeyPress={this._onKeyUpContentEditable.bind(this)}
            ref={node => { this.titleRef = node }}
            spellCheck={false}
          >
            {title}
          </div>
        </section>
        {deleting
          ? (
            <BounceLoader
              className="loading"
              color="#fc635d"
              size="18px"
            />
          ): (
            <div
              className="delete-icon"
              onClick={this._onClickDelete.bind(this)}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
          )}
      </li>
    )
  }
}

export default TodoItem
