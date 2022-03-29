import React from "react";

import "./Auth.css";
import useAuth from "./../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { signInUsingGoogle, user, logOut, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  console.log(user);

  const redirect_uri = location.state?.from || "/";
  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="sign-container">
      {user?.displayName ? <h1>Welcome {user.displayName}</h1> : <h1>Login</h1>}

      <button onClick={handleGoogleLogin}>Sign Up with google</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default SignUp;
