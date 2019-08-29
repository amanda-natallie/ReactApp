import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';

class ListGroupCollapse extends React.Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    const cat = this.props.cat;
  
    return (
      <ListGroupItem>
        <div>
          <p onClick={this.toggle}>
            <strong>{cat.nome} {cat.sobrenome}</strong> 
          </p>
          <Collapse isOpen={this.state.collapse}>
          <p>E-mail: {cat.email}</p>
          <p>Telefone: {cat.telefone}</p>
          <p>CEP: {cat.cep}</p>
          <p>Endereço: {cat.endereco1}, {cat.endereco2} </p>
          <p>Data de Nascimento: {cat.dataNascimento} </p>
          <p>CPF: {cat.cpf}</p>
          <p>Renda Mensal: {cat.rendaMensal}</p>
          
          </Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

export default ListGroupCollapse