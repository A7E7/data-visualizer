import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/home-page";
import DataPage from "./pages/data-page";
import PerformancePage from "./pages/performance-page";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Data Visualizer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/data">
                <Nav.Link>Data</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/performance">
                <Nav.Link>Performance</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/data">
          <DataPage />
        </Route>
        <Route path="/performance">
          <PerformancePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
