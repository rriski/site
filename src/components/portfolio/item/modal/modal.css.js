import styled from 'styled-components';
import { textcolor } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Description = styled.div`
  p,
  ul {
    color: ${textcolor};
    line-height: 1.2;
  }

  ul {
    list-style: circle;
    padding-left: 4rem;

    li {
      p {
        margin-bottom: 0rem;
      }
    }
  }

  blockquote {
    margin: 0rem 1rem 1rem 3rem;
  }

  .gatsby-resp-image-wrapper {
    margin: 0 70px !important;

    ${MEDIA.PHONE`
      margin: 0 !important;
    `};
  }
`;
