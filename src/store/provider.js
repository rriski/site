import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './createContext'

const AppProvider = (props) => {
  const { children } = props

  const portfolioRef = useRef()
  const skillsRef = useRef()

  const [state, setState] = useState({ portfolioRef, skillsRef })

  return (
    <Provider value={state} setState={setState}>
      {children}
    </Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppProvider
