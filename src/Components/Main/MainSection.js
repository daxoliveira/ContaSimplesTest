import React from 'react';
import Login from '../Login';

const MainSection = (props) => {
  const { logged, usuario, checkLogin } = props;
    return(
      <div>
        {
          logged
            ? 
            (<div><h1>Bem vindo {usuario.nome}</h1></div>)
            : 
            <Login checkLogin={checkLogin} />
        }
      </div>
    );
}

export default MainSection;
