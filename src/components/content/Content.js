import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={() => "Homepage" } />
        <Route exact path="/add-client" component={() => "Cadastrar Clientes sdsddsdd" } />
        <Route exact path="/view-client" component={() => "Ver Clientes" } />              
      </Switch>
    </Container>
)
