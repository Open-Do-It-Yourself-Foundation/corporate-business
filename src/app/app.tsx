import React from "react";
import ReactDOM from "react-dom";
import "../../styles.css";
import LandingPage from "../pages/landingPage";

const App: React.FC<{ compiler: string; framework: string }> = props => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById("root")
);
