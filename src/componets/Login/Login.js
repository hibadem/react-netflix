import React, { useState } from "react";
import SignIn from "../SignIn/SignIn";
import "./Login.scss";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <div className="login__background">
        <img
          className="login__background-image"
          src="https://mebincdn.themebin.com/1664271580523.jpg"
          alt=""
        />
      </div>
      <div className="login__gradient"></div>
      {signIn ? (
        <SignIn />
      ) : (
        <>
          <button onClick={() => setSignIn(true)} className="login__signin">
            Sign In
          </button>
          <div className="login__body">
            <h1 className="login__title">
              Unlimited film, TV programmes and more.
            </h1>
            <h2>Watch anywhere, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form action="" className="login__form">
              <input
                className="login__input"
                type="email"
                placeholder="Email Address"
              />
              <button
                onClick={() => setSignIn(true)}
                className="login__get-started"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
