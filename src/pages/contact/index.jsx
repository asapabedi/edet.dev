import React from 'react'
import { graphql } from 'gatsby'

import { SEO, PageHeader, SocialIcons } from 'components/Common'
import { Main, Container } from 'components/Layout'
import ContactForm from 'components/Contact'
import classes from './contact.module.styl'

const title = 'Contact'
const description =
  'Do you have a project in mind or simply wants us to talk, get in touch!'

const Contact = ({ data }) => (
  <Main>
    <SEO title={title} description={description} pathname="/contact" />
    <PageHeader
      smallTitle="Contact"
      title="So, let's talk"
      style={{ textAlign: 'center' }}
    >
      <p>{description}</p>
    </PageHeader>
    <Container>
      <div className={classes.contact}>
        <div className={classes.left}>
          <p className="card">
            <span>Send an email to: </span>
            <a className="Contact__email" href="mailto:ever.asap@gmail.com">
              ever.asap@gmail.com
            </a>
          </p>
          <span
            style={{
              textAlign: 'center',
              display: 'block',
              marginBottom: '15px'
            }}
          >
            ...or connect with one of my social networks!
          </span>
          <SocialIcons
            icons={data.site.siteMetadata.social}
            style={{ textAlign: 'center' }}
          />
        </div>
        <div className={classes.right}>
          <ContactForm services={data.site.siteMetadata.services} />
        </div>
      </div>
    </Container>
  </Main>
)

export default Contact

export const contactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        services {
          title
          description
        }
        social {
          dev
          github
          twitter
          linkedin
        }
      }
    }
  }
`
