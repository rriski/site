import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Wrapper = styled.div`
  ${MEDIA.PHONE`
    display: grid;
    grid-template-rows: 50px;
  `};

  ${MEDIA.MIN_BIGSCREEN`
    padding: 0 15%;
  `};
`
