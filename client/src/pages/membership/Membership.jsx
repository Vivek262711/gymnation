import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Membership.css";
import MemberCard from "./MemberCard";
import Message from "../../Components/message/Message";
export default function Membership() {
  const [message, setMessage] = useState({ status: "failed", message: "" });
  const body = [
    "Core Strength",
    "Muscular Strength",
    "Improve body composition",
    "IncreseFlexiblity",
    "Increse Cardiorespiratory endurance",
  ];
  const yoga = [
    "A specially constructed dance floor",
    "Learn dance under best guidance",
    "Increases your muscle tone and flexibility",
    "Increses your Stamina",
    "Increses you body action and performance",
  ];
  const dance = [
    "Reduce anxiety",
    "Improve quality of life",
    "Boosts immunity",
    "Helps with stress relief",
    "Improves mental health",
  ];
  let listFinal;
  let image;
  let isMember = false;
  const user = useSelector((state) => state.checkUser.user);
  return (
    <div className="membership">
      <div className="trainer-join-text">Our Membership Plans🤸‍♂️</div>
      
      {message.message ? (
        <Message status={message.status} message={message.message} />
      ) : null}
      <div className="membership-wrapper">
        {["Fitness Training", "Yoga Classes", "Dance Classes"].map(
          (e, index) => {
            switch (index) {
              case 0:
                isMember = user.membership.includes("body");
                image =
                  "https://cdn.lifehack.org/wp-content/uploads/2013/06/bodybuilding-tips.jpg";
                listFinal = body;
                break;
              case 1:
                isMember = user.membership.includes("yoga");
                image =
                  "https://cdn.cdnparenting.com/articles/2019/02/24151535/167027126-H.webp";
                listFinal = yoga;
                break;
              default:
                isMember = user.membership.includes("dance");
                image =
                  "https://images.healthshots.com/healthshots/hi/uploads/2022/07/08171723/Dance-to-lose-weight-1600x900.jpg";
                listFinal = dance;
                break;
            }
            return (
              <MemberCard
                message={message}
                setMessage={setMessage}
                key={index}
                image={image}
                Title={e}
                member={isMember}
                list={listFinal}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
