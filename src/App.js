import React from 'react';
import styled from 'styled-components';

import Navbar from './Components/Nav/Navbar';
import MainSection from './Components/Main/MainSection';
import Footer from './Components/Footer/Footer';

const div = styled.div`
  border-bottom: 2px solid #333;
  width: 100%;
  margin: 0 auto;


  @media (min-width: 1200px) {
    max-width: 1140px;
    }
`;

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
