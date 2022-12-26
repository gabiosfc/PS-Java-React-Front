import CampoTexto from '../CampoTexto'
import './Formulario.css'
import CampoData from '../CampoData';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState, setValue } from "react";
import Botao from '../Botao';
import axios from 'axios';


const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados abaixo para consulta:</h2>
                <CampoTexto label="ID Conta" name="contaId" placeholder="Digite o ID da Conta" />
                <CampoTexto label="Nome do Operador Transacionado" placeholder="Digite o nome do operador" />
                <CampoData label="Data Início" onChange={(newValue) => setValue(newValue)} />
                <CampoData label="Data Fim" onChange={(newValue) => setValue(newValue)} />
            </form>
        </section>
    )
}

export default Formulario



