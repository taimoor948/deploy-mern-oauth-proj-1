import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div className="image-container">
      <img
        src="/music.jpg"
        alt="Music"
        style={{
          marginTop: "2px",
          width: "100%",
          height: "100%",
        }}
        className="responsive-image"
      />
    </div>
  );
};

export default Home;
