import React from "react";
import "./App.css";
import homeimg from "./img/homeimg.jpg";
import education from "./img/education.webp";
import skills from "./img/skills.png";
import languages from "./img/languages.png";
import Teamwork from "./components/Teamwork.jsx";
import GitHubButton from "./components/GithubButton.jsx";
import Website from "./components/Website.jsx";
import project1 from "./img/project-1.png";
import project2 from "./img/project-2.png";
import project3 from "./img/project-3.png";
import project4 from "./img/project-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      {/* header */}
      <header>
        <div className="bx bx-menu" id="menu-icon"></div>
        <nav>
          <ul className="navlist">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a
          href="https://drive.google.com/file/d/1IboOJStJ7TI6BDaBzvGp-cDNkihqC07G/view"
          className="top-btn"
        >
          Download CV
        </a>
      </header>

      {/* home */}
      <section className="home" id="home">
        <div className="home-text">
          <h3>Hello, I'm</h3>
          <h1>Deepak BP</h1>
          <h5>
            An aspiring full stack developer{" "}
            <span>From Bengaluru,Karnataka,India</span>
          </h5>
          <p>
            I'm an enthusiastic web designer, passionate in programming <br />{" "}
            and dedicated to my work.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/deepak-b-p-04a04623b">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/deepakprakash_404/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/deepak.prakash.75098">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <a href="#about" className="btn">
            About Me
          </a>
        </div>
        <div className="home-img">
          <img src={homeimg} alt="profile" />
        </div>
      </section>

      {/* sub-service */}
      <section className="sub-service">
        <div className="items">
          <div className="sub-box">
            <div className="sub-img">
              <img src={education} alt="education" />
            </div>
            <h3>Education</h3>
            <p>
              currently pursuing{" "}
              <strong>B.E in electronics and communication</strong>
              <br />
              Dayananda sagar academy of technology and management
            </p>
          </div>

          <div className="sub-box">
            <div className="sub-img">
              <img src={skills} alt="skills" />
            </div>
            <h3>Skills</h3>
            <p>
              JAVA, Javascript
              <br />
              react.js
              <br />
              Node.js express.js
              <br />
              MongoDB
              <br />
              Html, css, Photoshop
            </p>
          </div>

          <div className="sub-box">
            <div className="sub-img">
              <img src={languages} alt="languages" />
            </div>
            <h3>Communication</h3>
            <p>
              Kannada
              <br />
              English
              <br />
              Hindi
              <br />
              Telugu
            </p>
          </div>
        </div>
      </section>

      {/* about */}
      <section className="about" id="about">
        <div className="about-img">
          <Teamwork />
        </div>
        <div className="about-text">
          <h3>
            I'm a <strong>fast learner</strong> & a <strong>team player</strong>
          </h3>
          <h2>
            I Can Design any website to your<strong> satisfaction</strong>
          </h2>
          <p>
            Hello there! I'm a front end developer and web designer carving my
            path towards full stack development. I believe that team work is the
            most practical solution to a problem and the diversity in opinions
            in decision making is the key to betterment. I enjoy every step of
            the design process, from discussion and implementation.
          </p>
          <a href="#" className="btn">
            Contact Me
          </a>
        </div>
      </section>
      {/* portfolio */}
      <section className="portfolio" id="portfolio">
        <div className="heading">
          <h3>Portfolio</h3>
          <h2>My projects</h2>
        </div>

        <div className="portfolio-content">
          <div className="col">
            <img src={project1} alt="project-1" />
            <div className="layer">
              <h3>My portfolio website</h3>
              <div className="div1">
                {" "}
                <GitHubButton link="https://github.com/deepakbp00/" />{" "}
              </div>
              <div className="div2">
                <Website link="https://dee-fitnessfreak.netlify.app/" />
              </div>
            </div>
          </div>

          <div className="col">
            <img src={project2} alt="project-2" />
            <div className="layer">
              <h3>Fitness Freak website</h3>
              <div className="div1">
                {" "}
                <GitHubButton link="https://github.com/deepakbp00/fitnessfreak" />{" "}
              </div>
              <div className="div2">
                <Website link="https://dee-fitnessfreak.netlify.app/" />
              </div>
            </div>
          </div>

          <div className="col">
            <img src={project3} alt="project-3" />
            <div className="layer">
              <h3>Freightos website</h3>
              <div className="div1">
                {" "}
                <GitHubButton link="https://github.com/deepakbp00/freightos" />{" "}
              </div>
              <div className="div2">
                <Website link="https://dee-freightos.netlify.app/" />
              </div>
            </div>
          </div>

          <div className="col">
            <img src={project4} alt="project-4" />
            <div className="layer">
              <h3>Social Media website</h3>
              <div className="div1">
                {" "}
                <GitHubButton link="https://github.com/deepakbp00/postyourtripclient" />{" "}
              </div>
              <div className="div2">
                <Website link="https://dee-trip-poster.onrender.com/" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="center">
            <h3>You can contact me at below address</h3>
            <p>deepakprakash990@outlook.com</p>
          </div>

          <div className="action">
            <form>
              <input
                type="email"
                name="email"
                placeholder="share your email"
                required
              />
              <input type="submit" name="submit" value="Submit" />
            </form>
          </div>
        </div>
      </section>
      <footer class="ends">
        <p>
          Made by <strong>Deepak BP</strong>Copyright © 2023
        </p>
      </footer>
    </div>
  );
}

export default App;
