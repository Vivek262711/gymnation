import React from "react";
import "./TrainerCard.css";
export default function TrainerCard({image, name, email, duty, contact }) {
  return (
    <div className="trainer-card">
      <div className="card-wrapper">
        <img src={image} alt=" " className="trainer-img" />
        <div className="trainer-name">{name}</div>
        <div className="trainer-duty">{duty}</div>
        <hr />
        <div className="trainer-email">{email}</div>
        <div className="trainer-contact">{contact}</div>
      </div>
    </div>
  );
}
