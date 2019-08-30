import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faAddressCard, faAddressBook, faBirthdayCake, faMoneyCheck, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './ListGroupCollapse.css';
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
          <p onClick={this.toggle} className="bluIcon">
            <strong><FontAwesomeIcon icon={faUser} className="mr-2"/>{cat.nome} {cat.sobrenome}</strong> 
            <span className="pull-right">
            <FontAwesomeIcon icon={faChevronRight} className={`mr-2 ${this.state.collapse && "rotate-down"}`} />
            </span>
            
          </p>
          <Collapse isOpen={this.state.collapse} className="collapseWrapper">    
          <p><FontAwesomeIcon icon={faEnvelope} className="mr-2"/><strong>E-mail: </strong>{cat.email}</p>
          <p><FontAwesomeIcon icon={faPhone} className="mr-2"/><strong>Telefone: </strong>{cat.telefone}</p>
          <p><FontAwesomeIcon icon={faAddressCard} className="mr-2"/><strong>CEP:</strong> {cat.cep}</p>
          <p><FontAwesomeIcon icon={faAddressBook} className="mr-2"/><strong>Endereço: </strong>{cat.endereco1}, {cat.endereco2} </p>
          <p><FontAwesomeIcon icon={faBirthdayCake} className="mr-2"/><strong>Data de Nascimento: </strong>{cat.dataNascimento} </p>
          <p><FontAwesomeIcon icon={faAddressBook} className="mr-2"/><strong>CPF: </strong>{cat.cpf}</p>
          <p><FontAwesomeIcon icon={faMoneyCheck} className="mr-2"/><strong>Renda Mensal: </strong>{cat.rendaMensal}</p>
          </Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

export default ListGroupCollapse