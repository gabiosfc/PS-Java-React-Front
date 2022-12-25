import './App.css';
import Formulario from './componentes/Formulario';
import React, { Component, logo, useState, state } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';
import './componentes/Botao/Botao.css'

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/findAll');

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  var valorTotal = 0;
  var valorTotalFixed = 0;

  if(data){
    valorTotal = (data.reduce((a,v) =>  a = a + v.valor , 0 ));
    valorTotalFixed = (Math.round(valorTotal * 100) / 100).toFixed(2);
  }

  return (

    <div>
      <div className="Form">
            <Formulario />
            <button className='botao' onClick={handleClick}>
              Pesquisar
            </button>
      </div>
      {err && <h2>{err}</h2>}

      

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
                      <td>{ item.id }</td>
                      <td>{ item.dataTransferencia }</td>
                      <td>{ item.valor }</td>
                      <td>{ item.tipo }</td>
                      <td>{ item.nomeOperadorTransacao }</td>
                      <td>{ item.contaId }</td>
                      
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