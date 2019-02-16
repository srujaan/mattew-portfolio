import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { md } from 'styled-bootstrap-responsive-breakpoints'
import { MenuAltRight } from 'styled-icons/boxicons-regular/MenuAltRight'

const MobileNavMenu = styled(MenuAltRight)`
  position: fixed;
  top: 0;
  right: 0;
  color: ${props => (props.toggled ? 'var(--text)' : 'var(--primary)')};
  z-index: 100;
  @media screen and (min-width: ${md}px) {
    visibility: hidden;
  }
`

const NavMenu = styled.div`
  top: 0;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  display: flex;
  height: 100vh;

  @media screen and (min-width: ${md}px) {
    position: sticky;
  }

  @media screen and (max-width: ${md}px) {
    background: var(--navBg);
    position: fixed;
    z-index: 90;
    right: 0;
    width: 200px;
    border-left: 1px solid var(--primary);

    transition: transform 0.3s ease-in-out;
    transform: translateX(${props => (props.visible ? '0%' : '100%')});

    a {
      opacity: ${props => props.visible};
      transition: opacity 0.3s 0.3s ease-in-out;
    }
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

  const Nav = () => {
    return (
      <React.Fragment>
        <MobileNavMenu
          size={48}
          toggled={!navExpanded}
          onClick={() => toggleNavExpand(!navExpanded)}
        />
        <NavMenu visible={navExpanded}>{NavLinks()}</NavMenu>
      </React.Fragment>
    )
  }

  return Nav()
}

export default Navigation
