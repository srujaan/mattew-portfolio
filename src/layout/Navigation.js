import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'
import { md } from 'styled-bootstrap-responsive-breakpoints'

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

  @media screen and (max-width: ${md}px) {
    height: 10vh;
    flex-direction: row;
  }
  }
`

const MobileNavMenu = styled(MenuAltRight)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${props =>
    props.navVisible ? props.theme.colors.text : props.theme.colors.primary};
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
  a {
    color: ${props => props.theme.colors.text};
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
      <NavBar>
        <MobileNavMenu
          size={48}
          navVisible={navVisible}
          onClick={() => toggleNav(!navVisible)}
        />
        {navVisible ? <MobileNav>{NavLinks()}</MobileNav> : null}
      </NavBar>
    )
  }

  const Nav = () => <NavBar>{NavLinks()}</NavBar>

  return isMobile ? mobileNav() : Nav()
}

export default Navigation
