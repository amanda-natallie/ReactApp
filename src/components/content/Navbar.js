import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faUserEdit, faBell } from '@fortawesome/free-solid-svg-icons';
import { Navbar, NavLink, NavItem, Button, NavbarToggler, Collapse, Nav } from 'reactstrap';


export default props => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)

  return (
    <Navbar color="light" light className="navbar shadow-sm mb-12 bg-white" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
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
  );
}
