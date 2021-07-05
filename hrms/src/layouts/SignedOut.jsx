import { Link } from "react-router-dom";
import React from "react";
import { Button, Menu } from "semantic-ui-react";
export default function SignedOut({ signIn }) {
  return (
    <div>
      <Menu.Item>
        <Link to="/login">
          <Button primary>Giriş yap</Button>
        </Link>
        <Link to="/register">
          <Button primary style={{ marginLeft: "0.5em" }}>
            Kayıt ol
          </Button>
        </Link>
      </Menu.Item>
    </div>
  );
}
