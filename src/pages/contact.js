import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Layout from '../layout/layout'
import Container from '../layout/Container'
import SuperText from '../components/SuperText'

import SEO from '../components/SEO'

// borrowed mostly from https://github.com/imorente/gatsby-netlify-form-example/
// TODO: Make it better.

const Center = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Input = styled.input`
  position: relative;
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--text);
  outline: none;
  padding: 8px 0;
  font-size: 16px;
`

const Label = styled.label`
  display: block;
  font-size: 16px;
  transform: translateY(25px);
  color: var(--text);
  transition: all 0.5s;
`

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid var(--text);
  color: var(--text);
`

function encode (data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    window
      .fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state
        })
      })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => window.alert(error))
  }

  render () {
    return (
      <Layout>
        <SEO
          title='Contact - Matthew Secrist'
          description='Words and code.'
          pathname='/blog'
        />
        <Container>
          <SuperText size='2.5em'>Contact</SuperText>
          <p>Send me a message.</p>
          <Center>
            <form
              name='contact'
              method='post'
              action='/thanks/'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              onSubmit={this.handleSubmit}
            >
              <input type='hidden' name='form-name' value='contact' />
              <p hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name='bot-field' onChange={this.handleChange} />
                </label>
              </p>
              <p>
                <Label>
                  Your name:
                  <br />
                  <Input type='text' name='name' onChange={this.handleChange} />
                </Label>
              </p>
              <p>
                <Label>
                  Your email:
                  <br />
                  <Input
                    type='email'
                    name='email'
                    onChange={this.handleChange}
                  />
                </Label>
              </p>
              <p>
                <Label>
                  Message:
                  <br />
                  <Input name='message' onChange={this.handleChange} />
                </Label>
              </p>
              <p>
                <Button type='submit'>Send</Button>
              </p>
            </form>
          </Center>
        </Container>
      </Layout>
    )
  }
}
