import { useNavigate } from "react-router-dom";
import { estaLogado } from "../utils/auth";
import { useEffect } from "react";

//TODO:
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
    return (
        <div>
            <h1>home</h1>
            <h2>Olá, {usuario?.nome}</h2>
        </div>
    )
}
export default Home;