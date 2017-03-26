import React from 'react'
import ScaleLoader from 'halogen/ScaleLoader'

function Loading({ color, margin = '0px' }) {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    margin: margin
  }
  return (
    <div style={styles}>
      <ScaleLoader color={color} />
    </div>
  )
}

export default Loading
