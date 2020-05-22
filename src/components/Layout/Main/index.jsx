import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { WhatsApp } from 'components/Common'
import { BaseLayout, Header, Footer } from 'components/Layout'

import classes from './main.module.styl'

export const Main = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            author {
              phone
            }
            social {
              github
            }
            navLinks {
              name
              path
            }
          }
        }
      }
    `}
    render={data => (
      <BaseLayout {...props}>
        <Header
          navLinks={data.site.siteMetadata.navLinks}
        />
        <main
          role="main"
          aria-label="Main Content"
          id="mainContent"
          className={classes.main}
        >
          {children}
        </main>
        {/* <Footer /> */}
        <WhatsApp
          phone={data.site.siteMetadata.author.phone}
          text="Hello Abednego! I saw your site and would love to chat."
        />
      </BaseLayout>
    )}
  />
)
