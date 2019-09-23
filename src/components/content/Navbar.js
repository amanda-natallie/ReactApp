import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faUserEdit, faBell } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavLink, NavItem, Button, NavbarToggler, Collapse, Nav } from 'reactstrap';


export default class teste extends Component {


  render() { 

    return (

      <Navbar color="light" light className="navbar shadow-sm mb-12 bg-white" expand="md">
        <Button color="info" onClick={() => this.props.toggle()}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <NavbarToggler onClick={() => this.props.toggle()} />
        <Collapse isOpen={this.props.isOpen} navbar>
          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink href="#">
                <Button color="link">
                  <FontAwesomeIcon icon={faUserEdit} />
                </Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <Button color="link" >
                  <FontAwesomeIcon icon={faBell} />
                </Button>
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    )
  };
}
