import React from 'react'
import { Title } from './elements'

const Counter = ({ count, textColor }) => (
  <div>
    <div>Clicks</div>
    <Title count={count} textColor={textColor}>
      {count}
    </Title>
  </div>
)

export default Counter
