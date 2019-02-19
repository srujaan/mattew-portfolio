import styled from 'styled-components'

const SuperText = styled.h1`
  font-size: ${props => props.size};
  padding: 0;
  margin: 0;
  &::before {
    content: '<';
    color: var(--text);
  }
  &::after {
    content: ' />';
    color: var(--text);
  }
`

export default SuperText
