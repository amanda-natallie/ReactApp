import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import Clients from "../../pages/Clients";
import CADClient from "../../pages/Clients/cadastrar"; 
import HomePage from "../../pages/Main/";
import FormSemRedux from "../../pages/NoReduxForm/Form";

export default ({toggle,isOpen,submitForm, clientsList}) => {
   
  return(
    <Container fluid className={classNames('content ', {'is-open': isOpen})}>
      <NavBar toggle={toggle} isOpen={isOpen}/>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route  exact path="/home" component={HomePage} />
        <Route  path="/add-client" component={CADClient} />
        <Route  path="/view-client" render={(props) => <Clients clientsList={clientsList}/>}/>              
        <Route  path="/view-form" render={(props) => <FormSemRedux submitForm={submitForm}/>} />              
      </Switch>
    </Container>
  )}