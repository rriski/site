import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import posed from 'react-pose'
import { Container, Title } from './header.css'
import Nav from 'containers/nav'

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-10%',
    transition: {
      ease: ' ',
    },
  },
})

const Header = ({ title }) => (
  <AnimatedContainer>
    <Container>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>
      <Nav />
    </Container>
  </AnimatedContainer>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
