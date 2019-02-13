import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'gatsby'

const PostTitle = styled.h1`
  padding: 0;
  margin: 0;
`

const PostListing = ({
  post: {
    node: {
      uid,
      data: { date, title, description }
    }
  }
}) => (
  <React.Fragment key={`${uid}`}>
    <Link to={`/blog/${uid}`}>
      <PostTitle key={`${uid}-title`}>{title.text}</PostTitle>
    </Link>
    <sub>Posted {moment(date).format('LL')}</sub>
    <p key={`${uid}-subtitle`}>{description}</p>
  </React.Fragment>
)

export default PostListing
