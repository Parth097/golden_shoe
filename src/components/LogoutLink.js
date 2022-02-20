import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div class="nav-link">
        <Link onClick={() => logout()}>Log Out</Link>
      </div>
    )
  );
};

export default LogoutButton;
