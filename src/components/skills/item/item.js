import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import { Wrapper, Title, Description } from './item.css';

const Item = ({ title, text }) => (
  <IO rootMargin="-50px">
    {({ hasBeenVisible }) => (
      <Wrapper isVisible={hasBeenVisible}>
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Wrapper>
    )}
  </IO>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
