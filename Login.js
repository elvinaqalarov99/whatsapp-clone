import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { useStateValue } from "./StateProvider";
function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: "SIGN_IN", user: result });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/897px-WhatsApp.svg.png"
        alt=""
      />
      <div className="login__text">
        <h1>Sign in to WhatsApp</h1>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign in with Google
      </Button>
    </div>
  );
}

export default Login;
