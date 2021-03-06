import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  .button {
    font-size: .8rem;
    font-weight: bold;
    text-decoration: none;
    color: #45b34a;
    border-radius: 0.3rem;
    border: 1px solid #45b34a;
    padding: .9rem;
    cursor: pointer;
    transition: background-color 250ms;
    background-color: #fff;
  }

  .button:hover {
    background-color: #62bd07;
    color: #fff;
    border: .1rem solid #7be115;
    border-radius: 0.3rem;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #315126;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

  }
`;

const RightNav = (props) => {
return props.logged 
  ? (
    <Ul open={props.open}>
      <li><Link to="/minhaconta" className="button" onClick={() => props.setOpen(false)}>MINHA CONTA</Link></li>
      <li><Link to="/cartaodecredito" className="button">CARTÃO DE CRÉDITO</Link></li>
      <li><Link to="/gestaodecobrancas" className="button">GESTÃO DE COBRANÇAS</Link></li>
      <li><Link to="/" className="button" onClick={props.logout}>LOGOUT</Link></li>
    </Ul>
  )
  : null
}

export default RightNav