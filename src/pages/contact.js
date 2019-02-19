import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'

import SuperText from '../components/SuperText'
import Container from '../layout/Container'

const ContactPage = () => {
  return (
    <Layout>
      <Container>
        <SuperText size='4em'>Contact</SuperText>
        <h1>Lets work together.</h1>
      </Container>
    </Layout>
  )
}

export default ContactPage
