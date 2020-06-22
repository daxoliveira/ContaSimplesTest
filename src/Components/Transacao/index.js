import React from 'react';


function Transacao(props) {
  return(
    <div>
      <h6>{props.transacao}</h6>
      <p>{props.empresa}</p>
      <p>R$ {props.valor}</p>
      <p>{props.data}</p>
    </div>
  )
}

export default Transacao;
