export function estaLogado(){
    const usuario = sessionStorage.getItem('usuario')
    
    if(usuario != null){
        return true
    }
    return false
}