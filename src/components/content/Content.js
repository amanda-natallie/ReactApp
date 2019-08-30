import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import Clients from "../../pages/Clients";
import CADClient from "../../pages/Clients/cadastrar";
import HomePage from "../../pages/Main/";

export default props => (
    <Container fluid className={classNames('content', {'is-open': props.isOpen})}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route  exact path="/home" component={HomePage} />
        <Route  path="/add-client" component={CADClient} />
        <Route  path="/view-client" component={Clients} />              
      </Switch>
    </Container>
)
