import FormLogin from "../components/FormLogin";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

function Login(){
    const bancoExemplo = [
        {
            id: 1,
            nome: 'joao',
            senha: '1234'
        },
        {
            id: 2,
            nome: 'maria',
            senha: 'abcd'
        }
    ]

    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    function usuarioEncontrado() {
        return bancoExemplo.find(
            usuario => 
                usuario.nome === nome &&
                usuario.senha === senha
        )
    } 

    function login(){
        const usuario = usuarioEncontrado();
        if(usuario){
            sessionStorage.setItem("usuario", JSON.stringify(usuario))
            navigate('/home');
        } else {
            setErro('usuario ou senha invalidos')
        }
    }

    return (
        <div>
            <span>{ erro }</span>
            <FormLogin nome={ nome } setNome={ setNome } senha={ senha } setSenha={ setSenha } />
            <button onClick={ login }>enviar</button>
        </div>
    )
}

export default Login;