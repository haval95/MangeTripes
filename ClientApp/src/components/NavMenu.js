import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import LoginButton from "./Trip/Login";
import LogoutButton from "./Trip/Logout";
import { useAuth0 } from "@auth0/auth0-react";

export function NavMenu() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [state, setState] = useState(true);

  const toggleNavbar = () => {
    setState(!state);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            Trips
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!state}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              {isAuthenticated ? (
                <>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/trips">
                      Trips
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/create">
                      Create
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <LogoutButton />
                  </NavItem>
                </>
              ) : (
                <NavItem>
                  <LoginButton />
                </NavItem>
              )}
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
