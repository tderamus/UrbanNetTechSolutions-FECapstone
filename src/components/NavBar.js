/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image src="/images/UrbanNetLogo.png" alt="UrbanNet Tech Solutions Logo" style={{ height: '80px', width: 'auto' }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link className="nav-link" href="/ShowAssets">
              All Assets
            </Link>
            <Link className="nav-link" href="/Assets/new">
              Add Assets
            </Link>
            <Link className="nav-link" href="/ShowLocations/">
              All Locations
            </Link>
            <Link className="nav-link" href="/Locations/new">
              Add Locations
            </Link>
            <Link className="nav-link" href="/ShowEmployees/">
              All Employees
            </Link>
            <Link className="nav-link" href="/Employees/new">
              Add Employees
            </Link>
            <Button className="sign-out" variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
