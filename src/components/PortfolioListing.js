import React from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'

const Card = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${props => props.img});
  height: 300px;
  width: 300px;
  background-size: cover;
  overflow: hidden;

  & > .card-overlay {
    background: rgba(0, 0, 0, 0.7);
    position: relative;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -moz-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;

    & > .card-details {
      position: absolute;
      text-align: center;
      top: 0%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      -webkit-transition: all 0.3s ease-in-out 0s;
      -moz-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
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
            childImageSharp: {
              fixed: { src }
            }
          }
        }
      }
    }
  }
}) => {
  return (
    <Card img={src}>
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
