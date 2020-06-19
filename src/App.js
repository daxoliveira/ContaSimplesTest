import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Nav/Navbar';
import Home from './Views/Home/';
import MinhaConta from './Views/MinhaConta/';
import Footer from './Components/Footer/Footer';
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
    const { agencia, conta, senha } = usuarioLogged;
    const loggedin = contas.filter((e) => e.agencia === agencia && e.conta === conta && e.senha === senha)
    loggedin.length > 0 ? this.setState({logged: true, usuario: loggedin[0]}) : this.setState({logged: false, usuario: {}})
  }

  logout() {
    this.setState({logged: false, usuario:{}})
  }
  
  render() {
    console.log(this.state);
    
    return (
      <div className="App">
        <Navbar logged={this.state.logged} logout={this.logout}/>
        <Switch>
          <Route exact path="/" render={() => <Home usuario={this.state.usuario} logged={this.state.logged} checkLogin={this.checkLogin} />} />
          <Route exact path="/minhaconta" render={() => <MinhaConta usuario={this.state.usuario} logged={this.state.logged} checkLogin={this.checkLogin} />} />
          {/* <Route exact path="/credito" render={() => <Credito usuario={this.state.usuario}/>} />
          <Route exact path="/clientes" render={() => <Clientes usuario={this.state.usuario}/>} /> */}
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
