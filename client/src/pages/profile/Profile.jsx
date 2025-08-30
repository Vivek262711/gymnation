import React, { useState } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Badge from "../../Components/badge/Badge";
import Modal from "../../Components/modal/Modal";
export default function Profile() {
  const [modal, setModal] = useState("block");
  const user = useSelector((state) => state.checkUser.user);

  const navigate = useNavigate();
  return (
    <div className="profile">
      <div className="profile-join-text">Your Profile😎</div>

      <div className="sidebar">
        <div className="sidebar-item">
          <span className="sidebar-title">{user.username}</span>
          <img src="assets/profileM.png" alt="" />
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">{user.name}</span>
          <ul className="sidebar-list">
            <li className=" sidebar-list-item">
              <i className="list-icon fa-solid fa-envelope" /> Email : {user.email}
            </li>
            <li className="sidebar-list-item">
              <i className="list-icon fa-solid fa-briefcase" /> Occupation :{" "}
              {user.occupation}
            </li>
            <li className="sidebar-list-item">
              <i className="list-icon fa-solid fa-mountain-sun" /> Location :{" "}
              {user.location}
            </li>
          </ul>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">Memberships</span>
        </div>
        {user.membership.length ? (
          user.membership.map((m) => <Badge m={m} />)
        ) : (
          <div
            className="no-membership"
            onClick={() => navigate("/membership")}
          >
            💲Purchase Membership
          </div>
        )}
        <div className="sidebar-item">
          <span className="sidebar-title">Follow Us</span>
        </div>
        <div className="sidebar-social">
          <div className="sidebar-left">
            <i className="sidebar-icon fa-brands fa-facebook"></i>
            <i className="sidebar-icon fa-brands fa-twitter"></i>
            <i className="sidebar-icon fa-brands fa-github"></i>
            <i className=" sidebar-icon fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="profile-title">
          <div
            className="profile-update-title"
            onClick={() => setModal("block")}
          >
            Update your account
          </div>
          <div className="profile-delete-title">Delete your account</div>
        </div>
        <Modal display={modal} setModal={setModal} />
      </div>
    </div>
  );
}
