import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Transport Routes</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                <LinkContainer to={'/'} className="text-dark" exact>
                    <a href="/" className="nav-link">Notes</a>
                </LinkContainer>
                </NavItem>
                <NavItem>
                <LinkContainer to={'/transportHooks'} className="text-dark" exact>
                    <a href="/transportHooks" className="nav-link">Route Calculator using hooks</a>
                </LinkContainer>
                </NavItem>
                <NavItem>
                <LinkContainer to={'/transport'} className="text-dark" exact>
                    <a href="/transport" className="nav-link">Route Calculator (ES6)</a>
                </LinkContainer>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
