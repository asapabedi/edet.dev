import React from 'react'
import Link from 'gatsby-link'
import classes from './brand.module.styl'

export const Brand = () => (
  <h1 className={`brand ${ classes.brand }`}>
    <Link className={classes.link} to="/">
      <span>edet.</span>dev
    </Link>
  </h1>
)
