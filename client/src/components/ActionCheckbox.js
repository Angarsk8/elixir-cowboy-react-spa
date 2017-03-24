import React from 'react'
import './ActionCheckbox.css'

function ActionCheckbox({ show = true, checked = false, action, children }) {
  if (!show) {
    return <span></span>
  }

  return (
    <label className="action-checkbox">
      <input
        type="checkbox"
        onChange={action}
        checked={checked}
      />
      <span>{children}</span>
    </label>
  )
}

export default ActionCheckbox
