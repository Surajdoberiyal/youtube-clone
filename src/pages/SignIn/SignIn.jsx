import React from "react";
import { Input, Button } from "antd";
import "./_signIn.scss";

const SignIn = () => {
  return (
    <>
      <div className="signInContainer">
        <div className="signInWrapper">
          <h2 className="signInTitle">Sign in</h2>
          <h3 className="signIndescription">to continue with Suraj</h3>
          <Input className="signInInput" placeholder="Enter your username" />
          <Input
            className="signInInput"
            type="password"
            placeholder="Enter your password"
          />
          <Button className="signInButton">Sign in</Button>
          <span className="signInTitle">or</span>
          <Input className="signInInput" placeholder="Enter your name" />
          <Input className="signInInput" placeholder="Enter your email" />
          <Input
            className="signInInput"
            type="password"
            placeholder="Enter your password"
          />
          <Button className="signInButton">Sign up</Button>
        </div>
        <div className="signInMore">
          <span>English(USA)</span>
          <div className="signInLinks">
            <h4>Help</h4>
            <h4>Privacy</h4>
            <h4>Terms</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
