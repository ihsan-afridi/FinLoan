import React from "react";
import { FaCloud, FaCloudSun, FaCloudRain, FaSun } from "react-icons/fa";

const SkyColors = () => {
  const items = [
    { icon: <FaCloud />, text: "Dopkin", color: "#ADD8E6" }, // Light Sky Blue
    { icon: <FaCloudSun />, text: "Verticle", color: "#87CEFA" }, // Deep Sky Blue
    { icon: <FaCloudRain />, text: "Shallow", color: "#4682B4" }, // Steel Blue
    { icon: <FaSun />, text: "Diggo Next", color: "#FFD700" }, // Gold
  ];

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        className="row justify-content-center"
        style={{ width: "100%", gap: "20px", textAlign: "center" }}
      >
        {items.map((item, index) => (
          <div
            className="col-md-2 col-sm-5"
            key={index}
            style={{
              backgroundColor: item.color,
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                fontSize: "30px",
                color: "white",
                marginBottom: "10px",
              }}
            >
              {item.icon}
            </div>
            <h5 style={{ color: "white", fontWeight: "bold" }}>{item.text}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkyColors;
