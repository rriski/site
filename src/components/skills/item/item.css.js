import styled, { keyframes, css } from 'styled-components'
import { textcolor } from 'constants/theme'
import MEDIA from 'helpers/mediaTemplates'

export const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: 0;
  }
`

export const Wrapper = styled.div`
  visibility: ${({ isVisible }) =>
    isVisible
      ? css`
          'visible'
        `
      : 'hidden'};
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideFromLeft} 0.5s ease-out forwards;
        `
      : 'none'};
`

export const Title = styled.div`
  line-height: 1.3;
  margin: 2rem 2rem 1rem 2rem;
  font-weight: 700;

  ${MEDIA.PHONE`
    margin: 0;
  `};
`

export const Description = styled.p`
  color: ${textcolor};
  margin: 2rem;
  line-height: 1.3;

  ${MEDIA.PHONE`
    margin: 0 0 2rem 0;
  `};
`
