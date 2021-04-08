import React from "react";

const index = () => {
  return (
    <div>
      <div className="tweets block">
        <h2 className="titular">
          <span className="icon zocial-twitter"></span>LATEST TWEETS
        </h2>
        <div className="tweet first">
          <p>
            Ice-cream trucks only play music when out of ice-cream. Well played
            dad. On{" "}
            <a className="tweet-link" href="#17">
              @Quora
            </a>
          </p>
          <p>
            <a className="time-ago scnd-font-color" href="#18">
              3 minutes ago
            </a>
          </p>
        </div>
        <div className="tweet">
          <p>
            We are in the process of pushing out all of the new CC apps! We will
            tweet again once they are live{" "}
            <a className="tweet-link" href="#19">
              #CreativeCloud
            </a>
          </p>
          <p>
            <a className="scnd-font-color" href="#20">
              6 hours ago
            </a>
          </p>
        </div>
      </div>
      <ul className="social block">
        <li>
          <a href="#50">
            <div className="facebook icon">
              <span className="zocial-facebook"></span>
            </div>
            <h2 className="facebook titular">SHARE TO FACEBOOK</h2>
          </a>
        </li>
        <li>
          <a href="#51">
            <div className="twitter icon">
              <span className="zocial-twitter"></span>
            </div>
            <h2 className="twitter titular">SHARE TO TWITTER</h2>
          </a>
        </li>
        <li>
          <a href="#52">
            <div className="googleplus icon">
              <span className="zocial-googleplus"></span>
            </div>
            <h2 className="googleplus titular">SHARE TO GOOGLE+</h2>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default index;
