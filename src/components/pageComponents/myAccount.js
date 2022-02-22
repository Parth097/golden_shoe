import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated)
    return <h3>Please login to see your account details.</h3>;

  return (
    isAuthenticated && (
      <div>
        <h1>Account Details</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */} {/*This is to show all the data recieved from the Auth0 API, in a json format*/}
      </div>
    )
  );
};

export default MyAccount;
