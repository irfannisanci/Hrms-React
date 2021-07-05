import React, { useState } from "react";
import {  Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { Link, NavLink } from "react-router-dom";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function handleSignOut() {
    setIsAuthenticated(false);
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" name="home" />
          <Menu.Item as={NavLink} to="/jobadverts" name="İş İlanları" />
          <Menu.Item as={NavLink} to="/employers" name="Şirketler" />

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
