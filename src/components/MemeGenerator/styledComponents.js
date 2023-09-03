import styled from 'styled-components'
// Style your components here

export const Text = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-weight: 900;
`

export const Container = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  height: 300px;
  width: 300px;
`
