import React from 'react'
import { SEO } from 'components/Common'
import { Hero } from 'components/Home'
import { BaseLayout } from 'components/Layout'

export const Home = ({ title, social }) => (
  <BaseLayout>
    <SEO title={title} />
    <Hero socialIcons={social} />
  </BaseLayout>
)
