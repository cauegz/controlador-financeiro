import React from 'react'

function FormDespesa({nome, setNome, valor, setValor, data, setData, salvarDespesa}) {
  return (
        <div>
            <h2>Adicionar despesa</h2>
            <label htmlFor="inputNomeDespesa">
                Nome: &nbsp;
                <input type="text" value={nome} id="inputNomeDespesa" onChange={(e) => setNome(e.target.value)}/>
            </label>
            <label htmlFor="inputValorDespesa">
                Valor: &nbsp;
                <input type="number" value={valor} id="inputValorDespesa" onChange={(e) => setValor(e.target.value)}/>
            </label>
            <label htmlFor="inputDataDespesa">
                Data: &nbsp;
                <input type="date" value={data} id="inputDataDespesa" onChange={(e) => setData(e.target.value)}/>
            </label>
            <button onClick={ salvarDespesa }> Enviar </button>
        </div>
  )
}

export default FormDespesa;