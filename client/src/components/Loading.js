import React from 'react'
import ScaleLoader from 'halogen/ScaleLoader'

function Loading(props) {
  const styles = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div style={styles}>
      <ScaleLoader {...props} />
    </div>
  )
}

export default Loading
