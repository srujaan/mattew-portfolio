import React from 'react'

import styled from 'styled-components'

const unsplash = (h, w) => `https://source.unsplash.com/random/${h}x${w}`

const Card = styled.div`
  background: url(${unsplash(300, 300)});
  height: 300px;
  width: 300px;
  background-size: cover;
  overflow: hidden;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0);
    box-shadow: 0 0 20px #000000;
  }
`

const PortfolioListing = () => (
  <Card>
    <h1>Hello</h1>
  </Card>
)

export default PortfolioListing
