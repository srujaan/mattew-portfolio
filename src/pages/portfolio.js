import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'
import PortfolioListing from '../components/PortfolioListing'

const PortfolioPage = () => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <PortfolioListing />
      <PortfolioListing />
      <PortfolioListing />
      <PortfolioListing />
    </Layout>
  )
}

export default PortfolioPage
