import React from "react";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Stats from "../../components/stats";
import LineChart from "../../components/LineChart";
import Media from "../../components/media";
import SocialLeft from "../../components/socialLeft";
import Profile from "../../components/profile";
import WeatherInfo from "../../components/weatherInfo";
import SocialMiddle from "../../components/socialMiddle";


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
        <Media />
        <SocialLeft />
      </div>
      {/* Middle Container */}
      <div className="middle-container container">
        <Profile />
        <WeatherInfo />
        <SocialMiddle/>
      </div>
    </div>
  );
}

export default LandingPage;
