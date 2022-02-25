import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import OrderCards from "../orderComponents/OrderCards";

const MyAccount = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated)
    return <h1>Please login to see your account details.</h1>;

  return (
    isAuthenticated && (
      <div>
        <h1>Account Details</h1>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> This is to show all the data recieved from the Auth0 API, in a json format */}
        <div className="acc-img">
          <img src={user.picture} alt={user.name} />
        </div>
        <div className="acc-details">
          <p>Username: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div>
          <OrderCards/>
        </div>
      </div>
    )
  );
};

export default MyAccount;
