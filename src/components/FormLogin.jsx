function FormLogin({ nome, setNome, senha, setSenha}){
    return(
        <div>
            <label htmlFor="inputUsuario">
                <p>Usuário: </p>
                <input type="text" id="inputUsuario" onChange={(e) => setNome(e.target.value)} />
            </label>
            <label htmlFor="inputSenha">
                <p>Senha: </p>
                <input type="password" id="inputSenha" onChange={(e) => setSenha(e.target.value)}/>
            </label>
        </div>
    )
}

export default FormLogin;