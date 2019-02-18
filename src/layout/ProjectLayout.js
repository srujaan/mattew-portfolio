import React from 'react'
import Layout from './layout'
import { Link } from 'gatsby'

const ProjectLayout = () => {
  return (
    <Layout>
      <h4>
        <Link to='/portfolio'> {`< All Projects`}</Link>
      </h4>
      <h1>Hello!</h1>
    </Layout>
  )
}

export default ProjectLayout
