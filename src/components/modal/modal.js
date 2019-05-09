import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  ModalContainer,
  ModalMain,
  ModalHeader,
  ModalBody,
  ModalBackground,
} from './modal.css'
import ModalToggle from 'components/modal/toggle'
import getScrollbarWidth from 'get-scrollbar-width'

export default class Modal extends PureComponent {
  constructor(props) {
    super(props)
    this.ModalRef = React.createRef()
  }
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown)
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickOutside = e => {
    const clientX = e.clientX
    const clientY = e.clientY
    const bRect = this.ModalRef.current.firstChild.getBoundingClientRect()
    const x = clientX > bRect.right || clientX < bRect.left
    const y = clientY < bRect.top || clientY > bRect.bottom

    if (x || y) {
      const { hideModal } = this.props
      hideModal()
    }
  }

  onKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.props.open && this.props.hideModal()
    }
  }

  disableScrolling(open) {
    const scrollbarWidth = getScrollbarWidth()
    if (open) {
      // Scrollbar is approximately 15px wide.
      // It gets removed with overflow: hidden so we
      // add margin to body to prevent it from jumping
      // on modal open.
      document.body.style.marginRight = scrollbarWidth + 'px'
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.marginRight = '0px'
      document.body.style.overflow = null
      document.documentElement.style.overflow = null
    }
  }

  render() {
    const { children, open, hideModal, title } = this.props
    const scrollbarWidth = getScrollbarWidth()
    const modalProps = { open, scrollbarWidth }

    if (typeof document !== 'undefined') {
      this.disableScrolling(open)
    }

    return (
      <>
        <ModalContainer ref={this.ModalRef} open={open}>
          <ModalMain {...modalProps}>
            <ModalHeader>
              <ModalToggle hideModal={hideModal} />
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalMain>
        </ModalContainer>
        <ModalBackground open={open} />
      </>
    )
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
