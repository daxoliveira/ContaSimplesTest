import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
    margin: 0 auto;
    width: 100%;

  @media (min-width: 1200px) {
    max-width: 1140px;
    }
`;

const MainSection = () => {
  return (
      <Main>
        Nav Bar
      </Main>
  )
}

export default MainSection