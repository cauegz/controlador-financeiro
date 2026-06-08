import { useNavigate } from "react-router-dom";
import { estaLogado } from "../utils/auth";
import { useEffect, useState } from "react";
import FormReceita from "../components/FormReceita.jsx";
import FormDespesa from "../components/FormDespesa.jsx";


// TODO:
// 1 - adicionar <ProtectedRoute />
// 2 - implementar a edição de transações
// 3 - fazer css

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
            id: Date.now(),
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
            id: Date.now(),
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
            : acc - atual.valor
        }
    , 0);
    
    function excluirTransacao(id){
        const novasTransacoes = transacoes.filter(
            transacao => transacao.id != id
        );
        setTransacoes(novasTransacoes);
        salvaLocal(novasTransacoes);
    }
    
    function editarTransacao(id){
        // implementar depois
    }

    return (
        <div>
            <h1>Controlador Financeiro</h1>
            <h2>Bem-vindo {usuario?.nome}</h2>
            <section>
                <FormReceita 
                    nome={nomeReceita} 
                    setNome={setNomeReceita} 
                    valor={valorReceita} 
                    setValor={setValorReceita} 
                    data={dataReceita} 
                    setData={setDataReceita} 
                    salvarReceita={salvarReceita}
                />
                
                <FormDespesa 
                    nome={nomeDespesa} 
                    setNome={setNomeDespesa} 
                    valor={valorDespesa} 
                    setValor={setValorDespesa} 
                    data={dataDespesa} 
                    setData={setDataDespesa} 
                    salvarDespesa={salvarDespesa}
                />
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
                                <td>Ações</td>
                            </tr>
                        </thead>
                        <tbody>
                            {transacoes.map((transacao, index) => (
                                <tr key={index}>
                                    <td>{transacao.nome}</td>
                                    <td>{transacao.valor}</td>
                                    <td>{transacao.data}</td>
                                    <td>
                                        <a onClick={() => editarTransacao(transacao.id)}>editar</a> 
                                        |
                                        <a onClick={() => excluirTransacao(transacao.id)}>excluir</a>
                                    </td>
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