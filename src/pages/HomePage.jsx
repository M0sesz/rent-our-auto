import React from "react";
import { MainContainer } from "../GlobalStyle";

const HomePage = () => {
  return (
    <MainContainer>
      <header style={headerStyle}>
        <h1>Welcome Rent-A-Car</h1>
        <p style={welcomeTextStyle}>
          Welcome to our website! Here, you can find the perfect car for you and
          your family.
        </p>
      </header>
    </MainContainer>
  );
};

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
};

const welcomeTextStyle = {
  fontSize: "18px",
  margin: "10px",
};

export default HomePage;
