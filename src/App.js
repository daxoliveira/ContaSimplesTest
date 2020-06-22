import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Components/Nav/';

import Home from './Views/Home/';
import MinhaConta from './Views/MinhaConta/';
import CartaoDeCredito from './Views/CartaoDeCredito/';
import GestaoDeCobrancas from './Views/GestaoDeCobrancas/';

import Footer from './Components/Footer/';

import contas from './contas.json';
import './index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      logged: false,
      usuario: {},
    }

    this.checkLogin = this.checkLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  checkLogin(usuarioLogged) {
    const { email, senha } = usuarioLogged;
    const loggedin = contas.filter((e) => e.email === email && e.senha === senha)
    loggedin.length > 0 ? this.setState({logged: true, usuario: loggedin[0]}) : this.setState({logged: false, usuario: {}})
  }

  logout() {
    this.setState({logged: false, usuario:{}})
  }
  
  render() {    
    return (
      <div className="App">
        <Navbar logged={this.state.logged} logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={() => <Home usuario={this.state.usuario} logged={this.state.logged} checkLogin={this.checkLogin}/>} />


          <Route exact path="/minhaconta" render={() => <MinhaConta usuario={this.state.usuario} logged={this.state.logged} checkLogin={this.checkLogin} />} />
          <Route exact path="/cartaodecredito" render={() => <CartaoDeCredito usuario={this.state.usuario} logged={this.state.logged} checkLogin={this.checkLogin} />} />
          <Route exact path="/gestaodecobrancas" render={() => <GestaoDeCobrancas usuario={this.state.usuario} logged={this.state.logged} checkLogin={this.checkLogin} />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
