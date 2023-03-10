import React from "react";
import "./ScoreBar.scss";
import RedBtn from "../RedBtn/RedBtn";

const ScoreBar = ({
  date,
  league,
  firstimage,
  firstname,
  secondimage,
  secondname,
  half,
}) => {
  return (
    <>
      <div className="score-bar">
        <div className="score-bar-container">
          <div className="score-bar-container-left">
            <div className="score-bar-container-left-first">
              <h4>{date}</h4>
              <p>{league}</p>
            </div>
            <div className="score-bar-container-left-second">
              <div className="score-bar-container-left-second-outer">
                <span></span>
                <p>Live</p>
              </div>
            </div>
            <div className="score-bar-container-left-country">
              <img src={firstimage} alt="flag" />
              <h3>{firstname}</h3>
            </div>
          </div>
          <div className="score-bar-container-middle">
            <center> VS</center>
          </div>
          <div className="score-bar-container-right">
            <div className="score-bar-container-right-country">
              <h3>{secondname}</h3>
              <img src={secondimage} alt="flag" />
            </div>
            <div className="score-bar-container-right-half">
              <h5>{half}</h5>
            </div>
            <RedBtn text="watch" to="/watch" />
          </div>
        </div>

        <div className="score-bar-responsive">
          <div className="score-bar-responsive-container">
            <div className="score-bar-responsive-container-bottom">
              <div className="score-bar-responsive-container-top">
                <h4>{date}</h4>
                <p>{league}</p>
              </div>
              <div className="score-bar-container-left-second">
                <div className="score-bar-container-left-second-outer">
                  <span></span>
                  <p>Live</p>
                </div>
              </div>
              <div className="score-bar-responsive-container-bottom-country">
                <img src={firstimage} alt="flag" />
                <h3>{firstname}</h3>
              </div>
              {/* <div className="score-bar-responsive-container-bottom-country-image">
              </div> */}
              <div className="score-bar-responsive-container-bottom-vs">
                <h5>vs</h5>
              </div>
              <div className="score-bar-responsive-container-bottom-country">
                <h3>{secondname}</h3>
                <img src={secondimage} alt="flag" />
              </div>
              <div className="score-bar-responsive-container-top">
                  <h5>{half}</h5>
              </div>
              <RedBtn text="watch" to="/watch" />
            </div>
          </div>
        </div>
        {/* <div>
          <div className="match-info">
            <p>{date}</p>
            <p>{league}</p>
          </div>
          <div>
            <div className="score-bar-container-left-second">
                <div className="score-bar-container-left-second-outer">
                  <span></span>
                  <p>Live</p>
                </div>
            </div>
          </div>
          <div className="match-first-team">
            <img src={firstimage} alt='flag' />
            <p>{firstname}</p>
          </div>
          <div className="match-vs">
              vs
          </div>
          <div className="match-second-team">
            <img src={secondimage} alt='flag' />
            <p>{secondname}</p>
          </div>
          <div className="match-details">
            {half}
          </div>
          <div>
            <RedBtn text="watch" to="/watch" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ScoreBar;
