import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'
import { Navbar } from '../components/Navbar'
import { GlobalStyle } from './GlobalStyle'

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 750px;
  padding: 100px 20px 100px 20px;
  margin: 0px auto;
`

const Main = styled.main`
  margin-top: 75px;
`

const Footer = styled.footer`
  margin-top: 50px;
`

const Layout = ({ children }) => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Container>
        <Navbar />
        <Main>
          <div>{children}</div>
        </Main>
        <Footer>
          <em>- Scott Moses Sunarto {new Date().getFullYear()}</em>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  lastUpdated: PropTypes.string,
}

export default Layout
