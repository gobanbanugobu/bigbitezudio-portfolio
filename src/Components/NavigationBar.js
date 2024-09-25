import React, { useState } from "react";
import logo from "../Images/logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NavigationBar.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import CloseButton from "react-bootstrap/CloseButton";
import { Link } from "react-router-dom";


function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isServiceBoxVisible, setServiceBoxVisible] = useState(false);

  const handleMouseEnter = () => {
    setServiceBoxVisible(true);
  };

  const handleMouseLeave = () => {
    setServiceBoxVisible(false);
  };

  const [showPopOver, setShowPopOver] = useState(false);
  const handleTogglePopover = () => {
    setShowPopOver(!showPopOver); // Toggle popover visibility
  };

  const handleClosePopover = () => {
    setShowPopOver(false); // Close popover
  };

  const popover = (
    <Popover id="popover-basic" className="popOverBox">
      <Popover.Header
        as="h2"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "var(--primaryColor)" }}> Our Services</span>
        <CloseButton onClick={handleClosePopover} />
      </Popover.Header>

      <Popover.Body>
        <Row>
          <Col xs={12} md={6} xl={3}>
            <div className="service-category">
              <ul>
                <li>
                  {" "}
                  <a href="/Service/DigitalMarketing">
                    {" "}
                    <h5>Digital Marketing</h5>
                  </a>
                </li>
                <li>
                  <a href="link-to-seo-service">
                    SEO (Search Engine Optimization)
                  </a>
                </li>
                <li>
                  <a href="link-to-local-seo-service">Local SEO</a>
                </li>
                <li>
                  <a href="link-to-ppc-service">
                    PPC (Pay-Per-Click Advertising)
                  </a>
                </li>
                <li>
                  <a href="link-to-social-media-marketing-service">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="link-to-content-marketing-service">
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a href="link-to-email-marketing-service">Email Marketing</a>
                </li>
                <li>
                  <a href="link-to-online-reputation-management-service">
                    Online Reputation Management
                  </a>
                </li>
                <li>
                  <a href="link-to-video-marketing-service">Video Marketing</a>
                </li>
                <li>
                  <a href="link-to-cro-service">
                    Conversion Rate Optimization (CRO)
                  </a>
                </li>
                <li>
                  <a href="link-to-analytics-reporting-service">
                    Analytics and Reporting
                  </a>
                </li>
                <li>
                  <a href="link-to-mobile-marketing-service">
                    Mobile Marketing
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <div className="service-category">
              <ul>
                <li>
                  <a href="/Service/Website-Developement">
                    <h5>Website</h5>
                  </a>
                </li>
                <li>
                  <a href="link-to-website-design-service">Website Design</a>
                </li>
                <li>
                  <a href="link-to-custom-web-development-service">
                    Custom Web Development
                  </a>
                </li>
                <li>
                  <a href="link-to-ecommerce-development-service">
                    E-commerce Development
                  </a>
                </li>
                <li>
                  <a href="link-to-responsive-design-service">
                    Responsive Design
                  </a>
                </li>
                <li>
                  <a href="link-to-ui-ux-design-service">UI/UX Design</a>
                </li>
                <li>
                  <a href="link-to-web-application-development-service">
                    Web Application Development
                  </a>
                </li>
                <li>
                  <a href="link-to-api-integration-service">API Integration</a>
                </li>
                <li>
                  <a href="link-to-landing-page-design-service">
                    Landing Page Design
                  </a>
                </li>
                <li>
                  <a href="link-to-seo-friendly-design-service">
                    SEO-Friendly Design
                  </a>
                </li>
                <li>
                  <a href="link-to-website-redesign-service">
                    Website Redesign
                  </a>
                </li>
                <li>
                  <a href="link-to-cms-development-service">
                    CMS Development (WordPress, Joomla, etc.)
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <div className="service-category">
              <ul>
                <li>
                  <a href="Services">
                    <h5>Application</h5>
                  </a>
                </li>
                <li>
                  <a href="link-to-custom-app-development-service">
                    Custom App Development
                  </a>
                </li>
                <li>
                  <a href="link-to-ios-app-development-service">
                    iOS App Development
                  </a>
                </li>
                <li>
                  <a href="link-to-android-app-development-service">
                    Android App Development
                  </a>
                </li>
                <li>
                  <a href="link-to-cross-platform-app-development-service">
                    Cross-Platform App Development
                  </a>
                </li>
                <li>
                  <a href="link-to-ui-ux-for-apps-service">
                    UI/UX Design for Apps
                  </a>
                </li>
                <li>
                  <a href="link-to-app-prototyping-wireframing-service">
                    App Prototyping and Wireframing
                  </a>
                </li>
                <li>
                  <a href="link-to-mobile-app-testing-service">
                    Mobile App Testing
                  </a>
                </li>
                <li>
                  <a href="link-to-app-maintenance-support-service">
                    App Maintenance and Support
                  </a>
                </li>
                <li>
                  <a href="link-to-aso-service">App Store Optimization (ASO)</a>
                </li>
                <li>
                  <a href="link-to-hybrid-app-development-service">
                    Hybrid App Development
                  </a>
                </li>
                <li>
                  <a href="link-to-pwa-development-service">
                    Progressive Web App (PWA) Development
                  </a>
                </li>
                <li>
                  <a href="link-to-enterprise-mobile-app-development-service">
                    Enterprise Mobile App Development
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} xl={3}>
            <div className="service-category">
              <ul>
                <li>
                  {" "}
                  <a href="/Service/Software-as-a-Service">
                    <h5>Software Development</h5>
                  </a>
                </li>
                <li>
                  <a href="link-to-influencer-marketing-service">
                    Software as a Service(Saas)
                  </a>
                </li>
                <li>
                  <a href="link-to-influencer-marketing-service">
                    Influencer Marketing
                  </a>
                </li>

                <li>
                  <a href="link-to-lead-generation-campaigns-service">
                    Lead Generation Campaigns
                  </a>
                </li>
                <li>
                  <a href="link-to-marketing-automation-service">
                    Marketing Automation
                  </a>
                </li>
                <li>
                  <a href="link-to-influencer-collaboration-service">
                    Influencer Collaboration Campaigns
                  </a>
                </li>
                <li>
                  <a href="link-to-brand-advertising-service">
                    Brand Advertising
                  </a>
                </li>
                <li>
                  <a href="link-to-podcast-marketing-service">
                    Podcast Marketing
                  </a>
                </li>
                <li>
                  <a href="link-to-sms-marketing-service">SMS Marketing</a>
                </li>
                <li>
                  <a href="link-to-voice-search-optimization-service">
                    Voice Search Optimization
                  </a>
                </li>
                <li>
                  <a href="link-to-chatbot-marketing-service">
                    Chatbot Marketing
                  </a>
                </li>
                <li>
                  <a href="link-to-ab-testing-service">A/B Testing</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Popover.Body>
    </Popover>
  );

  return (
    <div>
      <header>
        <div className="border">
          <nav className="nav">
            <div className="nav-left">
              <img className="logo" alt="Logo" src={logo}></img>
              <a href="/" className="companyName">
                bigbitezudio
              </a>
            </div>
            <div className={`nav-right ${menuOpen ? "open" : ""}`}>
              <ul className="nav-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li className="dropdown">
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="bottom"
                    show={showPopOver}
                    overlay={popover}
                  >
                    <a href="#/" onClick={handleTogglePopover}>
                      Services
                      {/* <span className="arrow"></span> */}
                    </a>
                  </OverlayTrigger>
                </li>

                <li>
                  <a href="/Projects">Project</a>
                </li>

                <li>
                  <a href="/AboutUs">About</a>
                </li>
                <li>
                  <a href="/Careers">Careers</a>
                </li>
              </ul>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
        </div>
      </header>

      {/* {isServiceBoxVisible && <div className="serviceBox"></div>} */}
    </div>
  );
}

export default NavigationBar;
