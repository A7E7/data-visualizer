import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import HomePage from "./pages/home-page";
import DataPage from "./pages/data-page";
import PerformancePage from "./pages/performance-page";
import GitHubIcon from "./images/GitHub-Mark-32px.png";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Nav>
              <Nav.Link
                target="_other"
                href="https://github.com/A7E7/data-visualizer"
              >
                <img className="github-icon" src={GitHubIcon} alt="GitHub" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/data">
          <DataPage />
        </Route>
        <Route path="/performance">
          <PerformancePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
