import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Error404 } from 'components/Error404'

class PageNotFound extends Component {
  render () {
    return <Error404 data={this.props.data} />
  }
}

export default PageNotFound

export const error404Query = graphql`
  query Error404Query {
    site {
      siteMetadata {
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
