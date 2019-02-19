import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../layout/layout'

import SEO from '../components/SEO'
import SuperText from '../components/SuperText'

const Center = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const FourOhFour = () => {
  return (
    <Layout>
      <SEO title='Matthew Secrist' />
      <Center>
        <SuperText size='3em'>Thanks</SuperText>
        <p>Thank you for your message, I'll be in contact with you soon.</p>
        <Link to='/'>Go Home</Link>
      </Center>
    </Layout>
  )
}

export default FourOhFour
