import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class TransferenciaList extends Component {

    constructor(props) {
        super(props);
        this.state = {transferencias: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/transferencias')
            .then(response => response.json())
            .then(data => this.setState({transferencias: data}));
    }
}
export default TransferenciaList;