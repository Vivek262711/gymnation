import React from "react";
import "./Body.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function Body() {
  const user = useSelector((state) => state.checkUser.user);
  return (
    <div className="body">
      <div className="body-join-text">
        GET NOW<span className="discount"> 20% </span>
        OFF ON OUR MEMBERSHIP
      </div>
      <div className="card-wrapper">
        <div className="body-card">
          <Card
            membership={user.membership.includes("body")}
            type={"body"}
            Title={"FITNESS CLASSES"}
            subTitle={"A better way shape your body."}
            Price={"250"}
          />
          <Card
            membership={user.membership.includes("yoga")}
            type={"yoga"}
            Title={"YOGA COURSES"}
            subTitle={"Keep yourself fit fella."}
            Price={"200"}
          />
          <Card
            membership={user.membership.includes("dance")}
            type={"dance"}
            Title={"DANCE COURSES"}
            subTitle={"Get fit with skill."}
            Price={"300"}
          />
        </div>
      </div>
    </div>
  );
}
