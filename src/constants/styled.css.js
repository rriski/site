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

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 800;
  margin: 2rem 2rem 1rem 2rem;

  ${MEDIA.PHONE`
    margin: 1rem 0;
  `};
`
