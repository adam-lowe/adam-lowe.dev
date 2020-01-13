import React from 'react';
import { Link } from 'gatsby';
import logo from 'assets/images/logo.png';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/">
      <img src={logo} width="50px" height="50px" alt="It's my logo!" />
    </Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
