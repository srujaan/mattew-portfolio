import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../components/SEO'
import SuperText from '../components/SuperText'

export default () => {
  return (
    <Layout>
      <SEO title='FOUR OH FOUR!' />
      <Container>
        <SuperText size='3em'>Four Oh Four</SuperText>
        <p>This doesn't seem to be a page.</p>
        <Link to='/'>Go Home</Link>
      </Container>
    </Layout>
  )
}
