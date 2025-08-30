import React from "react";
import "./Topbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AuthTopbar() {
  const navigate = useNavigate();
  const pageType = useSelector((state) => state.checkUser.pageType);
  const handleClick = () => {
    if (pageType === "login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="top-a">
      <div className="top-left-a" style={{ flex: "2" }}>
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
      <div className="top-center-a">
        <h1 className="topbar-title-a">
          <i className="fa-solid fa-dumbbell"></i> Gymnation
        </h1>
      </div>
      <div
        className="top-right-a"
        style={{ justifyContent: "end", margin: "0 20px" }}
      >
        <button
          onClick={handleClick}
          className="auth-topbar-button"
        >
          {pageType === "login"
            ? "Create your Account"
            : "Already a user? Login Here!"}
        </button>
      </div>
    </div>
  );
}
