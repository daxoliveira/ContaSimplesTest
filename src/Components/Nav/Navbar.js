import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .logo {
    padding: 15px 0;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
    }
`;

const Navbar = () => {
  return (
    <Nav>
      <img src="../../logo.svg" alt="Conta Simples Logo"/>
      <Burger />
    </Nav>
  )
}

export default Navbar