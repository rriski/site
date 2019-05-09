import styled from 'styled-components'
import { textcolor } from 'constants/theme'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  ${MEDIA.PHONE`
    padding: 1rem 1rem 3rem 1rem;
  `};

  a {
    color: ${textcolor};
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 3.2rem;
  line-height: 1.2;
  grid-area: title;

  ${MEDIA.TABLET`
    font-size: 2rem;
  `};

  ${MEDIA.PHONE`
    font-size: 1.4rem;
  `};
`
