import React from "react";
import "./AuthModal.css";
import Message from "../message/Message";
export default function AuthModal({ message, setMessage }) {
  return (
    <div className="modal" onClick={() => setMessage("")}>
      <div className="modal-wrapper">
        <Message status={message.status} message={message.message} />
      </div>
    </div>
  );
}
