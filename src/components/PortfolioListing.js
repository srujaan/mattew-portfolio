import React from 'react'

import styled from 'styled-components'

const Card = styled.div`
  background: url(${props => props.img});
  height: 300px;
  width: 300px;
  background-size: cover;
  overflow: hidden;
  filter: grayscale(100%);

  & > .card-overlay {
    background: rgba(0, 0, 0, 0.5);
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

      p {
        color: white;
      }
    }
  }

  &:hover {
    filter: grayscale(0);
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
      data: { title, description, project_image }
    }
  }
}) => {
  return (
    <Card img={project_image.localFile.childImageSharp.fixed.src}>
      <div className='card-overlay'>
        <div className='card-details'>
          <h1>{title.text}</h1>
          <p>{description.text}</p>
          <a>View Project</a>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(PortfolioListing)
