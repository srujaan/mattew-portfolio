import React from 'react'
import Layout from './layout'
import GoBack from '../components/GoBack'

const ProjectLayout = () => {
  return (
    <Layout>
      <GoBack to='/portfolio' name='Portfolio' />
    </Layout>
  )
}

export default ProjectLayout
