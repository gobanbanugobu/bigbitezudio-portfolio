import React from "react";
import "./AboutUs.css";
import aboutUsBackgroundImage from "../Images/aboutUsBackgroundImage.png";
import Button from "react-bootstrap/Button";
import hand from "../Images/hand.png";
import rocket from "../Images/rocket.png";
import medal from "../Images/medal.png";
import message from "../Images/message.png";
import praveen from "../Images/praveen.png";
import reviews from "../Images/reviews.png";
import sastha from "../Images/sastha.png";
import arun from "../Images/arun.png";
import mukilan from "../Images/mukilan.png";
import kangeyan from "../Images/kangeyan.png";
import raveena from "../Images/raveena.png";
import swetha from "../Images/swetha.png";
import pradeep from "../Images/pradeep.jpeg";
import whatWeDoImg from "../Images/whatWeDoImg.png";
import aboutGoal from "../Images/aboutGoal.png";
import aboutIdea from "../Images/aboutIdea.png";
import aboutIdeaSharing from "../Images/aboutIdeaSharing.png";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import aboutCompanyLogo from "../Images/aboutCompanyLogo.png";

function AboutUs() {
  const settings = {
    dots: false,
    infinite: true, // or true
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="aboutUsContainer">
        <img
          src={aboutUsBackgroundImage}
          alt="aboutUsBackgroundImage"
          className="aboutUsBackgroundImage"
        />
        <div className="aboutUsBackgroundImageHeadings">
          <h1>
            Meet The Team Behind
            <br />
            <span>BigBiteZudio's</span> Success
          </h1>
          <p>Powered by Passion, Driven by Expertise</p>
          <Button
            variant="light"
            onClick={() => {
              // Replace with your phone number
              const phoneNumber = "+916380521667";
              // Redirect to phone dialer
              window.location.href = `tel:${phoneNumber}`;
            }}
          >
            Contact Us Today
          </Button>
        </div>
      </div>

      <div className="aboutUsSuccessStoryContent">
        <h1>Discover Our Story of Success</h1>
        <p>
          At <b>BigBiteZudio, </b> our journey is defined by innovation,
          dedication, and the success of our clients. From humble beginnings to
          becoming a trusted digital marketing and development partner, we’ve
          always prioritized delivering results-driven solutions. Our story is
          one of growth—both for us and the businesses we serve. Every project
          we undertake is guided by a passion for excellence and a commitment to
          helping brands reach new heights. Discover how we’ve transformed ideas
          into impactful strategies, driving measurable success for businesses
          of all sizes. Join us on this journey and let’s create your success
          story together.
        </p>
      </div>

      <div className="aboutUsIconsetOverAllContainer">
        <div className="aboutUsIconsetContainer">
          <img src={hand} alt="business" />
          <h4>Trusted business</h4>
          <p>
            We Deliver success to
            <br /> your business.
          </p>
        </div>
        <div className="aboutUsIconsetContainer">
          <img src={rocket} alt="business" />
          <h4>Expertise in Action</h4>
          <p>
            We assist our clients to
            <br /> set right strategy.
          </p>
        </div>

        <div className="aboutUsIconsetContainer">
          <img src={medal} alt="business" />
          <h4>Recognized Excellence</h4>
          <p>
            We see challenges as
            <br /> opportunities.
          </p>
        </div>
        <div className="aboutUsIconsetContainer">
          <img src={message} alt="business" />
          <h4>Always Ready to Help</h4>
          <p>
            Supportive, Reliable,
            <br />
            Always Ready to Assist.
          </p>
        </div>
      </div>

      <h2 className="weAreHereToHelpHeading">We Are Here to Help You!</h2>

      <div className="employeeGroupImages">
        <div className="employeeImages">
          <img src={praveen} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              PRAVEEN KUMAR
              <a
                href="https://www.linkedin.com/in/praveen-kumar-192654278/?originalSubdomain=in"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Director</p>
          </div>
        </div>

        <div className="employeeImages">
          <img src={sastha} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              SASTHA
              <a
                href="https://www.linkedin.com/in/sastha-g-a1a2a7319/"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Mobile Frontend Developer</p>
          </div>
        </div>

        <div className="employeeImages">
          <img src={arun} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              ARUN KUMAR
              <a
                href="https://www.linkedin.com/in/arun-kumar-8a6796a3/"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Mobile Backend Developer</p>
          </div>
        </div>
        <div className="employeeImages">
          <img src={raveena} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              RAVEENA
              <a
                href="https://www.linkedin.com/in/raveena-mohankumar/"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Mobile Backend Developer</p>
          </div>
        </div>

        <div className="employeeImages">
          <img src={swetha} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              SWETHA
              <a
                href="https://www.linkedin.com/in/swetha-s-599069252/"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Mobile Frontend Developer</p>
          </div>
        </div>

        <div className="employeeImages">
          <img src={mukilan} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              MUKILAN
              <a
                href="https://www.linkedin.com/in/r-mukilan-605782228/"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Web Backend Developer</p>
          </div>
        </div>

        <div className="employeeImages">
          <img src={kangeyan} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              KANGEYAN
              <a
                href="https://www.linkedin.com/in/kangeyan-k-108b0b226/"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Web Backend Developer</p>
          </div>
        </div>

        <div className="employeeImages">
          <img src={pradeep} alt="Employees" />
          <div className="employeesconnect">
            <h5>
              PRADEEP
              <a
                href="https://www.linkedin.com/in/pradeep-s-343072214/"
                target="_blank"
              >
                in
              </a>
            </h5>
            <p>Web Frontend Developer</p>
          </div>
        </div>
      </div>

      <div className="overallAchievingContainer">
        <div className="aboutUsBusinessEfficientContainer">
          <div className="aboutUsBusinessEfficient">
            <h1>99.9%</h1>
            <p>
              Monitor and <br />
              analyze data
            </p>
          </div>
          <hr />
          <div className="aboutUsBusinessEfficient">
            <h1>4.9</h1>
            <img src={reviews} alt="reviews" />
            <p>High Rated</p>
          </div>
          <hr />
          <div className="aboutUsBusinessEfficient">
            <h1>4yrs of</h1>
            <p>
              Experience In
              <br />
              Industry
            </p>
          </div>
        </div>

        <div className="achieveBusiness">
          <h4>The Way We Work</h4>
          <h2>Achieving Your Business Goals Efficiently</h2>
          <p>
            At <b>BigBiteZudio,</b> we focus on helping you achieve your
            business goals with precision and efficiency. By leveraging the
            latest digital marketing strategies and tools, we streamline your
            path to success. Whether it's increasing visibility, driving
            conversions, or boosting engagement, our tailored solutions ensure
            your objectives are met in the most effective way possible. Let’s
            work together to turn your goals into reality, faster and smarter.
          </p>
          <h6>BEST DIGITAL MARKETING COMPANY</h6>
        </div>
      </div>

      <div className="whatWeDoContainer">
        <div className="whatWeDo">
          <h5>What We Do</h5>
          <h2>
            Crafting Digital Solutions
            <br /> That Drive Success
          </h2>
          <ul>
            <li>
              <span>Digital Marketing:</span> From SEO and social media
              management to PPC and content marketing, we craft tailored
              strategies that boost your brand’s visibility and drive measurable
              results.
            </li>

            <li>
              <span>App Development:</span> Whether you're looking for an
              innovative mobile app or custom enterprise software, our
              development team creates user-friendly applications that enhance
              customer engagement.
            </li>

            <li>
              <span>Web Development: </span> We build responsive,
              aesthetically-pleasing websites optimized for performance,
              ensuring a seamless user experience across all devices.
            </li>

            <li>
              <span>Software Solutions:</span> We provide tailor-made software
              solutions that streamline business processes, increase efficiency,
              and drive growth.
            </li>
          </ul>
        </div>

        <img className="whatWeDoImg" src={whatWeDoImg} alt="what we do" />
      </div>

      <div className="aboutDataWithContainer">
        <div className="aboutWhyChooseContainer">
          <div className="aboutWhyChoose">
            <h2>Why Choose BigBitezudio</h2>
            <ul>
              <li>
                <span> Client-Centric Focus:</span> Your business goals are our
                top priority. We take the time to understand your needs and
                deliver personalized solutions that align with your vision.
              </li>

              <li>
                <span> Expertise & Innovation:</span> Our team of skilled
                professionals stays ahead of the curve, utilizing the latest
                technologies and strategies to provide cutting-edge solutions.
              </li>

              <li>
                <span>Proven Results: </span> We’re committed to delivering
                measurable outcomes, from increased brand visibility to improved
                customer engagement and business growth.
              </li>

              <li>
                <span>Integrity & Transparency: </span> Trust is the foundation
                of our business. We believe in open communication, honest
                practices, and delivering on our promises.
              </li>
              <li>
                <span>End-to-End Solutions:</span>
                Whether it’s digital marketing, app development, web design, or
                custom software, we provide a seamless experience from concept
                to execution.
              </li>
            </ul>
          </div>
        </div>

        <div className="greenImageWithContentContainer">
          <div className="greenImageWithContent">
            <img src={aboutIdeaSharing} alt="aboutGoal" />
            <p>Solutions Tailored Specifically to Your Business Needs</p>
          </div>
          <div className="greenImageWithContent">
            <img src={aboutIdea} alt="aboutGoal" />
            <p>Creative Excellence Elevates Every Project</p>
          </div>
          <div className="greenImageWithContent">
            <img src={aboutGoal} alt="aboutGoal" />
            <p>Client Satisfaction is Our Main Focus</p>
          </div>
        </div>
      </div>

      <Card className="aboutFormCard">
        <Card.Body className="aboutFormCardBody">
          <img
            src={aboutCompanyLogo}
            alt="aboutCompanyLogo"
            className="aboutCompanyLogo"
          />
          <div className="consultationForm">
            <h1>Free Consultation</h1>
            <div className="inputForms">
              <Form.Control
                type="text"
                name="name"
                placeholder="Full Name*"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                className="inputFormsBox"
                required
              />
              <Form.Control
                type="text"
                name="interest"
                placeholder="I'am interested in*"
                id="inputPassword5"
                className="inputFormsBox"
                aria-describedby="passwordHelpBlock"
                required
              />
            </div>
            <div className="inputForms">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email*"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                className="inputFormsBox"
                required
              />
              <Form.Control
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                id="inputPassword5"
                className="inputFormsBox"
                aria-describedby="passwordHelpBlock"
                required
              />
            </div>
            <Button variant="success">Success</Button>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AboutUs;
