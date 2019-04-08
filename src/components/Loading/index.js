import React from 'react'

const Loading = ({ text }) => (
  <div className="text-center pt-5 pb-5">
    <div className="spinner-border text-secondary">
      <span className="sr-only">{text || 'Loading...'}</span>
    </div>
  </div>
)

export default Loading
