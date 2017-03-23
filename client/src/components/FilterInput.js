import React from 'react'
import './FilterInput.css'

function FilterInput({ show, onChange, condition, children }) {
  if (!show) {
    return <span></span>
  }

  return (
    <div className="filter-container">
      <input
        type="checkbox"
        onChange={onChange}
        checked={condition}
      />
      <div className="description">
        {children}
      </div>
    </div>
  )
}

export default FilterInput
