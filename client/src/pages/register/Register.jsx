import React, { useEffect, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setPageType } from "../../state/userSlice";
import { RingLoader } from "react-spinners";
import Message from "../../Components/message/Message";
import AuthModal from "../../Components/authModal/AuthModal";
export default function Register() {
  const loading = useSelector((state) => state.checkUser.loading);
  useDispatch(setLoading(false));
  const dispatch = useDispatch();
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [message, setMessage] = useState({ state: "", message: "" });
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    location: "",
    occupation: "",
  });

  const createUser = async (e) => {
    setMessage({ ...message, message: "" });
    e.preventDefault();
    dispatch(setLoading(true));
    const response = await fetch(
      "https://gymnation-server.vercel.app/api/user/register",
      {
        method: "POST",
        body: JSON.stringify(user),
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
      setMessage({
        status: "success",
        message: "Account Created Successfully",
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      setMessage(data);
    }
    dispatch(setLoading(false));
  };
  dispatch(setPageType("register"));
  const navigate = useNavigate();
  return (
    <div className="register">
      <div className="half-page-l-r">
        {message.message ? (
          <AuthModal message={message} setMessage={setMessage} />
        ) : null}
        <div className="register-wrapper">
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
          <span className="register-title">Register</span>
          <hr />
          <form className="register-form" onSubmit={createUser}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email..."
              name="email"
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
            <label>Usename</label>
            <input
              value={user.username}
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
              type="text"
              placeholder="Enter your Useraname..."
              name="username"
            />
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Name..."
              name="name"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password..."
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter your Location..."
              name="location"
              value={user.location}
              onChange={(e) =>
                setUser({
                  ...user,
                  location: e.target.value,
                })
              }
            />
            <label>Occupation</label>
            <input
              type="text"
              placeholder="Enter your Occupation..."
              name="occupation"
              value={user.occupation}
              onChange={(e) =>
                setUser({
                  ...user,
                  occupation: e.target.value,
                })
              }
            />
            <button className="register-button" type="submit">
              Register
            </button>
            <span className="have-account">Already have an account..</span>
            <button
              className="login-button-register"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="half-page-r-r">
        {message.message ? (
          <Message status={message.status} message={message.message} />
        ) : null}
        <RingLoader
          color={"#89551d"}
          loading={loading}
          cssOverride={override}
          size={220}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
