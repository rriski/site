import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { Container, Title } from './header.css'
import Nav from 'containers/nav'

const Header = ({ title }) => (
  <motion.div
    animate={{ y: '-5%' }}
    transition={{ ease: 'easeInOut', duration: 0.1 }}
  >
    <Container>
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>
      <Nav />
    </Container>
  </motion.div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
