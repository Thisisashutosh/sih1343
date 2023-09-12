import React from "react";

const LoadingScreen = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        width: "100%",
        backgroundColor: "#8080803e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
