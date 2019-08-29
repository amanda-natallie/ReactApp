import React, { Component } from 'react';
import CadastrarCliente from '../modules/CadastroCliente/containers';
export default class CADClient extends Component {
    render() {
        return (
            <div>
                <h1>Cadastrar Clientes</h1>
                 <CadastrarCliente />
            </div>
        )
    }
}
