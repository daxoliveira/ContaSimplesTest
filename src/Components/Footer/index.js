import React from 'react';
import styled from 'styled-components';

const Ftr = styled.footer`
    margin: 0 auto;
    margin-top: 2rem;
    width: 100%;
    border: .1rem solid black;

  @media (min-width: 1200px) {
    max-width: 1140px;
    }
`;

const Footer = () => {
  return (
    <Ftr>
        Footer
    </Ftr>
  )
}

export default Footer