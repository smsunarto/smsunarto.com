import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Seo from '../components/Seo'

const Index = ({ data }) => {
  const { html } = data.allMarkdownRemark.nodes[0]

  return (
    <Layout>
      <Seo title="Scott Moses Sunarto" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/home/" } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
        html
      }
    }
  }
`
