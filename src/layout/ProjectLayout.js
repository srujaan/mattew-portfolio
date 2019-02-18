import React from 'react'
import Layout from './layout'
import GoBack from '../components/GoBack'

const ProjectLayout = () => {
  return (
    <Layout>
      <GoBack to='/portfolio' name='Portfolio' />
      <h1>Hello!</h1>
    </Layout>
  )
}

export default ProjectLayout
