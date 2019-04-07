import styled from 'styled-components'

export const Title = styled.div`
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: ${props => 1 + Number(props.count) / 10}rem;
  color: ${props => props.textColor};
`
