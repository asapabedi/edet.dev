import React from 'react'
import { graphql } from 'gatsby'
import { Home } from 'components/Home'

const Index = ({ data }) => {
  const { social } = data.site.siteMetadata
  const { fixed } = data.file.childImageSharp
  return <Home social={social} avatar={fixed} />
}

export default Index

export const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        social {
          github
          twitter
          dev
        }
      }
    }
  }
`
