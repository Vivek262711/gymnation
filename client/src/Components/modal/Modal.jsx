import React, { useState } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/dist/userSlice.dev";
import Message from "../message/Message";
export default function Modal({ setModal, display }) {
  const [message, setMessage] = useState({ status: "failed", message: "" });
  const user = useSelector((state) => state.checkUser.user);
  const token = useSelector((state) => state.checkUser.token);
  const [changePassword, setChangePaswsword] = useState(false);
  const [change, setChange] = useState({
    name: user.name,
    username: user.username,
    occupation: user.occupation,
    location: user.loaction,
    currPassword: "",
    newPassword: user.password,
  });

  const dispatch = useDispatch();
  const patchAccount = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://gymnation-server.vercel.app/api/user",
      {
        method: "PATCH",
        body: JSON.stringify(change),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      }
    ).catch((err) => {
      setMessage({ status: "failed", message: err.message });
      return;
    });
    const data = await response.json();
    if (data.status === "success") {
      setModal("none");
      dispatch(setUser(data.updatedUser));
    } else {
      console.log(data);
    }
  };
  return (
    <div className="modal" style={{ display: display }}>
      {message.message ? (
        <Message status={message.status} message={message.message} />
      ) : null}
      <div className="modal-wrapper">
        <form className="profile-form" onSubmit={patchAccount}>
          <div className="update-top">
            <label>Update Profile :</label>
            <i
              className="close-button fa-sharp fa-solid fa-circle-xmark"
              onClick={(e) => {
                e.preventDefault();
                setModal("none");
              }}
            ></i>
          </div>
          <hr style={{ marginTop: "10px" }} />
          <div className="profile-profile-picture">
            <img src="assets/profileM.png" alt="" className="profile-pp" />
          </div>

          <label>Username</label>
          <input
            onChange={(e) => {
              if (e.target.value) {
                setChange({ ...change, username: e.target.value });
              } else {
                setChange({ ...change, username: user.username });
              }
            }}
            className="modal-input"
            type="text"
            placeholder={user.username}
          />
          <label>Name</label>
          <input
            className="modal-input"
            type="text"
            placeholder={user.name}
            onChange={(e) => {
              if (e.target.value) {
                setChange({ ...change, name: e.target.value });
              } else {
                setChange({ ...change, name: user.name });
              }
            }}
          />
          <label>Location</label>
          <input
            className="modal-input"
            type="text"
            onChange={(e) => {
              if (e.target.value) {
                setChange({ ...change, location: e.target.value });
              } else {
                setChange({ ...change, location: user.location });
              }
            }}
            placeholder={user.location}
          />
          <label>Occupation</label>
          <input
            onChange={(e) => {
              if (e.target.value) {
                setChange({ ...change, occupation: e.target.value });
              } else {
                setChange({ ...change, occupation: user.occupation });
              }
            }}
            className="modal-input"
            type="text"
            placeholder={user.occupation}
          />
          {changePassword ? (
            <>
              <label>New Password</label>
              <input
                onChange={(e) => {
                  if (e.target.value) {
                    setChange({ ...change, newPassword: e.target.value });
                  } else {
                    setChange({ ...change, newPassword: user.password });
                  }
                }}
                className="modal-input"
                type="text"
                placeholder="Add new password here..."
              />
            </>
          ) : null}
          <button
            className="change-password"
            onClick={(e) => {
              e.preventDefault();
              setChangePaswsword(true);
            }}
          >
            Change Password
          </button>
          <label>Verify Current Password</label>
          <input
            onChange={(e) => {
              if (e.target.value) {
                setChange({ ...change, currPassword: e.target.value });
              } else {
                setChange({ ...change, currPassword: "" });
              }
            }}
            className="modal-input"
            type="password"
            placeholder="********"
          />

          <button type="submit" className="profile-submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
