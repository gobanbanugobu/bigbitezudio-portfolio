import React, { Fragment } from "react";
import "./ServiceWebsite.css";
import ServiceWebsiteTechImage from "../Images/serviceWebsiteTechImages.png";
import Button from "react-bootstrap/Button";
import websiteServiceUiUx from "../Images/websiteServiceUiUx.png";
import websiteServiceDevelopement from "../Images/websiteServiceDevelopement.png";
import websiteServiceMobile from "../Images/websiteServiceMobile.png";
import websiteServiceSeo from "../Images/websiteServiceSeo.png";
import flagDesign from "../Images/flagDesign.png";
import { FaArrowRight } from "react-icons/fa";
import webCreator from "../Images/webCreator.png";
import consultation from "../Images/Consultation.png";
import serviceWebsiteBrand from "../Images/serviceWebsiteBrand.png";
import serviceWebsiteUser from "../Images/serviceWebsiteUser.png";
import serviceWebsiteSeo from "../Images/serviceWebsiteSeo.png";
import serviceWebsiteConversionDriven from "../Images/serviceWebsiteConversionDrive.png";
import serviceWebsiteScalability from "../Images/serviceWebsiteScalability.png";
import serviceWebsiteCompetitiveAdvantage from "../Images/serviceWebsiteCompetitiveAdvantage.png";
function ServiceWebsite() {
  return (
    <Fragment>
      <div className="serviceWebsiteNavbarBack"></div>
      <div className="serviceWebsiteFirstRow">
        <h1>
          Website Development Company in Coimbatore |
          <span> Build Your Digital Presence with Us</span>
        </h1>
        <img
          src={ServiceWebsiteTechImage}
          alt="ServiceWebsiteTechImage"
          className="ServiceWebsiteTechImage"
        />
      </div>
      <p className="serviceWebsiteFirstRowParagraph">
        BigBitezudio is the
        <b> Best Website Development Company in Coimbatore,</b>
        offering custom web design and development services to elevate your
        brand online
      </p>

      <div className="serviceWebsiteSecondRowOverAllGreenContainer">
        <div className="serviceWebsiteSecondRowFirstColumn">
          <h6>
            ---------------------Why Choose Us for <span>Web Development?</span>
          </h6>
          <h2>
            Your Vision,<span>Our Expertise. </span> Results Delivered.
          </h2>
          <p>
            Choose BigBitezudio for web development because we deliver custom,
            responsive, and SEO-optimized websites that are designed to enhance
            user experience, boost your brand’s online presence, and drive
            business growth.
          </p>
          <Button variant="light">Hire Us</Button>
        </div>

        <div className="serviceWebsiteSecondRowSecondColumn">
          <div className="serviceWebsiteSecondRowSecondColumnBoxAlignment">
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img src={websiteServiceUiUx} alt="websiteServiceUiUx" />
              <h6>UI/UX</h6>
              <p>
                We create websites tailored to your business needs, ensuring
                unique designs and seamless functionality
              </p>
            </div>
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img
                src={websiteServiceDevelopement}
                alt="websiteServiceDevelopement"
              />
              <h6>Development</h6>
              <p>
                From small businesses to large enterprises, we develop
                e-commerce platforms that are easy to manage and geared toward
                driving sales.
              </p>
            </div>
          </div>
          <div className="serviceWebsiteSecondRowSecondColumnBoxAlignment">
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img src={websiteServiceMobile} alt="websiteServiceMobile" />
              <h6>mobile-friendly</h6>
              <p>
                Our websites are fully responsive, providing an optimal viewing
                experience across all devices, from desktops to mobile phones.
              </p>
            </div>
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img src={websiteServiceSeo} alt="websiteServiceSeo" />
              <h6>SEO</h6>
              <p>
                We build websites with search engine optimization (SEO) in mind,
                ensuring your site is easily discoverable by search engines and
                potential customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="secondRowEntireDiv">
        <div className="blueContainer"></div>

        <div className="serviceDetailsDiv">
          <h1>
            Grow Your Businesswith a<br /> Professionally
            <br />
            <span className="successText">Designed Website</span>
          </h1>
          <img className="flagDesign" src={flagDesign} alt="flag design" />
          <p>
            In today's digital age, a well-crafted website is more than just a
            digital storefront; it's a powerful tool for attracting new
            customers, building brand awareness, and driving business growth. At
            BigBitezudio, we're committed to helping businesses in Coimbatore
            and worldwide achieve their online goals through exceptional web
            development services.
          </p>

          <button className="letsGoButton">
            Lets Go <FaArrowRight className="arrowIcon" />
          </button>
        </div>
      </div>

      <div className="serviceWebsiteThirdRow">
        <div>
          <h1>
            Showcase Your Thought Leadership Brand with
            <br />
            <span>BIGBITEZUDIO</span>{" "}
          </h1>
          <p>
            At Bigitezudio,
            <b> a Best website development company in Coimbatore,</b> we
            specialize in creating visually stunning, high-performance websites
            that reflect your brand’s thought leadership and drive measurable
            results. Whether you’re a startup or established business, your
            website is often the first impression potential clients have of your
            company. That's why we focus on designing websites that not only
            look great but also offer seamless functionality and user
            experience.
          </p>
        </div>

        <img src={webCreator} alt="web reator" className="webCreator" />
      </div>

      <div className="serviceWebsiteThirdRow">
        <img src={consultation} alt="web reator" className="webCreator" />
        <div>
          <h1>
            Superior Web Design Represents
            <br />
            <span>Your Brand’s Excellence</span>{" "}
          </h1>
          <p>
            At Bigitezudio, a{" "}
            <b>top-rated website development company in Coimbatore,</b> we
            believe that superior web design goes beyond aesthetics—it's about
            creating an engaging, functional, and user-friendly digital
            experience that reflects the excellence of your brand. Your website
            is often the first point of contact for potential customers, and a
            well-designed site not only captures attention but also builds trust
            and drives conversions.
          </p>
        </div>
      </div>
      <hr className="serviceWebsiteHr" />
      <p className="thirdRowParagraph">
        A professionally designed website is a representation of your brand’s
        values, professionalism, and commitment to quality. At
        <span> Bigitezudio</span> , we specialize in creating websites that
        leave lasting impressions while delivering top-notch functionality. We
        combine modern design principles with the latest web development
        technologies to ensure your site is fast, responsive, and optimized for
        both users and search engines.
      </p>

      <h1 className="serviceCardHead">
        What Superior
        <span style={{ color: "var(--primaryColor)" }}> Web Design</span>{" "}
        Represents
      </h1>

      <div className="whiteCardContainer">
        <div className="whiteCard">
          <img
            src={serviceWebsiteBrand}
            className="whiteCardLogo"
            alt="serviceWebsiteBrand"
          />
          <h4>Brand Credibility </h4>
          <p>
            A visually appealing and easy-to-navigate website instantly
            establishes trust and credibility with your audience.
          </p>
        </div>

        <div className="whiteCard">
          <img
            src={serviceWebsiteUser}
            className="whiteCardLogo"
            alt="serviceWebsiteUser"
          />
          <h4>User Experience</h4>
          <p>
            A superior web design ensures that visitors can easily find the
            information they need and have a seamless experience across all
            devices.
          </p>
        </div>
        <div className="whiteCard">
          <img
            src={serviceWebsiteSeo}
            className="whiteCardLogo"
            alt="serviceWebsiteSeo"
          />
          <h4>SEO Success</h4>
          <p>
            Good design is integral to search engine optimization. Our websites
            are built with SEO in mind, ensuring better search rankings and
            visibility.
          </p>
        </div>
        <div className="greenHorizontalRectangleContainer">
          <div className="greenHorizontalRectangle"></div>
        </div>
      </div>

      <div className="whiteCardContainer">
        <div className="whiteCard">
          <img
            src={serviceWebsiteConversionDriven}
            className="whiteCardLogo"
            alt="serviceWebsiteConversionDriven"
          />
          <h4>Conversion-Driven</h4>
          <p>
            Beyond just looks, our designs are geared toward increasing
            conversions and driving business growth
          </p>
        </div>

        <div className="whiteCard">
          <img
            src={serviceWebsiteScalability}
            className="whiteCardLogo"
            alt="serviceWebsiteScalability"
          />
          <h4>Scalability</h4>
          <p>
            As your business grows, so should your website. Our designs are
            future-proof, allowing for easy updates and expansions
          </p>
        </div>
        <div className="whiteCard">
          <img
            src={serviceWebsiteCompetitiveAdvantage}
            className="whiteCardLogo"
            alt="serviceWebsiteCompetitiveAdvantage"
          />
          <h4>Competitive Advantage </h4>
          <p>
            A well-designed website sets you apart from competitors by
            showcasing your brand’s uniqueness and professionalism, giving you
            an edge in the marketplace.
          </p>
        </div>
        <div className="greenHorizontalRectangleContainer">
          <div className="greenHorizontalRectangle"></div>
        </div>
      </div>

      <div className="whiteCardContainer">
        <div className="websiteGreenVerticalRectangleContainer">
          <div className="websiteGreenVerticalRectangle"></div>
          <div className="websiteGreenVerticalRectangle"></div>
          <div className="websiteGreenVerticalRectangle"></div>
        </div>
      </div>
      <h1 className="letsTalk">Get In Touch!</h1>
      <div className="letsTalkDiv">
        <button className="letsTalkButton">
          Contact Us
          <FaArrowRight className="arrowIcon1" />
        </button>
      </div>
    </Fragment>
  );
}
export default ServiceWebsite;
