import React from 'react';
import { Router } from '@reach/router';

import Home from './pages/Home';
import MinhaConta from './pages/MinhaConta';
import CartaoDeCredito from './pages/CartaoDeCredito';
import GestaoDeCobrancas from './pages/GestaoDeCobrancas';
import Beneficios from './pages/Beneficios';
import Tarifas from './pages/Tarifas';

import Navigation from './Components/Navigation'
import logo from './logo.svg';
import './App.css';

function App() {
  const navLinks = [
		{
			text: 'Home',
			path: '/',
			icon: 'ion-ios-home'
		},
		{
			text: 'Minha Conta',
			path: '/minhaconta',
			icon: 'ion-ios-megaphone'
		},
		{
			text: 'Cartão de Crédito',
			path: '/cartaodecredito',
			icon: 'ion-ios-business'
		},
		{
			text: 'Gestão de Cobranças',
			path: '/gestaodecobrancas',
			icon: 'ion-ios-bonfire'
		},
		{
			text: 'Benefícios',
			path: '/beneficios',
			icon: 'ion-ios-briefcase'
    },
    {
			text: 'Tarifas',
			path: '/tarifas',
			icon: 'ion-ios-briefcase'
		}
  ]
  
  return (
    <div className="App">
      <Navigation
        navLinks={ navLinks }
        logo= { logo }
      />

      <Router>
        <Home path="/"/>
        <MinhaConta path="/minhaconta"/>
        <CartaoDeCredito path="/cartaodecredito"/>
        <GestaoDeCobrancas path="/gestaodecobrancas" />
        <Beneficios path="/beneficios" />
        <Tarifas path="/tarifas" />
      </Router>
    </div>
    );
  }
  
  export default App;




    // <>
    //   <div className="header-top">
    //     <div className="logo-and-greeting">
    //       <img src={logo} className="logo" alt="logo" />
    //       <h4 className="greeting">Bom dia!</h4>
    //     </div>
    //     <div className="avatar-name-logout">
    //       <img src="" alt="user avatar" className="user-avatar"/>
    //       <h4 className="user-name">Dax Oliveira</h4>
    //       <button></button>
    //     </div>
    //   </div>

    //   <header>
    //     <h1 class="logo">Logo</h1>
    //     <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
    //     <nav>
    //       <ul>
    //         <li><a href="">Home</a></li>
    //         <li><a href="">Minha Conta</a></li>
    //         <li><a href="">Cartão de Crédito</a></li>
    //         <li><a href="">Gestão de Cobranças</a></li>
    //         <li><a href="">Benefícios</a></li>
    //         <li><a href="">Tarifas</a></li>
    //       </ul>
    //     </nav>
    //     <label for="nav-toggle" class="nav-toggle-label">
    //       <span></span>
    //     </label>
    //   </header>

    //   <main>
    //     <h4>Seu rendimento desde a abertura da sua Conta Simples!</h4>
    //     <img src="" alt="graph of investment profits"/>
    //   </main>

    //   <footer>
    //     <h4>Perguntas Frequents</h4>
    //     <h4>Converse com a gente!</h4>
    //   </footer>
    // </>
