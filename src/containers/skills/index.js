import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from 'store/createContext'
import Skills from 'components/skills'

const SkillsContainer = ({ items }) => (
  <Consumer>
    {({ skillsRef }) => <Skills items={items} skillsRef={skillsRef} />}
  </Consumer>
)

SkillsContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SkillsContainer
