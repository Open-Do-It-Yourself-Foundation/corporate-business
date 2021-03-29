import React from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Stats from "../../components/stats";
import LineChart from "../../components/LineChart";

function LandingPage() {
  return (
    <div className="main-container">
      {/* Header */}
      <Header />
      {/* Menu */}
      <div className="left-container container">
        <Menu />
        <div className="donut-chart-block block">
          <Stats />
        </div>
        <div className="line-chart-block block clear">
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
