import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        
          <img src={logo} className="logo" alt="logo" />
          <h4 className="greeting">Bom dia!</h4>
          <img src="" alt="user-avatar" className="avatar"/>
          <h4 className="user-name">Dax Oliveira</h4>
          <button></button>

          <nav>
            <ul>
              <li>Home</li>
              <li>Minha Conta</li>
              <li>Cartão de Crédito</li>
              <li>Gestão de Cobranças</li>
              <li>Benefícios</li>
              <li>Tarifas</li>
              <li>Drop-down</li>
            </ul>
          </nav>        
      </header>

      <body className="App-body">
        <h4>Seu rendimento desde a abertura da sua Conta Simples!</h4>
        <img src="" alt="graph of investment profits"/>
        <footer>
          <h4>Perguntas Frequents</h4>
          <h4>Converse com a gente!</h4>
        </footer>
      </body>

    </div>
  );
}

export default App;
