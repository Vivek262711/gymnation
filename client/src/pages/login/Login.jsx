import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {
  setLoading,
  setPageType,
  setToken,
  setUser,
} from "../../state/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import Message from "../../Components/message/Message";
import AuthModal from "../../Components/authModal/AuthModal";
export default function Login() {
  const loading = useSelector((state) => state.checkUser.loading);
  useDispatch(setLoading(false));
  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  dispatch(setPageType("login"));
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [message, setMessage] = useState({ status: "failed", message: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    setMessage({ ...message, message: "" });
    const response = await fetch(
      "https://gymnation-server.vercel.app/api/user/login",
      {
        method: "POST",
        body: JSON.stringify(logUser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).catch((err) => {
      setMessage({ status: "failed", message: err.message });
      return;
    });
    const data = await response.json();
    if (data.status === "success") {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
      setMessage(data);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      setMessage(data);
    }
    dispatch(setLoading(false));
  };
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="half-page-l-l">
        {message.message ? (
          <Message status={message.status} message={message.message} />
        ) : null}
        <RingLoader
          color={"#89551d"}
          loading={loading}
          cssOverride={override}
          size={120}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div className="half-page-r-l">
        {message.message ? (
          <AuthModal message={message} setMessage={setMessage} />
        ) : null}
        <div className="login-wrapper">
          <div className="loader-above">
            <RingLoader
              color={"#89551d"}
              loading={loading}
              cssOverride={override}
              size={120}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          <span className="login-title">Login</span>
          <hr />
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              autoComplete="on"
              type="text"
              value={logUser.email}
              placeholder="Enter your email..."
              onChange={(e) =>
                setLogUser({
                  ...logUser,
                  email: e.target.value,
                })
              }
            />
            <label>Password</label>
            <input
              autoComplete="on"
              type="password"
              value={logUser.password}
              placeholder="Enter your password..."
              onChange={(e) =>
                setLogUser({
                  ...logUser,
                  password: e.target.value,
                })
              }
            />
            <button className="login-button" type="submit">
              Login
            </button>
            <span className="no-account">Dont have an account..</span>
            <button
              className="register-button-login"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
