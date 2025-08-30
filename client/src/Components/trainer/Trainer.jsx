import React from "react";
import "./Trainer.css";
import TrainerCard from "./TrainerCard";
export default function Trainer() {
  return (
    <div className="trainer">
      <div className="trainer-join-text">💪Our Trainers team</div>
      <div className="trainer-list">
        <TrainerCard
          image={"assets/trainers/1.jpg"}
          name={"Saksham Sinha"}
          duty={"Core Body Trainer"}
          email={"sk263@gmail.com"}
          contact={"8797626299"}
        />
        <TrainerCard
          image={"assets/trainers/2.jpg"}
          name={"Mintu Mishra"}
          duty={"Muscle training expert"}
          email={"mmBokaro24@gmail.com"}
          contact={"8335956466,"}
        />
        <TrainerCard
          image={"assets/trainers/3.jpg"}
          name={"Sakshi Jain"}
          duty={"Dance and Yoga expert"}
          email={"sakshi451@email.com"}
          contact={"7970716231"}
        />
        <TrainerCard
          image={"assets/trainers/4.jpg"}
          name={"Nipun Singh"}
          duty={"Dance and Diet plan expert"}
          email={"nipunS983@email.com"}
          contact={"8292347761"}
        />
      </div>
    </div>
  );
}
