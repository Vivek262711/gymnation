import React from "react";
import "./Home.css";
import Hero from "../../Components/hero/Hero";
import Body from "../../Components/body/Body";
import Offer from "../../Components/offer/Offer";
export default function Home() {
  return (
    <div>
      <Hero />
      <Body />
      <Offer />
    </div>
  );
}
