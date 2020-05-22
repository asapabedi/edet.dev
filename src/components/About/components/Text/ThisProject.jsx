import React from 'react'

export const ThisProject = ({ classes }) => (
  <div className={classes.text}>
    <h2>Love this site? ❤️</h2>
    <p>
      {' '}
      it is written in React.js using{' '}
      <strong>
        <a
          href="https://gatsbyjs.org/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >Gatsby </a>
      </strong>
       to generate the static files and host them on{' '}
      <strong>
        <a
          href="https://netlify.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >netlify.com</a>
      </strong>.
    </p>
  </div>
)
