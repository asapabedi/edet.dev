import React, { lazy, Suspense } from 'react'
import Link from 'gatsby-link'
import ErrorBoundary from 'components/ErrorBoundary'
import { SocialIcons, DarkSwitcher } from 'components/Common'
// import { Nav } from 'components/Layout'
import classes from './hero.module.styl'
import './hero.styl'

const Newjobs = lazy(() => import('components/Common/Alerts/newjobs'))

export const Hero = ({ navLinks, socialIcons, avatar }) => (
  <div className={'hero ' + classes.hero}>
    <div
      className={classes.inner}
      itemScope
      itemType="http://schema.org/Person"
    >
      <h1 className={classes.title}>
        <span>Hello, my name is</span>
        <strong itemProp="name">
          <Link itemProp="url" to="/about">Abednego Edet</Link>
        </strong>.
        <meta itemProp="jobTitle" content="fullstack web engineer" />
        <meta itemProp="worksFor" content="Real people" />
        {avatar &&
          <img src={avatar.src} itemProp="image" alt={`photo of Abednego Edet`} style={{ display: 'none' }} />
        }
      </h1>
      <ErrorBoundary>
        {typeof window !== 'undefined' && <Suspense fallback={<span />}><Newjobs /></Suspense>}
      </ErrorBoundary>
      <p
        className={classes.presentation}
        role="presentation"
        itemProp="description"
      >
        I am a <strong itemProp="jobTitle">freelance software developer</strong>.{' '}
        I help <Link itemProp="url" to="/portfolio">brands and businesses</Link> create stunning web projects. In my spare time I write on <a href="https://dev.to/asapabedi" target="_blank" rel="noopener noreferrer">dev.to</a>.{' '} I like to make the world for others a little easier.
      </p>
      {/* <Nav navLinks={navLinks} /> */}
      <SocialIcons icons={socialIcons} />
      <DarkSwitcher />
    </div>
  </div>
)
