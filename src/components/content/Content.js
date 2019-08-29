import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import Clients from "../../pages/Clients";
import CADClient from "../../pages/Clients/cadastrar";
import HomePage from "../../pages/Main/";

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/add-client" component={CADClient} />
        <Route exact path="/view-client" component={Clients} />              
      </Switch>
    </Container>
)
