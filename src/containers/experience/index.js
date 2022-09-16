import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from 'store/createContext'
import Experience from 'components/experience'

const ExperienceContainer = ({ items }) => (
  <Consumer>
    {({ experienceRef }) => (
      <Experience items={items} experienceRef={experienceRef} />
    )}
  </Consumer>
)

ExperienceContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ExperienceContainer
