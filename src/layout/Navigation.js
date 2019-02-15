import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { md } from 'styled-bootstrap-responsive-breakpoints'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'
import useWindowWidth from '../hooks/useWindowWidth'

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  top: 0;
  height: 100vh;
  position: sticky;
`

const MobileNavMenu = styled(MenuAltRight)`
  position: fixed;
  top: 0;
  right: 0;
  color: ${({ visible }) => (visible ? 'var(--text)' : 'var(--primary)')};
  z-index: 100;
`

const MobileNav = styled.div`
  background: var(--navBg);
  position: fixed;
  z-index: 90;
  display: flex;
  top: 0;
  right: 0;
  bottom: 0;
  width: 200px;
  border-left: 1px solid var(--primary);
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => (props.visible ? '0%' : '100%')});

  a {
    opacity: ${props => props.visible};
    transition: opacity 0.3s 0.3s ease-in-out;
  }
`

const NavLinksContainer = styled.div`

  a {
    color: var(--primary);
    padding: 10px;

    &:hover {
        color: var(--navText);
        background: var(--semiDark);
    }
  `

const Navigation = () => {
  const width = useWindowWidth()
  const isMobile = width <= md
  const isServer = typeof window === 'undefined'

  const [navExpanded, toggleNavExpand] = useState(false)

  const NavLinks = () => (
    <NavLinksContainer>
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
    </NavLinksContainer>
  )
  const mobileNav = () => {
    return (
      <React.Fragment>
        <MobileNavMenu
          size={48}
          visible={!navExpanded}
          onClick={() => toggleNavExpand(!navExpanded)}
        />
        <MobileNav visible={navExpanded}>{NavLinks()}</MobileNav>
      </React.Fragment>
    )
  }

  const Nav = () => {
    return <NavBar>{NavLinks()}</NavBar>
  }

  return isServer ? null : isMobile ? mobileNav() : Nav()
}

export default Navigation
