import React from 'react'
import PropTypes from 'prop-types'
import { ToggleModal } from './toggle.css'

const ModalToggle = ({ setOpen }) => (
  <ToggleModal onClick={() => setOpen(false)} />
)

ModalToggle.propTypes = {
  setOpen: PropTypes.func.isRequired,
}

export default ModalToggle
