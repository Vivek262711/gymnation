import React, { useState } from "react";
import "./Topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/userSlice";
export default function Topbar() {
  const user = useSelector((state) => state.checkUser.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setLogout());
  };
  const [topList, setTopList] = useState(false);
  const breadcrumClick = () => {
    setTopList(!topList);
  };

  const navigate = useNavigate();
  return (
    <div className="resp-top">
      <div className="top">
        <div className="top-left">
          <a href="https://www.facebook.com/watch/?v=1143321946303544">
            <i className="top-icon fa-brands fa-facebook"></i>
          </a>
          <a href="https://bharatbz.com/jharkhand/gymnation-540748">
            <i className="top-icon fa-solid fa-mug-hot"></i>
          </a>
          <a href="https://www.top-rated.online/cities/K%C4%81tr%C4%81s/place/p/9266480/GYMNATION8">
            <i className="top-icon fa-solid fa-comments"></i>
          </a>
          <a href="https://www.instagram.com/gymnation_bokaro/?hl=en">
            <i className=" top-icon fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="top-center">
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="topbar-link" to={"/home"}>
                HOME
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="topbar-link" to={"/about"}>
                TRAINERS
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="topbar-link" to={"/write"}>
                WRITE US
              </Link>{" "}
            </li>
            <li className="top-list-item">
              <Link className="topbar-link" to={"/gallery"}>
                GALLERY
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="topbar-link" to={"/membership"}>
                MEMBERSHIPS
              </Link>
            </li>
          </ul>
        </div>
        <div className="top-right">
          <div className="navbar-wrapper">
            {!topList ? (
              <i
                className="bread-crum fa-solid fa-bars"
                onClick={breadcrumClick}
              ></i>
            ) : (
              <i
                className="bread-crum fa-solid fa-xmark"
                onClick={breadcrumClick}
              ></i>
            )}
          </div>
          <div className="profile-wrapper">
            <img
              onClick={() => navigate("/profile")}
              className="top-image"
              src="assets/profileM.png"
              alt="face"
            ></img>

            <span onClick={() => navigate("/profile")} className="user-name">
              {user.username}
            </span>
            <i
              onClick={logout}
              className="logout-button fa-solid fa-right-from-bracket"
            ></i>
          </div>
        </div>
      </div>
      {topList ? (
        <div className="top-resp">
          <ul className="top-list-resp">
            <li className="top-list-item-resp">
              <Link className="topbar-link" to={"/home"}>
                HOME
              </Link>
            </li>
            <li className="top-list-item-resp">
              <Link className="topbar-link" to={"/about"}>
                TRAINERS
              </Link>
            </li>
            <li className="top-list-item-resp">
              <Link className="topbar-link" to={"/write"}>
                WRITE US
              </Link>{" "}
            </li>
            <li className="top-list-item-resp">
              <Link className="topbar-link" to={"/gallery"}>
                GALLERY
              </Link>
            </li>
            <li className="top-list-item-resp">
              <Link className="topbar-link" to={"/membership"}>
                MEMBERSHIPS
              </Link>
            </li>
            <i
              onClick={logout}
              className="logout-button-bc fa-solid fa-right-from-bracket"
            >
              Logout
            </i>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
