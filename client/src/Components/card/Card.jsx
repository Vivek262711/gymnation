import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
export default function Card({ membership, type, Title, subTitle, Price }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/membership");
  };
  return (
    <>
      {membership ? (
        <div className={`card card-${type}-m`} onClick={clickHandler}>
          <span className="card-text card-heading">{Title}</span>
          <span className="card-text card-subheading">
            You are already member of this course.
          </span>
        </div>
      ) : (
        <div className={`card card-${type}`} onClick={clickHandler}>
          <span className="card-text card-heading">{Title}</span>
          <span className="card-text card-subheading">{subTitle}</span>
          <div className="card-text card-price">
            From:<span className="card-text price">₹{Price}</span>/month
          </div>
        </div>
      )}
    </>
  );
}
