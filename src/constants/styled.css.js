import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.div`
  padding: 0 4rem;

  ${MEDIA.PHONE`
    padding: 1rem;
  `};
`

export const H = styled.h1`
  font-size: 50px;
  font-weight: 900;

  ${MEDIA.PHONE`
    font-size: 30px;
  `};
`

export const A = styled.a`
  color: black;
  text-decoration: none;
  margin: ${({ margin }) => margin};
`

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 1.5rem 0 2rem;

  ${MEDIA.PHONE`
    margin: 1rem 0;
  `};

  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.3);
    transform-origin: bottom right;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`
