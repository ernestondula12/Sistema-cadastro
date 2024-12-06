
import Cadastrados from "../../pages/Cadastrados";
import { Link } from "react-router-dom";
import './header.css';



function Header(){

    return(

        <div>

            <header className="cabecalho">
            <h2>Sistema de Cadastro</h2>

                <div>
                <Link to="/cadastrados">Ver cadastrados</Link>
                </div>
        
            </header>

        </div>

    )

}

export default Header;