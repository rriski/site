import styled from 'styled-components';
import { textcolor } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  font-size: 2rem;

  ${MEDIA.PHONE`
    font-size: 1.2rem;
  `};
`;

export const A = styled.a`
  color: ${textcolor};
  transition: color 0.2s ease;
  text-decoration: none;
  margin-right: 2rem;

  &:hover {
    color: inherit;
  }

  ${MEDIA.PHONE`
    margin-right: 1rem;
  `};
`;
