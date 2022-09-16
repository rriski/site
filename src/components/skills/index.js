import React from 'react'
import PropTypes from 'prop-types'
import Item from 'components/skills/item'
import { Container } from './skills.css'
import { Wrapper, H } from 'constants/styled.css'

const Skills = ({ items, skillsRef }) => (
  <Wrapper ref={skillsRef}>
    <H>Skills</H>
    <Container>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Container>
  </Wrapper>
)

Skills.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  skillsRef: PropTypes.object,
}

export default Skills
