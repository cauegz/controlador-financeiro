import React, { useState, useEffect } from 'react';


function PopUpEditar({transacao, onClose}){
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState(0);
    const [data, setData] = useState('');

    const [nomeInput, setNomeInput] = useState('');
    const [valorInput, setValorInput] = useState(0);
    const [dataInput, setDataInput] = useState('');

    useEffect(() => {
        setNomeInput(transacao.nome);
        setValorInput(transacao.valor);
        setDataInput(transacao.data);
    }, [])

    function salvar(){

    }
    return (
        <div style={{ backgroundColor: "black", width: "500px", height: "500px"}}>
            <label htmlFor="inputEditarNome">
                Nome: 
                <input type="text" id="inputEditarNome" value={nomeInput} onChange={(e) => setNome(e.target.value)}/>
            </label>
            <label htmlFor="inputEditarValor">
                Valor:
                <input type="number" id="inputEditarValor" value={valorInput} onChange={(e) => setValor(e.target.value)}/>
            </label>
            <label htmlFor="inputEditarData">
                Data:
                <input type="date" id="inputEditarData" value={dataInput} onChange={(e) => setData(e.target.value)}/>
            </label>
            <button onClick={onClose}>
                Cancelar
            </button>
            
        </div>
    );
}

export default PopUpEditar;