import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'
import PortfolioListing from '../components/PortfolioListing'

import { times } from 'underscore'

const ITEMS_COUNT = 8

const PortfolioContainer = styled.div``

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  justify-content: center;
  align-items: center;
`

const Panel = styled.div`
  background: darkgray;
  margin-left: 5px;
  margin-right: 5px;
  height: 300px;
  width: 300px;
`

const PortfolioPage = () => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <PortfolioContainer>
        <GridWrapper itemsCount={ITEMS_COUNT}>
          {times(ITEMS_COUNT, () => (
            <Panel>
              <PortfolioListing />
            </Panel>
          ))}
        </GridWrapper>
      </PortfolioContainer>
    </Layout>
  )
}

export default PortfolioPage
