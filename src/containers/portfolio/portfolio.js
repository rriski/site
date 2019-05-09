import React from 'react'
import PropTypes from 'prop-types'
import { Consumer } from 'store/createContext'
import Portfolio from 'components/portfolio'

const PortfolioContainer = ({ items }) => (
  <Consumer>
    {({ portfolioRef }) => (
      <Portfolio items={items} portfolioRef={portfolioRef} />
    )}
  </Consumer>
)

PortfolioContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PortfolioContainer
