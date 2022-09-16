import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'components/layout'
import AboutMe from 'components/aboutme'
import Portfolio from 'containers/portfolio'
import Skills from 'containers/skills'
import { graphql } from 'gatsby'

const Index = ({ data }) => (
  <Layout>
    <AboutMe
      me={data.homeJson.me}
      hello={data.homeJson.hello}
      items={data.homeJson.textcarousel}
    />
    <Portfolio items={data.homeJson.portfolio} />
    <Skills items={data.homeJson.skills} />
  </Layout>
)

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export { Head } from 'components/head'

export default Index

export const query = graphql`
  query HomepageQuery {
    homeJson {
      hello
      me {
        image {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
      }
      textcarousel
      portfolio {
        title
        copy
        description {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(quality: 90, layout: FULL_WIDTH)
          }
        }
        link
        github_url
      }
      skills {
        title
        text
      }
      experience {
        title
        roles {
          _2016
          _2017
          _2018
          _2019
        }
        description {
          childMarkdownRemark {
            html
            rawMarkdownBody
          }
        }
      }
    }
  }
`
