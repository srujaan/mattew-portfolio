import React from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Card = styled.div`
  height: 300px;
  width: 300px;
  background-size: cover;
  overflow: hidden;
  position: relative;

  & > .gatsby-image-wrapper {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(0.5) contrast(1.2);
  }

  & > .card-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out 0s;

    & > .card-details {
      position: absolute;
      text-align: center;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.2s ease-in-out 0s;
      opacity: 0;

      & > * {
        padding: 0;
        margin: 0;
      }

      p {
        color: white;
      }
    }
  }

  &:hover {
    box-shadow: 0 0 20px #000000;
    & > .gatsby-image-wrapper {
      filter: brightness(1) contrast(1);
    }
    & > .card-overlay {
      opacity: 1;
      & > .card-details {
        top: 50%;
        opacity: 1;
      }
    }
  }
`

const PortfolioListing = ({
  project: {
    node: {
      uid,
      data: {
        title,
        description,
        project_image: {
          localFile: {
            childImageSharp: { fixed }
          }
        }
      }
    }
  }
}) => {
  return (
    <Card>
      <Img fixed={fixed} />
      <div className='card-overlay'>
        <div className='card-details'>
          <h3>{title.text}</h3>
          <p>{description.text}</p>
          <Link to={`/project/${uid}`}>View Project</Link>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(PortfolioListing)
