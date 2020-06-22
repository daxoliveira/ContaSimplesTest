import React from 'react';
// import TransacaoComp from '../../Components/Transacao/';

function MinhaConta(props) {

    const transacao = props.usuario.minhaconta;
    console.log(transacao);
    
    // const transacaoRenderizada = transacao.map((eachTransaction) => {
    //     return (
    //             <TransacaoComp 
    //             transacao={eachTransaction.transacao}
    //             empresa={eachTransaction.empresa}
    //             valor={eachTransaction.valor} 
    //             data={eachTransaction.valor}
    //             />
    //         )
    //     }
    // );

    return (
        <div>
            <div>
                <h1>R$ 31.276,49</h1>
                <h4>Último rendimento <strong>+R$ 12.02</strong> (6 de Agosto)</h4>
                <button>DEPOSITAR</button>                
            </div>
            <div>
                <h5>ÚLTIMAS MOVIMENTAÇÕES</h5>
                <hr/>
                {/* {transacaoRenderizada} */}
            </div>
        </div>
    )
}

export default MinhaConta