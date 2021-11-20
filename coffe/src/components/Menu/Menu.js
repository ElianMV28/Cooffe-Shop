import { Navbar, Container, Nav } from "react-bootstrap";
import "./Menu.css";
import React from "react";




export function Menu() {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

