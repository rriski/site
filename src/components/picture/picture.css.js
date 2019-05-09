import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'
import Img from 'gatsby-image'

export const Image = styled(Img)`
  border-radius: 50%;
  grid-area: image;
  margin-right: 2rem;
  align-self: center;

  ${MEDIA.PHONE`
    margin: 3rem;
  `};
`
