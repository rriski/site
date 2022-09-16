import React from 'react'
import PropTypes from 'prop-types'
import { Ul, A } from './nav.css'

const scrollToRef = (ref) => {
  if (ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    })
  }
}

const Nav = React.forwardRef((ref, props) => (
  <>
    <Ul {...props}>
      <li>
        <A onClick={() => scrollToRef(ref.portfolioRef)}>Projects</A>
      </li>
      <li>
        <A onClick={() => scrollToRef(ref.skillsRef)}>Skills</A>
      </li>
    </Ul>
  </>
))

Nav.propTypes = {
  ref: PropTypes.object,
}

export default Nav
