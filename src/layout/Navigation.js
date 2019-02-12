import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  top: 0;
  height: 100vh;

  a {
    margin: 5px;
    padding: 5px;
  }
`

const MobileNavMenu = styled(MenuAltRight)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${props =>
    props.visible ? props.theme.colors.text : props.theme.colors.primary};
  z-index: 100;
`

const MobileNav = styled.div`
  background: ${props => props.theme.colors.primary};
  position: fixed;
  z-index: 90;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => (props.visible ? '0%' : '100%')});

  a {
    opacity: ${props => (props.visible ? '1' : '0')};
    color: ${props => props.theme.colors.background};
    transition: opacity 0.3s 0.3s ease-in-out;
    padding: 10px;
    &:hover {
      color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.text};
    }
  }
`

const Navigation = ({ isMobile }) => {
  const [navVisible, toggleNav] = useState(false)

  const NavLinks = () => (
    <React.Fragment>
      <h2>
        <Link to='/'>home</Link>
      </h2>

      <h2>
        <Link to='/blog'>blog</Link>
      </h2>

      <h2>
        <Link to='/portfolio'>portfolio</Link>
      </h2>

      <h2>
        <Link to='/contact'>contact</Link>
      </h2>
    </React.Fragment>
  )
  const mobileNav = () => {
    return (
      <React.Fragment>
        <MobileNavMenu
          size={48}
          visible={navVisible}
          onClick={() => toggleNav(!navVisible)}
        />
        <MobileNav visible={navVisible}>{NavLinks()}</MobileNav>
      </React.Fragment>
    )
  }

  const Nav = () => <NavBar>{NavLinks()}</NavBar>

  return isMobile ? mobileNav() : Nav()
}

export default Navigation
