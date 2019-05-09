import React from 'react'
import PropTypes from 'prop-types'
import { ToggleModal } from './toggle.css'

const ModalToggle = ({ hideModal }) => <ToggleModal onClick={hideModal} />

ModalToggle.propTypes = {
  hideModal: PropTypes.func.isRequired,
}

export default ModalToggle
