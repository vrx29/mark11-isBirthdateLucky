import "./styles.css";
import React from "react";
// import { GithubOutlined, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';
import { useState } from "react";
import shocked from "./img/shocked.png";
import happy from "./img/happy.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
const cookieImg =
  "https://www.flaticon.com/svg/static/icons/svg/2913/2913782.svg";

function App() {
  const [modal, setModal] = useState({ display: "flex" });
  const [dob, setDob] = useState("");
  const [luckyNo, setLuckyNo] = useState(0);
  const [isLucky, setIsLucky] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    if (name === "dob") {
      setDob(event.target.value);
    } else {
      setLuckyNo(event.target.value);
    }
  };

  const isDateLucky = () => {
    let newStr = dob.replace(/-/gi, "");
    let sum = 0;
    for (let i = 0; i < newStr.length; i++) {
      sum += parseInt(newStr.charAt(i));
    }
    console.log(sum % luckyNo);
    if (sum % luckyNo === 0) {
      setIsLucky(true);
    } else {
      setIsLucky(false);
    }
    setShowDiv(true);
  };
  return (
    <React.Fragment>
      <div class="container">
        <div class="cookiesContent" id="cookiesPopup" style={modal}>
          <button
            class="close"
            onClick={() => {
              setModal({ display: "none" });
            }}
          >
            ✖
          </button>
          <img src={cookieImg} alt="cookies-img" />
          <p>Privacy Notice! We are not storing your data.</p>
          <button class="accept">That's fine!</button>
        </div>
      </div>
      <div className="container">
        <h1>Is Your Birthday Lucky?</h1>
        <h3>Enter Your Birthdate and lucky number to continue...</h3>
        <div className="inputs">
          <label>Enter your Date of Birth :</label>
          <input
            type="date"
            onChange={onChangeHandler}
            name="dob"
            value={dob}
          />
          <label>Enter your lucky number :</label>
          <input
            type="number"
            placeholder="eg: 7"
            name="luckyNo"
            value={luckyNo}
            onChange={onChangeHandler}
          />
          <button onClick={isDateLucky}>Check</button>
        </div>
      </div>
      {showDiv ? (
        <div className="container">
          {isLucky ? (
            <>
              <img src={happy} alt="happy" />
              <p>Congrats your Date of Birth is Lucky !!!!</p>
            </>
          ) : (
            <>
              <img src={shocked} alt="shocked" />
              <p>
                So Sorry but unfortunately your Date of Birth is not Lucky !!!!
              </p>
            </>
          )}
        </div>
      ) : null}

      <footer>
        <div className="social_media">
          <ul>
            <li>
              <a href="https://github.com/vrx29">
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/vrx29">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/vrx29">
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="info">Made with 💖 by Vineet</div>
      </footer>
    </React.Fragment>
  );
}

export default App;
