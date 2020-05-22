import React from 'react'
import { Main, Container } from 'components/Layout'

const styles = {
  padding: '120px 0 40px',
  textAlign: 'center'
}

const SuccessPage = () => (
  <Main>
    <Container>
      <div style={styles}>
        <h1>Your email has been sent successfully.</h1>
        <p>
        You'll get a reply soon concerning your order.
        </p>
      </div>
    </Container>
  </Main>
)

export default SuccessPage
