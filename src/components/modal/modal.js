import React, { useEffect, useRef } from 'react'
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

const Modal = props => {
  const { children, open, setOpen, title } = props
  const modalRef = useRef()

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      open && setOpen(false)
    }
  }

  const handleClickOutside = e => {
    const clientX = e.clientX
    const clientY = e.clientY
    const bRect = modalRef.current.firstChild.getBoundingClientRect()
    const x = clientX > bRect.right || clientX < bRect.left
    const y = clientY < bRect.top || clientY > bRect.bottom

    if (x || y) {
      setOpen(false)
    }
  }

  const disableScrolling = () => {
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

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  const scrollbarWidth = getScrollbarWidth()
  const modalProps = { open, scrollbarWidth }

  if (typeof document !== 'undefined') {
    disableScrolling(open)
  }

  return (
    <>
      <ModalContainer ref={modalRef} open={open}>
        <ModalMain {...modalProps}>
          <ModalHeader>
            <ModalToggle setOpen={setOpen} />
            {title}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalMain>
      </ModalContainer>
      <ModalBackground open={open} />
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default Modal
