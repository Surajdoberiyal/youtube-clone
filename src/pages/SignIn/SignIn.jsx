import React, { useState } from "react";
import { Input, Button } from "antd";
import "./_signIn.scss";
import axios from "axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";

const SignIn = () => {

  //----------------Login-----------------------
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", {
        email: userName,
        password: password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };


  //----------------Sign-up-----------------------
  const [signupUserName, setSignupUserName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [message, setMessage] = useState("");



  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", {
        name: signupUserName,
        email: signupEmail,
        password: signupPassword,
      });
      console.warn(res)
      setMessage('SuccessFull')
      navigate("/signin");
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <>
      <div className="signInContainer">
        <div className="signInWrapper">
          <h2 className="signInTitle">Sign in</h2>
          <h3 className="signIndescription">to continue with Suraj</h3>
          <Input
            className="signInInput"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input.Password
            className="signInInput passwordInput"
            type="password"
            placeholder="Enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="signInButton" onClick={handleLogin}>
            Sign in
          </Button>
          <span className="signInTitle">or</span>
          <Input className="signInInput"
            onChange={(e) => setSignupUserName(e.target.value)}
            placeholder="Enter your name" />
          <Input className="signInInput"
            onChange={(e) => setSignupEmail(e.target.value)}
            placeholder="Enter your email" />
          <Input.Password
            className="signInInput passwordInput"
            type="password"
            placeholder="Enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <Button className="signInButton" onClick={handleSignup}>Sign up</Button>
          {message}
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
