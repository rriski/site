import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from 'components/header'
import Footer from 'components/footer'
import { Wrapper } from './layout.css'
import GlobalStyle from 'global.css.js'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          siteTitle
        }
      }
    }
  `)

  return (
    <Wrapper>
      <GlobalStyle />
      <Header title={data.site.siteMetadata.siteTitle} />
      {children}
      <Footer />
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
