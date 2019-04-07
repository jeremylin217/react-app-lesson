import styled, { css } from 'styled-components'

const primaryColor = 'green'
const activeColor = 'red'
const awesomeColor = 'yellow'

export const Title = styled.div`
  color: ${primaryColor};
  font-size: ${props => (props.size === 'large' ? '1.5em' : '1em')};

  &:hover {
    color: ${activeColor};
  }

  ${props =>
    props.awesome &&
    css`
      background-color: ${awesomeColor};
    `}
`

export const SubTitle = styled.div`
  background-color: #ccc;
  color: ${primaryColor};
  text-indent: 1em;
  font-size: 85%;
`
