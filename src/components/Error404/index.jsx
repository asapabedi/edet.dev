import React from 'react'
import Link from 'gatsby-link'
import whatsAppUrl from 'whatsapp-url'
import { SEO, Icon, SocialIcons, DarkSwitcher } from 'components/Common'
import { BaseLayout } from 'components/Layout'

import './error404.styl'
import classes from './error404.module.styl'

const title = 'Error 404'
const description =
  'Unfortunately the page you are trying to reach was not found.'

export const Error404 = ({ data, phone, text }) => (
  <BaseLayout>
    <SEO title={title} description={description} pathname="/404.html" />
    <div className={`error404 ${ classes.error404 }`}>
      <div className={classes.inner}>
        <h1>Oops! {title}</h1>
        <p>{description}</p>

        <div className={classes.buttons}>
          <Link to="/" className={`button button--primary button--outline ${ classes.button }`}>
            <Icon id="home" style={{ padding: '4px' }} />
            <span>Back home</span>
          </Link>
          <a
            href={whatsAppUrl({
              phone,
              text
            })}
            className={`button button--secondary button--outline ${ classes.button }`}
            target="_blank"
          >
            <span>Drop a line</span>
            <Icon id="whatsapp" style={{ padding: '4px' }} />
          </a>
        </div>

        <SocialIcons icons={data.site.siteMetadata.social} />
        <DarkSwitcher />
      </div>
    </div>
  </BaseLayout>
)
