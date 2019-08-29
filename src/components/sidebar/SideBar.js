import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy, faPlus, faPlusSquare, faListAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { NavItem, NavLink, NavbarBrand, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <NavbarBrand href="/">Dashboard</NavbarBrand>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to={'/add-client'}>
            <FontAwesomeIcon icon={faPlusSquare} className="mr-2"/>Cadastrar Cliente
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/view-client'}>
              <FontAwesomeIcon icon={faListAlt} className="mr-2"/>Ver Clientes
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  

export default SideBar;
