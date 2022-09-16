import React from 'react'
import { FaEnvelope, FaGithub } from 'react-icons/fa'
import { Ul, Li, A } from './footer.css'

const Footer = () => (
  <Ul>
    <Li>
      <FaEnvelope />
      <A href="mailto:timo@timoriski.fi">Email</A>
    </Li>
    <Li>
      <FaGithub />
      <A href="https://github.com/rriski">Github</A>
    </Li>
  </Ul>
)

export default Footer
