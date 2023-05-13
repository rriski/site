import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { textcolor } from 'constants/theme'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.div`
  display: block;
  position: relative;
`

export const Figure = styled.figure`
  margin: 0;
`

export const Image = styled(GatsbyImage)`
  box-shadow: -1px 5px 13px 0px rgba(0, 0, 0, 0.23);

  @media (hover: hover) {
    transition: all 0.1s ease-in-out;
    &:hover {
      transform: scale(1.01);
    }
  }
`

export const Copy = styled.p`
  color: ${textcolor};
  margin: 1rem 0;

  ${MEDIA.PHONE`
    margin: 1rem 0 4rem 0;
  `};
`
