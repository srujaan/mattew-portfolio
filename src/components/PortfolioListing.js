import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'
import { Composition } from 'atomic-layout'

const unsplash = (h, w) => `https://source.unsplash.com/random/${h}x${w}`

const templateMd = `
img title
img description
`

const template = `
img
title
description
`

const PortfolioListing = () => (
  <Composition
    template={template}
    templateMd={templateMd}
    gutterMd={20}
    padding={10}
  >
    {({ Img, Title, Description }) => {
      return (
        <React.Fragment>
          <Img>
            <img src={unsplash(400, 400)} width='100%' />
          </Img>
          <Title>
            <h1>Test Title</h1>
          </Title>
          <Description>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Description>
        </React.Fragment>
      )
    }}
  </Composition>
)

export default PortfolioListing
