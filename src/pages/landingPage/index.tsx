import React from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";

function LandingPage() {
  return (
    <div className="main-container">
      {/* Header */}
      <Header />
      {/* Menu */}
      <div className="left-container container">
        <Menu />
      </div>
    </div>
  );
}

export default LandingPage;
