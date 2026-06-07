import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Login from "./pages/Login"
import { Outlet } from "react-router-dom";

function App(){
    return (
        <div>
            <Cabecalho />
            
            <Outlet />

            <Rodape />
        </div>
    )
}
export default App;