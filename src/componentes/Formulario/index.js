import CampoTexto from '../CampoTexto'
import './Formulario.css'
/*import CampoData from '../CampoData';
import 'react-datepicker/dist/react-datepicker.css';*/
import React, { useEffect, useState, setValue } from "react";
import Botao from '../Botao';
import axios from 'axios';

/*const data = [
    { id: 1, name: 'Dados', row: 1, col: 1 },
    { id: 2, name: 'Valentia', row: 1, col: 2 },
    { id: 3, name: 'teste', row: 1, col: 3 },
    { id: 4, name: 'ola', row: 2, col: 1 }
]

function Grid({ data }) {
    return (
        <table>
            <tbody>
                {data.map(cell => (
                    <tr key={cell.id}>
                        <td>{cell.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}*/



const Formulario = () => {
    //baseURL: 'http://localhost:8080/findAll';
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados abaixo para consulta:</h2>
                <CampoTexto label="ID Conta" placeholder="Digite o ID da Conta" />
                <CampoTexto label="Nome do Operador Transacionado" placeholder="Digite o nome do operador" />
                <Botao texto="Pesquisar"/>
            </form>
        </section>
    )
}

export default Formulario



