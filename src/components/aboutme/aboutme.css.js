import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const Container = styled.div`
  padding: 4rem;
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 'image text';
  grid-template-columns: 1fr 1fr;

  ${MEDIA.PHONE`
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      'text'
      'image';
  `};

  ${MEDIA.MIN_TABLET`
    grid-template-columns: 1fr 2fr;
  `};

  ${MEDIA.MIN_DESKTOP`
    grid-template-columns: 1fr 3fr;
  `};
`

export const TextWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-area: text;
  grid-auto-rows: minmax(min-content, max-content);
  grid-template-areas:
    'title'
    'textcarousel';

  ${MEDIA.PHONE`
    justify-items: center;
  `};
`

export const Title = styled.div`
  font-weight: 800;
  font-size: 5rem;
  line-height: 1.2;
  grid-area: title;

  ${MEDIA.TABLET`
    font-size: 4rem;
  `};

  ${MEDIA.PHONE`
    font-size: 3rem;
  `};
`
