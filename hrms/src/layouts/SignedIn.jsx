import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu,Image } from 'semantic-ui-react'
export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://tibatu.com/wp-content/uploads/2020/10/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        />
        <Dropdown pointing="top left" text="İrfan">
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/resumes" text="Bilgilerim" icon="info" />
           <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
