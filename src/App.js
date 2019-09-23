import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import { BrowserRouter as Router,withRouter } from "react-router-dom";

 class MainWrapper extends Component {

  constructor(props){
    super(props)
    this.state = {
      isOpen: true,
      clients: [],
    }
  }
    toggle = () => {
      this.setState ({
        isOpen: !this.state.isOpen
      })
    }
    getItensForm = (client,history) => {
      console.log(this.state)
    this.setState({clients: [...this.state.clients, client]}) 
     history.push("/view-client")
    }
    render(){
      return (
        <Router >
          <div className="App wrapper">
            <SideBar toggle={this.toggle} isOpen={this.state.isOpen}/>
            <Content toggle={this.toggle} isOpen={this.state.isOpen} submitForm={this.getItensForm} clientsList={this.state.clients}/>
          </div>
        </Router>
      )
      } 
}

export default MainWrapper