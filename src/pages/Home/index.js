
import { useEffect, useState } from "react";
import './home.css';


function Home(){

    
    /*
    const [primeironome, setPrimeiroNome] = useState('');
    const [ultimonome, setUltimoNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [morada, setMorada] = useState('');

    const [user, setUser] = useState({

        primeironome:primeironome,
        ultimonome:ultimonome,
        email:email,
        telefone:telefone,
        morada:morada
    });*/


    const [users, setUsers] = useState({

        primeironome: '',
        ultimonome: '',
        email: '',
        morada: '',
        telefone: '',
    });

    function Register(e){

        e.preventDefault();

        const minhaListaUsuarios = localStorage.getItem("@usuarios");

        let usuariosSalvos = JSON.parse(minhaListaUsuarios) || [];

        //const hasUsuario = usuariosSalvos.some((usuario) => usuario.email === usuario.email)

        if(usuariosSalvos.email.ultimonome === usuariosSalvos.email.ultimonome){

            alert("ESSE USUARIO JÁ EXISTE NA LISTA");
            return;

        }
        usuariosSalvos.push(users);
        localStorage.setItem("@usuarios", JSON.stringify(usuariosSalvos));
        alert("USUARIO CADASTRADO COM SUCESSO");
     

    }


    return(

        <div className="formulario">
            <form>
                <label>Primeiro Nome:</label><br/>
                <input 
                placeholder="Digite seu primeiro nome"
                value={users.primeironome}
                onChange={(event) => {
                    event.persist();
                    const {name, value} = event.target;
                    setUsers({...users, [name]: value})
                }}
                /><br/>
                <label>Ultimo Nome:</label><br/>
                <input 
                placeholder="Digite o seu ultimo nome"
                value={users.ultimonome}
                onChange={(event) => {
                    
                    const [name, value] = event.target;
                    setUsers({...users, [name]: value})
                }}
                /><br/>
                <label>E-mail</label><br/>
                <input 
                    placeholder="Digite o seu email"
                    value={users.email}
                    onChange={(event) =>{
                        const [name, value] = event.target;
                        setUsers({...users, [name]: value})
                    } }
                /><br/>
                <label>Telefone:</label><br/>
                <input 
                    placeholder="Digite o numero de telefone"
                    value={users.telefone}
                    onChange={(event) =>{
                        const [name, value] = event.target;
                        setUsers({...users, [name]: value})
                    }}
                /><br />
                <label>Morada:</label><br />
                <input 
                    placeholder="Digite a sua morada"
                    value={users.morada}
                    onChange={(event) =>{
                        const [name, value] = event.target;
                        setUsers({...users, [name]: value})
                    }}
                /><br />

                <button onClick={Register}>Cadastrar</button>
            </form>
        </div>

    )

}

export default Home;