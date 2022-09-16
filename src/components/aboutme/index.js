import React from 'react'
import PropTypes from 'prop-types'
import Picture from 'components/picture'
import TextCarousel from 'components/textcarousel'
import { Container, TextWrapper, Title } from './aboutme.css'

const AboutMe = ({ me, hello, items }) => (
  <Container>
    <Picture image={me.image} />
    <TextWrapper>
      <Title>{hello}</Title>
      <TextCarousel items={items} />
    </TextWrapper>
  </Container>
)

AboutMe.propTypes = {
  me: PropTypes.object.isRequired,
  hello: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
}

export default AboutMe
