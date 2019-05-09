import styled, { keyframes } from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

const showContainer = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const hideContainer = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
`

const showBackground = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const hideBackground = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ open }) => (open ? 'block' : 'none')};
  animation: ${({ open }) => (open ? showBackground : hideBackground)} 0.1s
    ease-out;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  display: ${({ open }) => (open ? 'block' : 'none')};
  animation: ${({ open }) => (open ? showContainer : hideContainer)} 0.4s
    cubic-bezier(0.2, 0.87, 0.76, 0.98);
`

export const ModalMain = styled.div`
  position: fixed;
  background: white;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: ${({ open, scrollBarWidth }) =>
    !open ? scrollBarWidth / 2 + 'px' : 0};
  border-radius: 1px;

  display: flex;
  flex-direction: column;
  max-height: 90vh;

  ${MEDIA.MIN_BIGSCREEN`
    width: 55vw;
  `};

  ${MEDIA.BIGSCREEN`
    width: 65vw;
  `};

  ${MEDIA.DESKTOP`
    width: 90vw;
  `};

  ${MEDIA.PHONE`
    width: 95vw;
  `};
`

export const ModalHeader = styled.div`
  text-align: center;
  margin: 1rem 0;
  font-size: 4rem;
  font-weight: 900;

  ${MEDIA.TABLET`
    font-size: 3rem;
  `};
`

export const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
  font-weight: 300;

  strong {
    font-weight: 600;
  }

  ${MEDIA.PHONE`
    padding: 1rem;
  `};
`
