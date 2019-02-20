import styled from 'styled-components';
import { textcolor } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Ul = styled.ul`
  padding: 4rem;
  color: ${textcolor};

  ${MEDIA.PHONE`
    padding: 1rem;
  `};

  svg {
    vertical-align: middle;
  }
`;

export const Li = styled.li`
  display: inline-block;
  margin-right: 2rem;
`;

export const A = styled.a`
  margin-left: 0.5rem;
`;
