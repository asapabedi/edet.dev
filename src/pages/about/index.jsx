import React from 'react'
import { graphql } from 'gatsby'
import About from 'components/About'

export default ({ data }) => <About data={data} />

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        isProduction
        author {
          phone
          instagram
        }
        skills
        social {
          dev
          twitter
          github
          linkedin
        }
      }
    }
  }
`
