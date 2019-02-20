import styled from 'styled-components';
import Img from 'gatsby-image';
import { textcolor } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Wrapper = styled.div`
  display: block;
  position: relative;
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const Image = styled(Img)`
  box-shadow: -1px 5px 13px 0px rgba(0, 0, 0, 0.23);

  @media (hover: hover) {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Copy = styled.p`
  color: ${textcolor};
  margin: 0 2rem 4rem 2rem;

  ${MEDIA.PHONE`
    margin: 0 0 4rem 0;
  `};
`;
