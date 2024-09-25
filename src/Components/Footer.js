import React from "react";
import "./Footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bigbitezudio from "../Images/bigbitezudio.png";
import twitter from "../Images/twitter.png";
import meta from "../Images/meta.png";
import threads from "../Images/threads.png";
import fb from "../Images/fb.png";
import instagram from "../Images/instagram.png";
import google from "../Images/google.png";
import linkedin from "../Images/linkedin.png";
import youtube from "../Images/youtube.png";
import arrow from "../Images/arrow.png";
function Footer() {
  return (
    <div>
      <div className="footerDiv">
        <Row>
          <Col xs={12} md={6} xl={4}>
            <h1 className="footerHeading">SERVICES</h1>
            <ul className="footerList">
              <li>
                <a href="#/">Web Development</a>
              </li>
              <li>
                <a>Mobile App Development</a>
              </li>
              <li>
                <a>SEO (Search Engine Optimization)</a>
              </li>
              <li>
                <a>PPC Advertising</a>
              </li>
              <li>
                <a>Social Media Marketing</a>
              </li>
              <li>
                <a>Email Marketing</a>
              </li>
              <li>
                <a>Online Reputation Management</a>
              </li>
              <li>
                <a>E-commerce Solutions</a>
              </li>
              <li>
                <a>Branding & Design</a>
              </li>
              <li>
                <a>Conversion Rate Optimization (CRO)</a>
              </li>
              <li>
                <a>Analytics & Reporting</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6} xl={3}>
            <h1 className="footerHeading">QUICK LINK</h1>
            <ul className="footerList">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Service/DigitalMarketing">Services</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a href="/AboutUs">About us</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <div className="footerImages">
              <img
                className="bigbitezudioLogo center"
                src={bigbitezudio}
                alt="Big Bite Zudio"
              />
              <a href="https://x.com/BigbitezudioCom" target="_blank">
                <img
                  className="bigbitezudioLogo top"
                  src={twitter}
                  alt="Twitter"
                />
              </a>
              <a href="https://www.instagram.com/bigbitezudio/" target="_blank">
                <img
                  className="bigbitezudioLogo topRight"
                  src={meta}
                  alt="Meta"
                />
              </a>
              <a href="https://www.threads.net/@bigbitezudio" target="_blank">
                <img
                  className="bigbitezudioLogo right"
                  src={threads}
                  alt="Threads"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100090601491187"
                target="_blank"
              >
                <img
                  className="bigbitezudioLogo bottomRight"
                  src={fb}
                  alt="Facebook"
                />
              </a>
              <a href="https://www.instagram.com/bigbitezudio/" target="_blank">
                <img
                  className="bigbitezudioLogo bottom"
                  src={instagram}
                  alt="Instagram"
                />
              </a>
              <a href="https://g.co/kgs/M1z79fC" target="_blank">
                <img
                  className="bigbitezudioLogo bottomLeft"
                  src={google}
                  alt="Google"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/bigbitezudio"
                target="_blank"
              >
                <img
                  className="bigbitezudioLogo left"
                  src={linkedin}
                  alt="LinkedIn"
                />
              </a>
              <a href="https://www.youtube.com/@bigbitezudio" target="_blank">
                <img
                  className="bigbitezudioLogo topLeft"
                  src={youtube}
                  alt="YouTube"
                />
              </a>
            </div>
            <p className="companyCaption">
              © 2024 bigbitezudio.com
              <br />
              bigbitezudio@gmail.com
            </p>
          </Col>
        </Row>
      </div>
      <a href="#companyName">
        <img className="moveUp" alt="move up image" src={arrow} />
      </a>
    </div>
  );
}

export default Footer;
