import { useNavigate } from "react-router-dom";
import { estaLogado } from "../utils/auth";
import { useEffect, useState } from "react";


// TODO:
// 1 - adicionar <ProtectedRoute />

function Home(){
    const navigate = useNavigate();
    useEffect(() => {
        if(!estaLogado()){
            navigate('/login')
        }
    }, [navigate])

    

    const usuario = JSON.parse(
        sessionStorage.getItem("usuario")
    );

    const [transacoes, setTransacoes] = useState([]);

    useEffect(() => {
        const dados = localStorage.getItem("transacoes_" + usuario.nome)
        if(dados){
            setTransacoes(JSON.parse(dados));
        } else {
            setTransacoes([]);
        }
    }, []);

    const [valorReceita, setValorReceita] = useState(0);
    const [dataReceita, setDataReceita] = useState('');
    const [nomeReceita, setNomeReceita] = useState('');

    const [valorDespesa, setValorDespesa] = useState(0);
    const [dataDespesa, setDataDespesa] = useState('');
    const [nomeDespesa, setNomeDespesa] = useState('');

    function salvarReceita(){
        const novaReceita = {
            tipo: "receita",
            nome: nomeReceita,
            valor: Number(valorReceita),
            data: dataReceita
        }
        setTransacoes([...transacoes, novaReceita])
        salvaLocal([...transacoes, novaReceita]);
    }
    
    function salvaLocal(transacoes){
        localStorage.setItem("transacoes_" + usuario.nome, JSON.stringify(transacoes));
    }

    function salvarDespesa(){
        const novaDespesa = {
            tipo: "despesa",
            nome: nomeDespesa,
            valor: Number(valorDespesa),
            data: dataDespesa
        }

        setTransacoes([...transacoes, novaDespesa])
        salvaLocal([...transacoes, novaDespesa]);
    }

    const saldo = transacoes.reduce((acc, atual) => {
        return atual.tipo == "receita" 
            ? acc + atual.valor 
            : acc - atual.valor}
        , 0);

    return (
        <div>
            <h1>Controlador Financeiro</h1>
            <h2>Bem-vindo {usuario?.nome}</h2>
            <section>
                <div>
                    <h2>Adicionar receita</h2>
                    <label htmlFor="inputNomeReceita">
                        Nome: &nbsp;
                        <input type="text" id="inputNomeReceita" onChange={(e) => setNomeReceita(e.target.value)}/>
                    </label>
                    <label htmlFor="inputValorReceita">
                        Valor: &nbsp;
                        <input type="number" id="inputValorReceita" onChange={(e) => setValorReceita(e.target.value)}/>
                    </label>
                    <label htmlFor="inputDataReceita">
                        Data: &nbsp;
                        <input type="date" id="inputDataReceita" onChange={(e) => setDataReceita(e.target.value)}/>
                    </label>
                    <button onClick={ salvarReceita }> enviar </button>
                </div>
                <div>
                    <h2>Adicionar despesa</h2>
                    <label htmlFor="inputNomeDespesa">
                        Nome: &nbsp;
                        <input type="text" id="inputNomeDespesa" onChange={(e) => setNomeDespesa(e.target.value)}/>
                    </label>
                    <label htmlFor="inputValorDespesa">
                        Valor: &nbsp;
                        <input type="number" id="inputValorDespesa" onChange={(e) => setValorDespesa(e.target.value)}/>
                    </label>
                    <label htmlFor="inputDataDespesa">
                        Data: &nbsp;
                        <input type="date" id="inputDataDespesa" onChange={(e) => setDataDespesa(e.target.value)}/>
                    </label>
                    <button onClick={ salvarDespesa }> enviar </button>

                </div>
            </section>
            <section>
                <div>
                    <h2>Histórico de transações</h2>
                    <table border={1}>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Valor</td>
                                <td>Data</td>
                            </tr>
                        </thead>
                        <tbody>
                            {transacoes.map((transacao, index) => (
                                <tr key={index}>
                                    <td>{transacao.nome}</td>
                                    <td>{transacao.valor}</td>
                                    <td>{transacao.data}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <section>
                <h2>Saldo: { saldo }</h2>
            </section>
        </div>
    )
}
export default Home;