import React from 'react'

import styled from 'styled-components'

import useHover from '../hooks/useHover'

const Card = styled.div`
  background: url(${props => props.img});
  height: 300px;
  width: 300px;
  background-size: cover;
  overflow: hidden;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0);
    box-shadow: 0 0 20px #000000;
  }
`

const CardDetails = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: relative;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: ${props => (props.isHovered ? 80 : 0)};
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
`

const CardTitle = styled.div`
  position: absolute;
  text-align: center;
  top: ${props => (props.isHovered ? '50%' : '0%')};
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  opacity: ${props => (props.isHovered ? 1 : 0)};

  p {
    color: white;
  }
`

const PortfolioListing = ({ img }) => {
  const [hoverRef, isHovered] = useHover()
  return (
    <Card ref={hoverRef} img={img}>
      <CardDetails isHovered={isHovered}>
        <CardTitle isHovered={isHovered}>
          <h1>Project Title</h1>
          <p>Lorem ipsum dolar set.</p>
          <a>View Project</a>
        </CardTitle>
      </CardDetails>
    </Card>
  )
}

export default PortfolioListing
