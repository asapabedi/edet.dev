import React from 'react'
import { SEO, PageHeader, DarkSwitcher } from 'components/Common'
import { Main, BaseLayout, Container } from 'components/Layout'
import {
  Left,
  Right,
  Me,
  History,
  Today,
  ThisProject,
  More
} from 'components/About/components'

import classes from 'components/About/about.module.styl'
import 'components/About/about.styl'

const _date = new Date()
const _year = _date.getFullYear()
const _age = _year - 1997

const About = ({ data }) => {
  return (
    <Main>
      <SEO
        title="Who am I?"
        description={`Meu nome é Abednego Edet Costa (muito prazer). Tenho ${ _age } anos, nasci e cresci em uma cidadezinha do interior de Rondônia chamada Ariquemes, sai de lá com 18 anos para me aventurar em Curitiba/PR onde moro atualmente.`}
        image={data.file.childImageSharp.fixed.src}
        pathname="/about"
      />
      <PageHeader
        smallTitle="Profile"
        title={`I'm Abednego, nice to meet you 😁`}
      />

      <Container>
        <div className={`about ${ classes.about }`}>
          <Left data={data} classes={classes} />
          <Right data={data} classes={classes}>
            <Me age={_age} classes={classes} />
            <History classes={classes} />
            <Today classes={classes} />
            <ThisProject classes={classes} />
            <More data={data} classes={classes} />
          </Right>
        </div>
      </Container>
      {/* <DarkSwitcher /> */}
    </Main>
  )
}

export default About
