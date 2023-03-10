import styled from 'styled-components'

import { BoxShadowStyle } from '@basic/config'

export function Label() {
  return <Container>Mirko Basic</Container>
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  padding: 0 10px;
  border-radius: 0 0 5px 5px;
  line-height: 28px;
  font-size: 20px;
  font-family: AllianceNo2;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #ffffff;
  background-color: black;
  ${BoxShadowStyle}
`
