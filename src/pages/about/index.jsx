import React from 'react'
import { graphql } from 'gatsby'
import About from 'components/About'

export default ({ data }) => <About data={data} />

export const aboutQuery = graphql`
  query AboutQuery {
    file(relativePath: { eq: "about/avatar.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 300, quality: 90) {
          src
          srcSet
          base64
          width
          height
        }
      }
    }
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
