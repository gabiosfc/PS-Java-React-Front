import './App.css';
import Formulario from './componentes/Formulario';
import React, { Component, logo, useState, setUpdated, state, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import './componentes/Botao/Botao.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const inputRef = useRef(null);

  const [contaId, setContaId] = useState('');
  const [nomeOperador, setNomeOperador] = useState('');
  const [dataInicio, setDataInicio] = useState();
  const [dataFim, setDataFim] = useState();

  const handleChange = (event) => {
    setContaId(event.target.value);
  };

  const handleChangeOperador = (event) => {
    setNomeOperador(event.target.value);
  };

  const handleChangeDataInicio = (event) => {
    setDataInicio(event.target.value);
  };

  const handleChangeDataFim = (event) => {
    setDataFim(event.target.value);
  };

  function convertDatePickerToString(dataInicio){
    var dataConvertida = '';

    dataConvertida += dataInicio.getFullYear() + '-';

    if ((dataInicio.getMonth()+1) < 10){
      dataConvertida += '0' 
    }

    dataConvertida += (dataInicio.getMonth()+1) + '-'; 

    if (dataInicio.getDate() < 10){
      dataConvertida += '0';
    }

    dataConvertida += dataInicio.getDate()

    return dataConvertida;

  }


  const handleClick = async () => {

    setIsLoading(true);
    try {

      var filters = '';
      if (contaId){
        filters += 'contaId=' + contaId;
      }
      if (nomeOperador){
        if (filters != ''){
          filters += '&';
        }
        filters += 'nomeOperador=' + nomeOperador;
      }
      if (dataInicio){
        if (filters != ''){
          filters += '&';
        }
        filters += 'dataInicio=' + convertDatePickerToString(dataInicio);
      }
      if (dataFim){
        if (filters != ''){
          filters += '&';
        }
        filters += 'dataFim=' + convertDatePickerToString(dataFim);
      }

      var url = '';

      if(filters != ''){
        url = '/findTransferenciaByFilters?' + filters;
      } else {
        url = '/findAll';
      }

      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
    } catch (err) {
      alert('Nenhum registro encontrado.');
      setData(null);
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };


  var valorTotal = 0;
  var valorTotalFixed = 0;

  if (data) {
    valorTotal = (data.reduce((a, v) => a = a + v.valor, 0));
    valorTotalFixed = (Math.round(valorTotal * 100) / 100).toFixed(2);
  }

  return (

    <div>
      <div className="Form">
        <section className="formulario">
          <form>
            <div className="campo-texto">
              <label>ID Conta</label>
              <input type="text" id="contaId" name="contaId" onChange={handleChange} value={contaId} />
            </div>
            <div className="campo-texto">
              <label>Nome Operador Transação</label>
              <input type="text" id="nomeOperador" name="nomeOperador" onChange={handleChangeOperador} value={nomeOperador} />
            </div>
            <div className="campo-data">
              <label>Data Início</label>
              <DatePicker selected={dataInicio} id="dataInicio" name="dataInicio" format='yyyy-MM-dd' onChange={date => setDataInicio(date)} />
            </div>
            <div className="campo-data">
              <label>Data Fim</label>
              <DatePicker selected={dataFim} id="dataFim" name="dataFim" format='yyyy-MM-dd' onChange={date => setDataFim(date)} />
            </div>
            <button onClick={handleClick} className='botao' >
              Pesquisar
            </button>
          </form>
        </section>
        
      </div>
      

      {isLoading && <h2>Loading...</h2>}

      {data && (
        <div>

          <h2>Transferências</h2>

          <Table className="saldos">
            <thead>
              <tr>
                <th width="20%">Saldo Total: </th>
                <td>{valorTotalFixed}</td>
                <th width="20%">Saldo no Período: </th>
                <td>{valorTotalFixed}</td>
              </tr>
            </thead>
          </Table>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="8%">ID</th>
                <th width="8%">Data</th>
                <th width="8%">Valor</th>
                <th width="8%">Tipo</th>
                <th width="8%">Nome Operador</th>
                <th width="8%">Conta ID</th>
              </tr>
            </thead>
            <tbody>
              {data.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.dataTransferencia}</td>
                    <td>{item.valor}</td>
                    <td>{item.tipo}</td>
                    <td>{item.nomeOperadorTransacao}</td>
                    <td>{item.contaId}</td>

                  </tr>
                );
              })}
            </tbody>

          </Table>
        </div>
      )}
    </div>
  );
};

export default App;