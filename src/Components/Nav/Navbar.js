import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../logo.svg';

const Nav = styled.nav`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: .2rem solid #45b34a;

  img {
    display: block;
    float: left;
    padding: 4px 20px 5px 0;
    width: 190px;
    opacity: .9;
    margin-left: .4rem;
  }

  .container {
    position: fixed;
    z-index: 999;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
    }
`;

const Navbar = () => {
  return (
    <Nav className="container">
      <img src={ logo } alt="Logo Conta Simples"/>
      <Burger />
    </Nav>
  )
}

export default Navbar