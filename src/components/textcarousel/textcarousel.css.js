import styled, { keyframes, css } from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const slideFromLeft = keyframes`
  from {
    opacity: 0.2;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Wrapper = styled.div`
  grid-area: textcarousel;
`

export const Ul = styled.ul`
  position: relative;
`

export const Li = styled.li`
  opacity: 0;
  height: 0;
  font-size: 4rem;
  font-weight: 100;

  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideFromLeft} 1s cubic-bezier(.2,.94,.71,1.02) forwards;
        `
      : 'none'};

  ${({ isVisible }) =>
    isVisible &&
    css`
      height: auto;
      display: block;
      opacity: 1;
    `};

  ${MEDIA.TABLET`
    font-size: 3rem;
  `};

  ${MEDIA.PHONE`
    text-align: center;
    font-size: 2rem;
  `};
`
