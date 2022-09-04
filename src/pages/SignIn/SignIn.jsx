import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import "./_signIn.scss";
import axios from "axios";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {

  //----------------  Login -----------------------
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    const loginData = {
      email: userName,
      password: password,
    }
    axios.post("/auth/signin", JSON.stringify(loginData), {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      toast.success("Login Successfully!");
      dispatch(loginSuccess(res.data));
      navigate("/");

    })
      .catch((err) => {
        dispatch(loginFailure());
        toast.error("Oops! Something went wrong.");
      });
    setUserName('')
    setPassword('')
  };

  // ------------------------  Sign In with Google ------------------------

  const signInwithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider).then((data) => {
      console.warn(data)
      axios.post("auth/google", {
        name: data.user.displayName,
        email: data.user.email,
        img: data.user.photoURL,
      }).then((res) => {
        toast.success("Login Successfully!");
        dispatch(loginSuccess(res.data))
        navigate("/");
      })

    }).catch((err) => {
      dispatch(loginFailure());
      toast.error("Oops! Something went wrong.");
    })
  }

  // ----------------  Sign-up   -----------------------
  const [signupUserName, setSignupUserName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");


  const handleSignup = async (e) => {
    e.preventDefault();
    const data = {
      name: signupUserName,
      email: signupEmail,
      password: signupPassword,
    }

    axios.post("/auth/signup", JSON.stringify(data), {
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => {
      toast.success("User has been created Successfully!");
      dispatch(loginSuccess(res.data));
      navigate("/");
    })
      .catch((err) => {
        dispatch(loginFailure());
        toast.error("Oops! Something went wrong.");
      });
    setSignupUserName('')
    setSignupEmail('')
    setSignupPassword('')
  };

  return (
    <>
      <div className="signInContainer">
        <div className="signInWrapper">
          <h2 className="signInTitle">Sign in</h2>
          <h3 className="signIndescription">to continue with Suraj</h3>
          <Input
            type="text"
            className="signInInput"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input.Password
            className="signInInput passwordInput"
            type="password"
            value={password}
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
          <div className="signInWithGoogleWrapper">
            <FcGoogle />
            <Button className="signInWithGoogle" onClick={signInwithGoogle}>Continue with Google</Button>
          </div>
          <Input className="signInInput"
            type="text"
            value={signupUserName}
            onChange={(e) => setSignupUserName(e.target.value)}
            placeholder="Enter your name" />
          <Input className="signInInput"
            type="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            placeholder="Enter your email" />
          <Input.Password
            value={signupPassword}
            className="signInInput passwordInput"
            type="password"
            placeholder="Enter your password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => setSignupPassword(e.target.value)}
          />
          <Button className="signInButton" onClick={handleSignup}>Sign up</Button>
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
      <ToastContainer theme="dark" />
    </>
  );
};

export default SignIn;
