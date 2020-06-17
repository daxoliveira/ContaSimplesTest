import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import MainSection from './Components/Main/MainSection';
import Footer from './Components/Footer/Footer';
import contas from './contas.json';

const div = styled.div`
  border-bottom: 2px solid #333;
  width: 100%;
  margin: 0 auto;


  @media (min-width: 1200px) {
    max-width: 1140px;
    }
`;

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      usuario: {},
    }

    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin(usuarioLogged) {
    const { agencia, conta, senha } = usuarioLogged;
    const loggedin = contas.filter((e) => e.agencia === agencia && e.conta === conta && e.senha === senha)
    loggedin.length > 0 ? this.setState({logged: true, usuario: loggedin[0]}) : this.setState({logged: false, usuario: {}})
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <MainSection usuario={this.state.usuario} logged={this.state.logged} checkLogin={this.checkLogin} />} />
          {/* <Route exact path="/credito" render={() => <Credito usuario={this.state.usuario}/>} />
          <Route exact path="/clientes" render={() => <Clientes usuario={this.state.usuario}/>} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
