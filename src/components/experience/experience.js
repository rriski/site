import React from 'react';
import PropTypes from 'prop-types';
import Item from 'components/experience/item';
import { Container } from './experience.css';
import { Wrapper, H } from 'constants/styled.css';

const Experience = ({ items, experienceRef }) => (
  <Wrapper ref={experienceRef}>
    <H>Experience</H>
    <Container>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Container>
  </Wrapper>
);

Experience.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  experienceRef: PropTypes.object,
};

export default Experience;
