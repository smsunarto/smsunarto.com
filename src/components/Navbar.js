import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from '../images/logo.png'

const NavbarContainer = styled.header`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  @media (max-width: 600px) {
    flex-flow: column wrap;
  }
`

const NavbarLinkContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 5px;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;

  @media (max-width: 600px) {
    margin-top: 15px;
  }
`

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #ababab;
  font-size: 1.3rem;
`

const NavbarLinkExternal = styled.a`
  text-decoration: none;
  color: #ababab;
  font-size: 1.3rem;
`

const LogoImage = styled.img`
  margin-right: 50px;
  max-width: 200px;

  @media (max-width: 600px) {
    margin-right: 0px;
  }
`

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoImage alt="Scott Moses Sunarto logo" src={logo} />
      <NavbarLinkContainer>
        <NavbarLink to="/">home</NavbarLink>
        <NavbarLinkExternal href="https://blog.smsunarto.com">writings</NavbarLinkExternal>
        <NavbarLinkExternal href="https://smsunarto.com/resume">resume</NavbarLinkExternal>
      </NavbarLinkContainer>
    </NavbarContainer>
  )
}
