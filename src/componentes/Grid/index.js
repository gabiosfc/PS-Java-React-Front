import './Grid.css'
import React, { useEffect, useState, setValue, Component } from "react";
import { Button, Container, Table } from 'reactstrap';


class Grid extends Component {


  state = {
    transferencias: []
  };

  async componentDidMount() {
    alert('You clicked me!');
    const response = await fetch('/findAll');
    const body = await response.json();

    this.setState({ transferencias: body });
  }


    render () {
        
        return (
            <div className="App">
            <header className="App-header">
    
                <div className="App-intro">
                <h2>Transferências</h2>
    
                <Table className="saldos">
                    <thead>
                    <tr>
                        <th width="20%">Saldo Total: </th>
                        <td>{1000}</td>
                        <th width="20%">Saldo no Período: </th>
                        <td>{110}</td>
                    </tr>
                    </thead>
                </Table>
                <Table className="mt-4">
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
  
                </Table>
                </div>
            </header>
            </div>
        )
    }

}

export default Grid



