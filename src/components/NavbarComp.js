import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pageComponents/home";
import Mens from "./pageComponents/mens";
import Women from "./pageComponents/women";
import Children from "./pageComponents/children";
import MyAccount from "./pageComponents/myAccount";
import About from "./pageComponents/about";
import Contact from "./pageComponents/contact";

import LoginButton from "./LoginLink";
import LogoutButton from "./LogoutLink";

class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="myNav" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to={"/home"}>
                Golden Shoe
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to={"/home"}>
                    Home
                  </Nav.Link>
                  <NavDropdown
                    bg="myNav"
                    title="Category"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to={"/mens"}>
                      Mens
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/women"}>
                      Women
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/children"}>
                      Children
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to={"/myAccount"}>
                    My Account
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>
                    Contact
                  </Nav.Link>
                  <Nav.Link as={LoginButton}>Login</Nav.Link>
                  <Nav.Link as={LogoutButton}>Logout</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/mens">
              <Mens />
            </Route>
            <Route path="/women">
              <Women />
            </Route>
            <Route path="/children">
              <Children />
            </Route>
            <Route path="/myAccount">
              <MyAccount />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavbarComp;
