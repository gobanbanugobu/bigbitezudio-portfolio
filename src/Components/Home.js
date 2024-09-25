import React, { useState } from "react";
import "./Home.css";

import Vector1 from "../Images/Vector 1.png";
import Vector2 from "../Images/Vector 2.png";
import star1 from "../Images/Star 1.png";
import background from "../Images/Background.png";
import man2 from "../Images/Man2.png";
import Button from "react-bootstrap/Button";
import consultImage from "../Images/consultImage.png";
import { FcCheckmark } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import lowertriangle from "../Images/lowertriangle.png";
import man1 from "../Images/Man1.png";
import halfCircle from "../Images/halfCircle.png";
import woman1 from "../Images/Woman1.png";
import analysis from "../Images/analysis.png";
import support from "../Images/support.png";
import onboarding from "../Images/onboarding.png";
import developement from "../Images/developement.png";
import design from "../Images/design.png";
import research from "../Images/research.png";


import seo from "../Images/seo.png";
import web from "../Images/web.png";
import vedio from "../Images/vedio.png";
import cw from "../Images/cw.png";
import smm from "../Images/smm.png";
import ppc from "../Images/ppc.png";


export default function Home() {


  return (
    <div>
      <div id="companyName" className="main-container">
        <div className="heading-container">
          <h1 className="companyHeading">
            We are
            <span style={{ color: "white" }}>
              {" "}
              Digital
              <img className="vector1" alt="vector1" src={Vector1} /> <br />
              Marketing Company
            </span>{" "}
            <br />
            <img className="vector2" alt="vector2" src={Vector2} />
            in Coimbatore
          </h1>
        </div>
        <div className="half-circle"></div>
      </div>

      <div className="serviceTop">
        <img className="starImage" alt="star" src={star1} />
        <h3 className="serviceHead">Digital marketing</h3>
        <img className="starImage" alt="star" src={star1} />
        <h3 className="serviceHead">App & Web Development</h3>
        <img className="starImage" alt="star" src={star1} />
        <h3 className="serviceHead">Brand marketing & Adversitment</h3>
      </div>

      <div className="firstRowContainer">
        <div className="contentContainer">
          <p className="digitalContent">Our Digital Marketing Expertise</p>
          <p className="digitalContent2">
            At <strong>BigBiteZudio,</strong> we deliver impactful digital
            marketing solutions. From app and web development to SEO, SMM, video
            production, and PPC, our expert team crafts personalized strategies
            to help your brand thrive in the digital world.
          </p>
        </div>
        <div className="imagesDiv">
          <div className="blackContainer">
            <img className="balckContainerIcon" alt="seo icon" src={seo} />
            <p className="blackContainerContent">Search Engine Optimization</p>
          </div>
          <div className="blackContainer">
            <img className="balckContainerIcon" alt="website icon" src={web} />
            <p className="blackContainerContent">Website App & Development</p>
          </div>
        </div>
      </div>

      <div className="secondRowContainer">
        <div className="blackContainer">
          <img className="balckContainerIcon" alt="seo icon" src={vedio} />
          <p className="blackContainerContent">Video editing & Production</p>
        </div>
        <div className="blackContainer">
          <img className="balckContainerIcon" alt="website icon" src={cw} />
          <p className="blackContainerContent">Content Writing</p>
        </div>

        <div className="blackContainer">
          <img className="balckContainerIcon" alt="website icon" src={smm} />
          <p className="blackContainerContent">Social media Marketing</p>
        </div>
        <div className="blackContainer">
          <img className="balckContainerIcon" alt="website icon" src={ppc} />
          <p className="blackContainerContent">Pay per click (PPC)</p>
        </div>
      </div>

      <div className="serviceDetails">
        <div className="serviceContact">
          <img className="background" alt="bacground Image" src={background} />
          <img className="man2" alt="man Image" src={man2} />
        </div>
        <div>
          <h2 className="serviceContactHead">
            Why you should choose Bigbitezudio
          </h2>
          <p>
            Choose BigBiteZudio for innovative, tailored strategies that ensure
            your brand stands out. We focus on quality, creativity, and
            measurable success to help you achieve your digital goals
            efficiently.
          </p>
          <div className="buttonStyle">
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Contact Us
            </Button>{" "}
          </div>
        </div>
      </div>

      <div className="buttonCarousel">
        <h1
          style={{ textAlign: "center", marginTop: "-70px", fontWeight: "650" }}
        >
          We customize our services to meet your unique needs.
        </h1>
        <div className="carouselContainer">
          <button className="prevButton">‹</button>
          <div className="allButtons">
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Digital Marketing
            </Button>
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Developement
            </Button>
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Design
            </Button>
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Vedio Production
            </Button>
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Consultant
            </Button>
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Brand Marketing
            </Button>
            <Button
              style={{
                borderRadius: "30px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              variant="outline-success"
            >
              Search Engine Optimization
            </Button>
          </div>
          <button className="nextButton">›</button>
        </div>
      </div>

      <div className="consultDiv">
        <div>
          <ul className="consultList">
            <li>
              <FcCheckmark />
              We provide strategic advice tailored to your business goals,
              helping you make informed decisions.
            </li>
            <li>
              <FcCheckmark />
              Our consulting services are designed to address your unique
              challenges and opportunities.
            </li>
            <li>
              <FcCheckmark />
              We focus on delivering actionable insights that drive growth and
              success for your business.
            </li>
          </ul>
          <a className="learnMore">
            Learn more <FaArrowRightLong />
          </a>
        </div>
        <div className="consultImageDiv">
          <img
            className="consultImage"
            alt="Consulting Image"
            src={consultImage}
          />
        </div>
      </div>

      <div className="overallAbout">
        <div className="triangleContainer">
          <img
            className="uppertriangle"
            alt="uppertriangle"
            src={lowertriangle}
          ></img>
          <img
            className="lowertriangle"
            alt="lowertriangle"
            src={lowertriangle}
          ></img>
          <img className="man1" alt="man1 Image" src={man1} />
        </div>

        <div className="aboutDiv">
          <h1>About us</h1>
          <p>
            At <b>BigBiteZudio</b>, we specialize in digital marketing, app and
            web development, and creative solutions that drive brand success.
            Our expert team is dedicated to delivering personalized strategies
            that help your business grow and thrive in the digital landscape.
          </p>
          <a className="moreAbout">
            More about us <FaArrowRightLong />
          </a>
          <img
            className="paratriangle"
            alt="paratriangle"
            src={lowertriangle}
          />
        </div>
      </div>

      <div className="multiImage">
        <div className="imagesContainer imagesContainer1">
          <img className="halfCircle" alt="half circle" src={halfCircle} />
          <img className="woman1" alt="woman image" src={woman1} />
        </div>
        <div className="imagesContainer imagesContainer2">
          <img className="halfCircle" alt="half circle" src={halfCircle} />
          <img className="woman1" alt="man image" src={man2} />
        </div>
      </div>

     
      <h1 className="thoughtsHeading">
        THOUGHTFUL PROCESS
        <span className="thoughtsContent">I THINK A LOT</span>
      </h1>

      <div className="thoughtsDetails1">
        <div className="thoughtsBorder">
          <img className="thoughtsImage" src={analysis} alt="analysis Image" />
          <h4>
            <sup style={{ color: "var(--primaryColor)", fontSize: "15px" }}>
              01/
            </sup>{" "}
            ANALYSIS
          </h4>
          <p>
            Live workshop where we define the main problems and challenges
            before building a strategic plan moving forward.
          </p>
        </div>
        <div className="thoughtsBorder">
          <img className="thoughtsImage" src={research} alt="analysis Image" />
          <h4>
            <sup style={{ color: "var(--primaryColor)", fontSize: "15px" }}>
              02/
            </sup>
            RESEARCH
          </h4>
          <p>
            Competitive & Market research with the aim of finding that sweet
            spot that will set your brand apart.
          </p>
        </div>
        <div className="thoughtsBorder">
          <img className="thoughtsImage" src={design} alt="analysis Image" />
          <h4>
            <sup style={{ color: "var(--primaryColor)", fontSize: "15px" }}>
              03/
            </sup>
            DESIGN
          </h4>
          <p>
            Here’s where your digital product starts to become a tangible thing
            with visual elements and a great UX design.
          </p>
        </div>
      </div>

      <div className="thoughtsDetails2">
        <div className="thoughtsBorder">
          <img
            className="thoughtsImage"
            src={developement}
            alt="analysis Image"
          />
          <h4>
            <sup style={{ color: "var(--primaryColor)", fontSize: "15px" }}>
              04/
            </sup>{" "}
            DEVELOPEMENT
          </h4>
          <p>
            Using Webflow, a no-code tool that allow us full creative
            development & is easy to manage by your team after launch.
          </p>
        </div>
        <div className="thoughtsBorder">
          <img
            className="thoughtsImage"
            src={onboarding}
            alt="analysis Image"
          />
          <h4>
            <sup style={{ color: "var(--primaryColor)", fontSize: "15px" }}>
              05/
            </sup>
            ONBOARDING
          </h4>
          <p>
            How to update and maintain your new digital product in minutes using
            no-code tools that are easy to use.
          </p>
        </div>
        <div className="thoughtsBorder">
          <img className="thoughtsImage" src={support} alt="analysis Image" />
          <h4>
            <sup style={{ color: "var(--primaryColor)", fontSize: "15px" }}>
              06/
            </sup>
            SUPPORT
          </h4>
          <p>
            I got you, even after launching your digital product you can still
            count on me for every question or issue.
          </p>
        </div>
      </div>

    
    </div>
  );
}
