/*import './App.css';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Formulario />
    </div>
  );
}

export default App;*/

import './App.css';
import Formulario from './componentes/Formulario';
import React, { Component, logo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'reactstrap';


class App extends Component {



  state = {
    transferencias: []
  };

  async componentDidMount() {
    const response = await fetch('/findAll');
    const body = await response.json();

    this.setState({ transferencias: body });
  }

  

  render() {
    const { transferencias } = this.state;

    const transferenciaList = transferencias.map(transferencia => {
      return <tr key={transferencia.id}>
          <td style={{whiteSpace: 'nowrap'}}>{transferencia.id}</td>
          <td>{transferencia.dataTransferencia}</td>
          <td>{transferencia.valor}</td>
          <td>{transferencia.tipo}</td>
          <td>{transferencia.nomeOperadorTransacao}</td>
          <td>{transferencia.contaId}</td>
      </tr>
  });

    return (
      <div className="App">
        <header className="App-header">

          <div className="Form">
            <Formulario />
          </div>

          <div className="App-intro">
            <h2>Transferências</h2>
            <Table className="mt-4">
              <thead>
                <tr>
                <th width="40%">Saldo Total: </th>
                <th width="40%">Saldo no Período: </th>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th width="40%">ID</th>
                  <th width="40%">Data</th>
                  <th width="40%">Valor</th>
                  <th width="40%">Tipo</th>
                  <th width="40%">Nome Operador</th>
                  <th width="40%">Conta ID</th>
                </tr>
              </thead>
              <tbody>
                {transferenciaList}
              </tbody>
            </Table>
          </div>
        </header>
      </div>
    )


  }


}
export default App;