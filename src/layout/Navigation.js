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
  }
`

const NavLinksContainer = styled.div`
  text-align: center;
  width: 200px;
  a {
    color: var(--primary);
    padding: 10px 0px 10px 0px;
  }

  & .active {
    &::before {
      content: '{ ';
      color: var(--text);
      @media screen and (max-width: ${md}px) {
        color: var(--white);
      }
    }
    &::after {
      content: ' }';
      color: var(--text);
      @media screen and (max-width: ${md}px) {
        color: var(--white);
      }
    }
  }
`

const Navigation = () => {
  const [navExpanded, toggleNavExpand] = useState(false)

  const NavLinks = () => (
    <NavLinksContainer>
      <h2>
        <Link to='/' activeClassName='active'>
          home
        </Link>
      </h2>

      <h2>
        <Link to='/blog' activeClassName='active'>
          blog
        </Link>
      </h2>

      <h2>
        <Link to='/portfolio' activeClassName='active'>
          portfolio
        </Link>
      </h2>

      <h2>
        <Link to='/contact' activeClassName='active'>
          contact
        </Link>
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
