import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div class="nav-link">
      <Link onClick={() => loginWithRedirect()}>Log In</Link>
      </div>
    )
  );
};

export default LoginButton;
