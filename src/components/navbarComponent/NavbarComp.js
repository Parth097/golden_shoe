import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../pageComponents/Home";
import Designer from "../pageComponents/Designer";
import Sports from "../pageComponents/Sports";
import Mens from "../pageComponents/Mens";
import Women from "../pageComponents/Women";
import Children from "../pageComponents/Children";
import MyAccount from "../pageComponents/MyAccount";
import About from "../pageComponents/About";
import Contact from "../pageComponents/Contact";
import NikeWT2 from "../productPage/NikeWT2";
import OrderDetails from "../orderComponents/OrderDetails";
import CartIcon from "../cartComponent/CartIcon.png";
import LoginButton from "../authenticationComponents/LoginLink";
import LogoutButton from "../authenticationComponents/LogoutLink";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="myNav" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to={"/Home"}>
                Golden Shoe
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} to={"/Home"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/Designer"}>
                    Designer
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/Sports"}>
                    Sports
                  </Nav.Link>
                  <NavDropdown
                    bg="myNav"
                    title="Category"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to={"/Mens"}>
                      Mens
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Women"}>
                      Women
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/Children"}>
                      Children
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to={"/MyAccount"}>
                    My Account
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/About"}>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/Contact"}>
                    Contact
                  </Nav.Link>
                  <Nav.Link as={LoginButton}>Login</Nav.Link>
                  <Nav.Link as={LogoutButton}>Logout</Nav.Link>
                </Nav>
                <div className="nav-cart">
                  <span>0</span>
                  <Link to="/cart">
                    <img src={CartIcon} alt="" width="20" />
                  </Link>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/Designer">
              <Designer />
            </Route>
            <Route path="/Sports">
              <Sports />
            </Route>
            <Route path="/Mens">
              <Mens />
            </Route>
            <Route path="/Women">
              <Women />
            </Route>
            <Route path="/Children">
              <Children />
            </Route>
            <Route path="/MyAccount">
              <MyAccount />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/NikeWT2">
              <NikeWT2 />
            </Route>
            <Route path="/OrderDetails">
              <OrderDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavbarComp;
