import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'components/modal'
import { Description } from './modal.css'

const ItemModal = ({ description, ...props }) => (
  <Modal {...props}>
    <Description
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
  </Modal>
)

ItemModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  description: PropTypes.object,
}

export default ItemModal
