import React from 'react';
import { Consumer } from 'store/createContext';
import Nav from 'components/header/nav';

const NavContainer = () => (
  <Consumer>
    {({ portfolioRef, experienceRef, skillsRef }) => (
      <Nav
        portfolioRef={portfolioRef}
        experienceRef={experienceRef}
        skillsRef={skillsRef}
      />
    )}
  </Consumer>
);

NavContainer.propTypes = {};

export default NavContainer;
