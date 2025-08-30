import React from "react";
import "./Badge.css";
export default function Badge({ m }) {
  return (
    <div className="badge">
     <i className="badge-icon fa-sharp fa-solid fa-star"></i>
      <div className="badge-name">
        {m === "body"
          ? "Fitness Classes"
          : m === "yoga"
          ? "Yoga Courses"
          : "Dance Courses"}
      </div>
    </div>
  );
}
