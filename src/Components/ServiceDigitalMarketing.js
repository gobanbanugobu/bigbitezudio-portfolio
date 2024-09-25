import React, { useEffect, useState } from "react";
import "./ServiceDigitalMarketing.css";
import searchIcon from "../Images/searchIcon.png";
import flagDesign from "../Images/flagDesign.png";
import { Modal } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import serviceSeo from "../Images/serviceSEO.png";
import servicePPC from "../Images/servicePPC.png";
import serviceSMM from "../Images/serviceSMM.png";
import serviceContentMarketing from "../Images/serviceContentMarketing.png";
import serviceEmailMarketing from "../Images/serviceEmailMarketing.png";
import serviceConversionRating from "../Images/serviceConversionRating.png";
import serviceAnalytics from "../Images/seviceAnalytics.png";
import serviceLocalSeo from "../Images/serviceLocalSeo.png";
import serviceMobileMarketing from "../Images/serviceMobile Marketing.png";
import leaderboard from "../Images/Leaderboard.png";
import relatedCompanies from "../Images/Related Companies.png";
import goal from "../Images/Goal.png";
import omniChannel from "../Images/Omnichannel.png";
import brainStormSkill from "../Images/Brainstorm Skill.png";
import estimate from "../Images/Estimate.png";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";

function ServiceDigitalMarketing() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const googleFormCookie = Cookies.get("googleForm");
    if (!googleFormCookie) {
      setShowModal(true);
      Cookies.set("googleForm", "true", { expires: 365 });
    }
  }, []);

  const handleClose = () => setShowModal(false);
  const [url, setUrl] = useState("");
  const urlSubmit = async (event) => {
    event.preventDefault();
    // console.log(url);
    try {
      const response = await axios.post(
        "http://localhost:3003/serviceUrl/post/api",
        {
          url: url,
        }
      );
      console.log(response.data);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Thank you for contacting us! we will get back to you soon",
      });
    } catch (error) {
      console.log(error);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "error",
        title: "Something went wrong!,try again later",
      });
    }
    setUrl("");
  };
  const handleEnquiryClick = () => {
    const phoneNumber = "+918056821811"; // Replace with your phone number
    const message = "Hello, I would like to enquire about..."; // Replace with your custom message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Services Inquiry Form - Bigbitezudio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfAnrnFRyK5TxVi-dWf9Nl7h0NiE8ojWsznKQHbP6u3CaugCA/viewform?embedded=true"
            width="100%"
            height="400"
            title="Google Form"
          >
            Loading…
          </iframe>
        </Modal.Body>
      </Modal>

      <div className="serviceContainer">
        <div className="blackHalfCircle">
          <h1>
            <span className="whiteText">
              Elevate Your Growth with
              <br /> Forward-Thinking Solutions
              <br /> from{" "}
            </span>
            <span className="primaryText">
              Coimbatore's Premier
              <br /> Digital Marketing Company
            </span>
          </h1>{" "}
        </div>

        <form className="searchContainer" onSubmit={urlSubmit}>
          <div className="search-bar">
            <input
              type="url"
              placeholder="Enter URL"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
              required
              value={url}
            />
            <div className="search-btn">
              <img className="searchIcon" src={searchIcon} alt="search icon" />
            </div>
          </div>

          <div className="buttons">
            <button className="proposal-btn">GET YOUR PROPOSAL</button>
            <button className="enquiry-btn" onClick={handleEnquiryClick}>
              For enquiry
            </button>
          </div>
        </form>

        <p className="serviceParagraph">
          Elevate your business growth with forward-thinking digital marketing
          solutions from BigBiteZudio,
          <b> Coimbatore's premier digital marketing company.</b> We specialize
          in innovative strategies that boost visibility, drive engagement, and
          deliver measurable results
        </p>
      </div>

      <div className="secondRowEntireDiv">
        <div className="blueContainer"></div>

        <div className="serviceDetailsDiv">
          <h1>
            Your Partner in <br />
            Digital Marketing <br />
            <span className="successText">Success</span>
          </h1>
          <img className="flagDesign" src={flagDesign} alt="flag design" />
          <p>
            In today's fast-paced world, digital marketing offers businesses of
            all sizes the chance to market their brand 24/7 at an affordable
            cost. Whether you're a startup, a growing enterprise, or a business
            with multiple locations, Bigbitezudio, a digital marketing company
            in Coimbatore, is here to help you expand your reach and connect
            with your target customers, no matter where they are or what time it
            is.
          </p>
          <p>
            Hiring a digital marketing agency like BigBiteZudio is one of the
            most effective ways to engage with new prospects while maintaining
            strong relationships with your existing clients. With a robust
            digital presence, your customers will always be able to find you.
          </p>

          <p>
            As a trusted digital marketing company in Coimbatore, we specialize
            in providing custom digital marketing services designed to meet your
            unique business goals. Let BigBiteZudio help you achieve your
            conversion goals and take your business to new heights.
          </p>

          <button className="letsGoButton">
            Lets Go <FaArrowRight className="arrowIcon" />
          </button>
        </div>
      </div>

      <h1 className="serviceCardHead">
        <span style={{ color: "var(--primaryColor)" }}>BigBiteZudio's</span>{" "}
        Digital Marketing Services
      </h1>
      <p className="serviceCardParagraph">
        Build Brand Recognition as an Industry Leader and Boost Your
        Profitability
      </p>

      <div className="whiteCardContainer">
        <div className="whiteCard">
          <img className="whiteCardLogo" alt="seo logo" src={serviceSeo} />
          <h4>Search Engine Optimization (SEO)</h4>
          <p>
            Improve your website’s visibility on search engines, attract more
            organic traffic, and outrank your competitors.
          </p>
        </div>

        <div className="whiteCard">
          <img className="whiteCardLogo" alt="ppc logo" src={servicePPC} />
          <h4>Pay-Per-Click (PPC) Advertising</h4>
          <p>
            Target your ideal customers with precision, drive immediate traffic,
            and maximize your return on investment with our strategic PPC
            campaigns.
          </p>
        </div>
        <div className="whiteCard">
          <img className="whiteCardLogo" alt="smm logo" src={serviceSMM} />
          <h4>Social Media Marketing</h4>
          <p>
            Engage with your audience, build a loyal community, and enhance your
            brand's presence on platforms like Facebook, Instagram, LinkedIn,
            and more.
          </p>
        </div>
        <div className="greenHorizontalRectangleContainer">
          <div className="greenHorizontalRectangle"></div>
        </div>
      </div>

      <div className="whiteCardContainer">
        <div className="whiteCard">
          <img
            className="whiteCardLogo"
            alt="content marketing logo"
            src={serviceContentMarketing}
          />
          <h4>Content Marketing</h4>
          <p>
            Create and distribute valuable, relevant content that resonates with
            your target audience, positioning your brand as a thought leader in
            your industry.
          </p>
        </div>

        <div className="whiteCard">
          <img
            className="whiteCardLogo"
            alt="email marketing logo"
            src={serviceEmailMarketing}
          />
          <h4>Email Marketing</h4>
          <p>
            Keep your customers informed and engaged with personalized email
            campaigns that drive conversions and build lasting relationships.
          </p>
        </div>
        <div className="whiteCard">
          <img
            className="whiteCardLogo"
            alt="ppc logo"
            src={serviceConversionRating}
          />
          <h4>Conversion Rate Optimization </h4>
          <p>
            Optimize your website to convert more visitors into customers,
            improving your bottom line without increasing traffic.
          </p>
        </div>
        <div className="greenHorizontalRectangleContainer">
          <div className="greenHorizontalRectangle"></div>
        </div>
      </div>

      <div className="whiteCardContainer">
        <div className="whiteCard">
          <img
            className="whiteCardLogo"
            alt="service analytics logo"
            src={serviceAnalytics}
          />
          <h4>Analytics and Reporting</h4>
          <p>
            Gain insights into your marketing performance with our detailed
            analytics and reporting services. We provide actionable data that
            helps you make informed decisions and optimize your strategies.
          </p>
        </div>

        <div className="whiteCard">
          <img
            className="whiteCardLogo"
            alt="email marketing logo"
            src={serviceLocalSeo}
          />
          <h4>Local SEO</h4>
          <p>
            Reach customers in your local area with our Local SEO services. We
            optimize your online presence to ensure you appear in local searches
            and attract more customers to your business.
          </p>
        </div>
        <div className="whiteCard">
          <img
            className="whiteCardLogo"
            alt="ppc logo"
            src={serviceMobileMarketing}
          />
          <h4>Mobile Marketing </h4>
          <p>
            Reach your customers on the go with our mobile marketing services.
            From mobile ads to app marketing, we ensure your business is
            accessible and engaging on mobile devices.
          </p>
        </div>
        <div className="greenHorizontalRectangleContainer">
          <div className="greenHorizontalRectangle"></div>
        </div>

        <div className="greenVerticalRectangleContainer">
          <div className="greenVerticalRectangle"></div>
          <div className="greenVerticalRectangle"></div>
          <div className="greenVerticalRectangle"></div>
        </div>
      </div>

      <h2 className="digitalMarketingServiceBuisness">
        Why Your Business Should Be Using Digital Marketing Services
      </h2>
      <div className="greenDottedLineContainer">
        <div className="greenDottedLine"></div>
      </div>

      <div className="digitalMarketingServiceBuisnessListContainer">
        <ul>
          <li>
            In today’s digital age, having an online presence is no longer
            optional—it’s essential. As a{" "}
            <strong>premier digital marketing company in Coimbatore,</strong>{" "}
            BigBiteZudio helps businesses harness the power of online marketing
            to drive growth and boost visibility. Digital marketing offers
            targeted strategies that traditional methods can’t match, allowing
            you to reach the right audience, increase brand awareness, and
            generate more leads.
          </li>
          <li>
            With services like SEO, PPC, social media marketing, and content
            marketing, your business can rank higher on search engines, attract
            relevant traffic, and convert visitors into loyal customers. At
            <strong> BigBiteZudio,</strong> we craft personalized marketing
            campaigns designed to meet your specific goals and maximize your
            ROI. Whether you're a startup or an established company, digital
            marketing is the most effective way to stay competitive, build a
            strong brand, and engage your audience in real-time.
          </li>
        </ul>
      </div>

      <h1 className="whyChooseBigBiteZudio">
        Why Choose <i>BigBiteZudio</i> As Your Digital Marketing Partner?
      </h1>

      <div className="secondRowEntireDiv">
        <div className="blueContainer1"></div>

        <div className="serviceDetailsDiv">
          <p>
            At BigBiteZudio, we don't just provide digital marketing services;
            we deliver strategies that drive results. As one of the
            <strong> digital marketing company in Coimbatore,</strong> our focus
            is on creating tailored solutions that meet the unique needs of each
            client. We take pride in our data-driven approach, expert team, and
            ability to craft personalized marketing campaigns that bring
            measurable success. Whether you need help with SEO, PPC, social
            media, or content marketing, BigBiteZudio is the partner you can
            rely on to take your business to the next level.
          </p>
        </div>
      </div>

      <div className="serviceBottomEntireDiv">
        <div className="serviceBottomDiv">
          <div className="serviceBottomGreenContainer">
            <img
              className="serviceBottomGreenLogo"
              src={leaderboard}
              alt="leaderboard logo"
            />
          </div>
          <h5>Results-Driven Digital Strategies</h5>
          <p>
            At Bigbitezudio, we use advanced data analytics to create digital
            marketing strategies that deliver the best ROI. Every decision is
            based on performance metrics and insights, ensuring optimal results
            for your campaigns.
          </p>
        </div>

        <div className="serviceBottomDiv">
          <div className="serviceBottomGreenContainer">
            <img
              className="serviceBottomGreenLogo"
              src={relatedCompanies}
              alt="related companies logo"
            />
          </div>
          <h5>Industry-Leading Experts</h5>
          <p>
            Our team of seasoned professionals brings years of experience across
            various industries, helping you stay ahead of your competitors with
            cutting-edge digital solutions.
          </p>
        </div>

        <div className="serviceBottomDiv">
          <div className="serviceBottomGreenContainer">
            <img
              className="serviceBottomGreenLogo"
              src={goal}
              alt="goal logo"
            />
          </div>
          <h5>Tailored Digital Marketing Plans</h5>
          <p>
            We don’t believe in one-size-fits-all. Our custom digital marketing
            frameworks are designed to meet the specific needs of your business,
            ensuring each campaign is aligned with your goals.
          </p>
        </div>
      </div>

      <div className="serviceBottomEntireDiv">
        <div className="serviceBottomDiv">
          <div className="serviceBottomGreenContainer">
            <img
              className="serviceBottomGreenLogo"
              src={omniChannel}
              alt="omni channel logo"
            />
          </div>
          <h5>Multichannel Personalization</h5>
          <p>
            We create seamless marketing experiences across multiple platforms,
            from social media to email marketing, delivering personalized
            messages that resonate with your audience.
          </p>
        </div>

        <div className="serviceBottomDiv">
          <div className="serviceBottomGreenContainer">
            <img
              className="serviceBottomGreenLogo"
              src={brainStormSkill}
              alt="brain storm logo"
            />
          </div>
          <h5>Data-Driven Optimization</h5>
          <p>
            We continually monitor and evaluate each campaign to ensure it meets
            performance benchmarks, making data-driven adjustments to optimize
            your results.
          </p>
        </div>

        <div className="serviceBottomDiv">
          <div className="serviceBottomGreenContainer">
            <img
              className="serviceBottomGreenLogo"
              src={estimate}
              alt="estimate logo"
            />
          </div>
          <h5>Affordable and Competitive Pricing</h5>
          <p>
            <strong>BigBiteZudio</strong> offers high-quality digital marketing
            services at competitive prices, ensuring that you get the most value
            for your investment.
          </p>
        </div>
      </div>

      <h1 className="letsTalk">Get In Touch!</h1>
      <div className="letsTalkDiv">
        <button
          className="letsTalkButton"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Contact Us
          <FaArrowRight className="arrowIcon1" />
        </button>
      </div>
    </div>
  );
}

export default ServiceDigitalMarketing;
