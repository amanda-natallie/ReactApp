import React from 'react';
import { ListGroupItem, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faAddressCard, faAddressBook, faBirthdayCake, faMoneyCheck, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import './ListGroupCollapse.css';
import {formatDate, formataCPF, formataCEP, formataTelefone} from '../../../Utils/Utils'

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
            <strong><FontAwesomeIcon icon={faUser} className="mr-2"/>{cat.nome_pessoa} {cat.sobrenome_pessoa}</strong> 
            <span className="pull-right">
            <FontAwesomeIcon icon={faChevronRight} className={`mr-2 ${this.state.collapse && "rotate-down"}`} />
            </span>
            
          </p>
          <Collapse isOpen={this.state.collapse} className="collapseWrapper">    
          <p><FontAwesomeIcon icon={faEnvelope} className="mr-2"/><strong>E-mail: </strong>{cat.email_pessoa}</p>
          <p><FontAwesomeIcon icon={faPhone} className="mr-2"/><strong>Telefone: </strong>{formataTelefone(cat.telefone_pessoa)}</p>
          <p><FontAwesomeIcon icon={faAddressCard} className="mr-2"/><strong>CEP:</strong> {formataCEP(cat.cep_pessoa)}</p>
          <p><FontAwesomeIcon icon={faAddressBook} className="mr-2"/><strong>Endereço: </strong>{cat.endereco1_pessoa}, {cat.endereco2_pessoa} </p>
          <p><FontAwesomeIcon icon={faBirthdayCake} className="mr-2"/><strong>Data de Nascimento: </strong>{formatDate(cat.datanasc_pessoa)} </p>
          <p><FontAwesomeIcon icon={faAddressBook} className="mr-2"/><strong>CPF: </strong>{formataCPF(cat.cpf_pessoa)}</p>
          <p><FontAwesomeIcon icon={faMoneyCheck} className="mr-2"/><strong>Renda Mensal: </strong>{cat.renda_pessoa}</p>
          </Collapse>
        </div>
      </ListGroupItem>
    );
  }
}

export default ListGroupCollapse