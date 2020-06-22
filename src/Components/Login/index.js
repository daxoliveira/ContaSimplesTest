import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
    const { email, senha } = this.state;
    
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          E-mail:
          <input type="text" name="email" value={ email } onChange={this.handleChange}/>
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
