import React from "react";
import "./Message.css";
export default function Message({ status, message }) {
  return (
    <>
      {status === "success" ? (
        <div className="message message-s">
          <i className="modal-icon fa-solid fa-xmark"></i>
          <i className="message-icon-s fa-solid fa-face-smile"></i>
          <hr />
          <p className="message-text">{message}</p>
        </div>
      ) : (
        <div className="message message-f">
          <i className="modal-icon fa-solid fa-xmark"></i>
          <i className="message-icon-f fa-solid fa-face-sad-tear"></i>
          <hr />
          <p className="message-text">{message}</p>
        </div>
      )}
    </>
  );
}
