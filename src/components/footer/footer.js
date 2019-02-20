import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { Ul, Li, A } from './footer.css';

const Footer = () => (
  <Ul>
    <Li>
      <FaEnvelope />
      <A href="mailto:timo.h.riski@outlook.com">Email</A>
    </Li>
    <Li>
      <FaGithub />
      <A href="https://github.com/rriski">Github</A>
    </Li>
  </Ul>
);

export default Footer;
