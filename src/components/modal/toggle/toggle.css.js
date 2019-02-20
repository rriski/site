import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const ToggleModal = styled.div`
  height: 20px;
  width: 20px;
  position: fixed;
  top: 1.2rem;
  left: 1.2rem;

  ${MEDIA.TABLET`
    top: 0.5rem;
    left: 0.5rem;
  `};

  &:before,
  &:after {
    border-radius: 3px;
    transform: rotate(-45deg);
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.5px;
    margin-left: -15px;
    display: block;
    height: 3px;
    width: 30px;
    background-color: black;
    transition: all 0.18s ease-out;

    ${MEDIA.TABLET`
      width: 20px;
      margin-left: -10px;
    `};
  }

  &:after {
    transform: rotate(-135deg);
  }

  &:hover {
    &:before,
    &:after {
      transform: rotate(0deg);
    }
  }
`;
