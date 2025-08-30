import React from "react";
import "./Offer.css";
import { useNavigate } from "react-router-dom";
export default function Offer() {
  const navigate = useNavigate();
  return (
    <div className="offer">
      <div className="body-join-text">
        Why us<span className="discount">? </span>
      </div>
      <div
        className="gallery-text"
        onClick={() => {
          navigate("/gallery");
        }}
      >
        Check out our galley here <i className="offer-icon fa-brands fa-envira"></i>
      </div>
    </div>
  );
}
