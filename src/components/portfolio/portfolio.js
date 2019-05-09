import React from 'react'
import PropTypes from 'prop-types'
import Item from 'components/portfolio/item'
import { Container } from './portfolio.css'
import { Wrapper, H } from 'constants/styled.css'

const Portfolio = ({ items, portfolioRef }) => (
  <Wrapper ref={portfolioRef}>
    <H>Projects</H>
    <Container>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Container>
  </Wrapper>
)

Portfolio.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  portfolioRef: PropTypes.object,
}

export default Portfolio
