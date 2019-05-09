import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'components/transition'

const wrapPageElement = ({ element, props }) => (
  <Transition {...props}>{element}</Transition>
)

wrapPageElement.propTypes = {
  element: PropTypes.element,
  props: PropTypes.object,
}

export default wrapPageElement
