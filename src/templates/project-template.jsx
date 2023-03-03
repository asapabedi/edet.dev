import React from 'react'
// import { graphql } from 'gatsby'
import { ProjectSingle } from 'components/Projects'

export default function Template ({ data }) {
  if (!data.markdownRemark) return null
  return <ProjectSingle data={data} />
}

// export const projectQuery = graphql`
//   query ProjectPostByPath($path: String!) {
//     site {
//       siteMetadata {
//         siteUrl
//       }
//     }
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       excerpt(pruneLength: 250)
//       frontmatter {
//         path
//         title
//         date(formatString: "MMM/YYYY", locale: "en-NG")
//         tags
//         description
//         category
//         repo
//         url
//         designedby
//         image {
//           publicURL
//         }
//       }
//     }
//   }
// `
