import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-contents footer-about">
        <h1 className="footer-heading">About</h1>
        <hr />
        <p className="about-content">-First fully furnished gym in Bokaro</p>
        <p className="about-content">-Fully air conditioned</p>
        <p className="about-content">-Sanitized restroom</p>
        <p className="about-content">-New Hi-Tech Machines</p>
        <p className="about-content">-Personal Trainer</p>
        <p className="about-content">-Affordable price</p>
        <p className="about-content">-Supervised Diet Plan</p>
        <button className="btn" onClick={() => navigate("/membership")}>
          Buy Now <i className="fa-solid fa-caret-right"></i>
        </button>
      </div>
      <div className="footer-classes footer-contents">
        <h1 className="footer-heading">Classes</h1>
        <hr />
        <div className="classes-container">
          <h3
            className="footer-text classes-footer footer-link"
            onClick={() => navigate("../membership")}
          >
            FITNESS CLASSES →
          </h3>
          <h3
            className="footer-text classes-footer footer-link"
            onClick={() => navigate("../membership")}
          >
            YOGA CLASSES →
          </h3>
          <h3
            className="footer-text classes-footer footer-link"
            onClick={() => navigate("../membership")}
          >
            DANCE CLASSES →
          </h3>
        </div>
      </div>
      <div className="footer-contents footer-contact">
        <h1 className="footer-heading">Contact</h1>
        <hr />
        <div className="ul">
          <li className="footer-contact-li">
            Week days @ 05:00-22:00 || Saturday: 08:00 – 18:00 || Sunday: Closed
          </li>
          <li className="footer-contact"> Mobile: 8335956466, 8797626299</li>
          <li className="footer-contact">
            CITY CENTRE,Sector-4,PLOT NO.F-3,Bokaro Steel City
          </li>
          <li className="footer-contact">E-mail: gymnationbokaro@gmail.com</li>
          <li className="footer-contact map-btn">
            <a
              href="https://www.google.com/maps/contrib/107896633929044088995/photos/@23.6683218,86.14456,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1"
              className="footer-link"
            >
              Get directions on map →
            </a>
          </li>
        </div>
      </div>
      <div className="footer-contents footer-social">
      <a href="https://www.facebook.com/watch/?v=1143321946303544">
          <i className="top-icon fa-brands fa-facebook"></i>
        </a>
        <a href="https://bharatbz.com/jharkhand/gymnation-540748">
          <i className="top-icon fa-solid fa-mug-hot"></i>
        </a>
        <a href="https://www.top-rated.online/cities/K%C4%81tr%C4%81s/place/p/9266480/GYMNATION8">
          <i className="top-icon fa-solid fa-comments"></i>
        </a>
        <a href="https://www.instagram.com/gymnation_bokaro/?hl=en">
          <i className="top-icon fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
