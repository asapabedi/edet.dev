import React from 'react'
import Link from 'gatsby-link'
import kebabCase from 'lodash.kebabcase'

import { SEO, Icon, Image, SocialShare } from 'components/Common'
import { Main, Container } from 'components/Layout'

import classes from './projectSingle.module.styl'
import './projectSingle.styl'

export const ProjectSingle = ({ data }) => {
  const post = data.markdownRemark
  const { siteUrl } = data.site.siteMetadata

  return (
    <Main className={`projectSingle ${ classes.projectSingle }`}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
        pathname={post.frontmatter.path}
        article={post.frontmatter}
      />
      <Container>
        <div className={classes.container}>
          <header className={classes.header}>
            <h1>{post.frontmatter.title}</h1>
          </header>

          <h4 className={classes.sectionTitle}>Date</h4>
          <p className={classes.sectionText}>{post.frontmatter.date}</p>

          <h4 className={classes.sectionTitle}>Category</h4>
          <p className={classes.sectionText}>
            {post.frontmatter.category.map((category, index) => {
              return (
                <span key={index}>
                  {category}
                </span>
              )
            })}
          </p>

          <h4 className={classes.sectionTitle}>Description</h4>
          <p
            className={classes.sectionText}
            dangerouslySetInnerHTML={{
              __html: `${ post.frontmatter.description }`
            }}
          />

          <h4 className={classes.sectionTitle}>Links to project</h4>
          <p className={classes.sectionText}>
            {post.frontmatter.url === '#' &&
              post.frontmatter.category[0] !== 'Download' && (
              <span>
                <Icon
                  id="close"
                  fill="#898989"
                  style={{
                    padding: '5px',
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                />
                <small
                  style={{
                    display: 'inline-block',
                    color: '#898989',
                    verticalAlign: 'middle'
                  }}
                >
                    project is offline, stopped or discontinued by the client
                </small>
              </span>
            )}
            {post.frontmatter.url && post.frontmatter.url !== '#' && (
              <span style={{ display: 'block' }}>
                Site:{' '}
                <a
                  href={`${ post.frontmatter.url }?ref=${ siteUrl }${
                    post.frontmatter.path
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.frontmatter.url}
                </a>
              </span>
            )}
            {post.frontmatter.repo && post.frontmatter.repo !== '#' && (
              <span style={{ display: 'block' }}>
                {post.frontmatter.category[0] !== 'Download' && `Repository: `}
                {post.frontmatter.category[0] === 'Download' &&
                  `Download link: `}
                <a
                  href={`${ post.frontmatter.repo }?ref=${ siteUrl }${
                    post.frontmatter.path
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post.frontmatter.repo}
                </a>
              </span>
            )}
          </p>

          {post.frontmatter.designedby && (
            <>
              <h4 className={classes.sectionTitle}>Designer</h4>
              <p className={classes.sectionText}>
                <span style={{ display: 'block' }}>
                  <a
                    href={`${ post.frontmatter.designedby[0] }?ref=${ siteUrl }${
                      post.frontmatter.path
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.frontmatter.designedby[1]}
                  </a>
                </span>
              </p>
            </>
          )}
        </div>

        <Image
          node={data.markdownRemark.frontmatter.image}
          alt={data.markdownRemark.frontmatter.title}
        />

        <div className={classes.container}>
          {post.html && (
            <div
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          )}
        </div>
      </Container>

      <Container style={{ marginBottom: '60px' }} isSmall>
        <SocialShare
          link={`${ siteUrl }${ post.frontmatter.path }`}
          message={post.frontmatter.title}
        />
      </Container>
    </Main>
  )
}
