import TituloLista from "../componentes/TituloLista";
import axios from "axios";
import { useState, useEffect} from "react";

export default function ListaFuncionario (){
    //Delarando uma variável useState
    const [dados, setDados] = useState([]);

    const listar = async () => {
        let { data } = await axios.get(`http://localhost:4000/funcionario`);
        console.log(data);
        setDados(data);
    }

    useEffect( () => {
        listar();
    }, []);

    return(
        <>
            <TituloLista titulo="Funcionarios" descricao="Gerencie aqui os funcionários da biblioteca."
            rota="/cadastrofuncionario"/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">ID</th>
                            <th scope="col">Funcionário</th>
                            <th scope="col">E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            { dados.map( (d, i)=>(
                            <tr>
                                <td>
                                    <a className='btn btn-primary' href={`/cadastrofuncionario/${d.idfuncionario}`}>Alterar</a>
                                </td>
                                <td>{d.idfuncionario}</td>
                                <td>{d.nomefuncionario}</td>
                                <td>{d.email}</td>
                            </tr>
                            ))}
                            
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};