import React from 'react'
// import Link from 'gatsby-link'
// import ErrorBoundary from 'components/ErrorBoundary'
import { SocialIcons, DarkSwitcher } from 'components/Common'
// import { Nav } from 'components/Layout'
import classes from './hero.module.styl'
import './hero.styl'

// const Newjobs = lazy(() => import('components/Common/Alerts/newjobs'))

export const Hero = ({ socialIcons, avatar }) => (
  <div className={'hero ' + classes.hero}>
    <div
      className={classes.inner}
      itemScope
      itemType="http://schema.org/Person"
    >
      <h1 className={classes.title}>
        <span>Hello, my name is</span>
        <strong itemProp="name">
          <a>Abednego Edet</a>
        </strong>.
        <meta itemProp="jobTitle" content="fullstack software engineer" />
        <meta itemProp="worksFor" content="Vidor" />
        {avatar &&
          <img src={avatar.src} itemProp="image" alt={`photo of Abednego Edet`} style={{ display: 'none' }} />
        }
      </h1>
      {/* <ErrorBoundary>
        {typeof window !== 'undefined' && <Suspense fallback={<span />}><Newjobs /></Suspense>}
      </ErrorBoundary> */}
      <p
        className={classes.presentation}
        role="presentation"
        itemProp="description"
      >
        I'm <strong itemProp="jobTitle">full stack software engineer</strong>, currently building serverless applications at <a itemProp="url" target="_blank" href="https://vidor.io" rel="noopener noreferrer">{'Vidor'}</a> using React, Node.js, TypeScript & AWS.<br />{' '}Formerly with <a target="_blank" href="https://auth0.com" rel="noopener noreferrer">Auth0</a>.
      </p>
      {/* <Nav navLinks={navLinks} /> */}
      <SocialIcons icons={socialIcons} />
      <DarkSwitcher />
    </div>
  </div>
)
