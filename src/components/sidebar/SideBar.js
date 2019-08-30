import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faListAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { NavItem, NavbarBrand, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link, NavLink} from 'react-router-dom';

const SideBar = props => (


    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <NavbarBrand href="/">Dashboard</NavbarBrand>
      </div>
      <div className="side-menu">
      <div className="logo-wrapper sn-ad-avatar-wrapper">
          <a href="#!">
            <img alt="" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="rounded-circle" />
            <span>Amanda Natallie</span>
          </a>
        </div>
        <Nav vertical className="list-unstyled pb-3">
        <NavItem>
            <NavLink tag={Link} to={'/home'} activeClassName="nav-link-active">
            <FontAwesomeIcon icon={faHome} className="mr-2"/>Página Inicial
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/add-client'} activeClassName="nav-link-active">
            <FontAwesomeIcon icon={faPlusSquare} className="mr-2"/>Cadastrar Cliente
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/view-client'} activeClassName="nav-link-active">
              <FontAwesomeIcon icon={faListAlt} className="mr-2"/>Ver Clientes
            </NavLink>
          </NavItem>
        </Nav>        
      </div>
    </div>
  );

  

export default SideBar;
