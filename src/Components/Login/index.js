import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agencia: "",
      conta: "",
      senha: "",

    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.checkLogin(this.state); 
  }

  render(){
    const { agencia, conta, senha } = this.state;
    
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Agencia:
          <input type="text" name="agencia" value={ agencia } onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Conta:
          <input type="text" name="conta" value={ conta } onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
          Senha:
          <input type="password" name="senha" value={ senha } onChange={this.handleChange}/>
        </label>
        <br/>
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default Login
