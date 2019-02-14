import styled from 'styled-components'
import { md } from 'styled-bootstrap-responsive-breakpoints'

const Container = styled.div`
  margin-top: 10vh;
  @media screen and (min-width: ${md}px) {
    margin-top: 25vh;
  }
`

export default Container
