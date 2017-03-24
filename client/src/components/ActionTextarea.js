import React, { Component } from 'react'

class ActionTextarea extends Component {
  state = {
    editable: false
  }

  _onClick() {
    if (!this.props.disabled) {
      this.setState({editable: true})
    }
  }

  _onBlur() {
    this.props.action(this.descriptionRef.value)
    this.setState({editable: false})
  }

  render() {
    const { disabled, placeholder, value } = this.props

    if (this.state.editable) {
      return (
        <textarea
          placeholder={placeholder}
          ref={node => this.descriptionRef = node}
          onBlur={this._onBlur.bind(this)}
        >
          {value}
        </textarea>
      )
    }

    return (
      <textarea
        placeholder={disabled ? 'Textarea disabled' : placeholder}
        value={value}
        onClick={this._onClick.bind(this)}
        disabled={disabled}
      >
      </textarea>
    )
  }
}

export default ActionTextarea
