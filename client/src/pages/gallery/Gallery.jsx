import React, { useEffect } from "react";
import "./Gallery.css";
export default function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const getPictures = () => {
    let pics = [];
    for (let i = 1; i < 29; i++) {
      pics.push(
        <img
          key={i}
          src={`assets/gallery/${i}.jpg`}
          alt="gallery-pic"
          className="gallery-image"
        />
      );
    }
    return pics;
  };

  return (
    <div className="gallery">
      <h1 className="gallery-title">
        <i className="fa-solid fa-dumbbell"></i> GYMNATION
      </h1>
      <hr />
      <div className="gallery-images">{getPictures()}</div>
    </div>
  );
}
