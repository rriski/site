import styled, { keyframes, css } from 'styled-components';
import { textcolor } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: 0;
  }
`;

export const Wrapper = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideFromLeft} 0.5s ease-out forwards;
        `
      : 'none'};
`;

export const Li = styled.li`
  color: ${textcolor};
  margin: 0 2rem;
  font-style: italic;
  font-size: 1.3rem;
  line-height: 1.4;

  ${MEDIA.PHONE`
    margin: 0.5rem 0;
    font-size: 1.1rem;
    line-height: 1;
  `};
`;

export const Description = styled.p`
  color: ${textcolor};
  margin: 2rem;
  text-align: justify;
  line-height: 1.3;

  ${MEDIA.PHONE`
    margin: 2rem 0;
  `};
`;
