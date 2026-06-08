import React from 'react'

function FormReceita({nome, setNome, valor, setValor, data, setData, salvarReceita}) {
  return (
        <div>
            <h2>Adicionar receita</h2>
            <label htmlFor="inputNomeReceita">
                Nome: &nbsp;
                <input type="text" value={nome} id="inputNomeReceita" onChange={(e) => setNome(e.target.value)}/>
            </label>
            <label htmlFor="inputValorReceita">
                Valor: &nbsp;
                <input type="number" value={valor} id="inputValorReceita" onChange={(e) => setValor(e.target.value)}/>
            </label>
            <label htmlFor="inputDataReceita">
                Data: &nbsp;
                <input type="date" value={data} id="inputDataReceita" onChange={(e) => setData(e.target.value)}/>
            </label>
            <button onClick={ salvarReceita }> Enviar </button>
        </div>
  )
}

export default FormReceita;