import React, { Fragment } from "react";
import "./ServiceSaas.css";
import serviceSaasLeftSnake from "../Images/serviceSaasLeftSnake.png";
import serviceSaasRightSnake from "../Images/serviceSaasRightSnake.png";
import serviceSaasSubscribe from "../Images/serviceSaasSubscribe.png";
import serviceSaasInstagram from "../Images/serviceSaasInstagram.png";
import serviceSaasRevenue from "../Images/serviceSaasRevenue.png";
import serviceSaasAnalytics from "../Images/serviceSaasAnalytics.png";
import serviceSaasStats from "../Images/serviceSaasStats.png";
import serviceSaasMarketingImg from "../Images/serviceSaasMarketingImg.png";
import serviceSaasProjectImg from "../Images/serviceSaasProjectImg.png";
import serviceSaasSalesImg from "../Images/serviceSaasSalesImg.png";
import serviceSaasDesignImg from "../Images/serviceSaasDesignImg.png";
import serviceSaasSoftwareImg from "../Images/serviceSaasSoftwaremg.png";
import serviceSaasHrImg from "../Images/serviceSaasHrImg.png";
import websiteServiceUiUx from "../Images/websiteServiceUiUx.png";

function ServiceSaas() {
  return (
    <Fragment>
      <div className="serviceWebsiteNavbarBack"></div>
      <div className="serviceSaasFirstRow">
        <img
          className="serviceSaasLeftSnake"
          src={serviceSaasLeftSnake}
          alt="serviceSaasLeftSnake"
        />
        <h1>
          The Ultimate All-in-One Analytics Suite for{" "}
          <span>Maximizing Engagement</span>{" "}
        </h1>
        <img
          className="serviceSaasRightSnake"
          src={serviceSaasRightSnake}
          alt="serviceSaasRightSnake"
        />
      </div>
      <div className="serviceSaasSecondRow">
        <img src={serviceSaasSubscribe} alt="serviceSaasSubscribe" />
        <section className="serviceSaasSecondRowParagraphAndButton">
          <p>
            At <b>BigBitezudio</b>, we take pride in being the{" "}
            <b>best SaaS software development company in Coimbatore</b>,
            offering scalable, secure, and high-performance Software as a
            Service (SaaS) solutions. Our custom SaaS applications empower
            businesses to thrive in the cloud with seamless functionality and
            outstanding user experiences.
          </p>
          <button>CONTACT US</button>
        </section>
        <img src={serviceSaasInstagram} alt="serviceSaasInstagram" />
      </div>

      <div className="serviceSaasThirdRowImagesContainer">
        <img
          className="serviceSaasRevenueImg"
          src={serviceSaasRevenue}
          alt="serviceSaasRevenue"
        />
        <img
          className="serviceSaasAnalyticsImg"
          src={serviceSaasAnalytics}
          alt="serviceSaasAnalytics"
        />
        <img
          className="serviceSaasStatsImg"
          src={serviceSaasStats}
          alt="serviceSaasStats"
        />
      </div>

      <h1 className="serviceSaasFourthRowHeading">
        Custom <span>SaaS</span> Product Development
      </h1>
      <div className="serviceSaasFourthRow">
        <section>
          <img
            className="serviceSaasMarketingImg"
            src={serviceSaasMarketingImg}
            alt="serviceSaasMarketingImg"
          />
          <p>Marketing</p>
        </section>
        <section>
          <img
            className="serviceSaasMarketingImg"
            src={serviceSaasProjectImg}
            alt="serviceSaasProjectImg"
          />
          <p>
            Project
            <br /> Management
          </p>
        </section>
        <section>
          <img
            className="serviceSaasMarketingImg"
            src={serviceSaasSalesImg}
            alt="serviceSaasSalesImg"
          />
          <p>Sales & CRM</p>
        </section>
        <section>
          <img
            className="serviceSaasMarketingImg"
            src={serviceSaasDesignImg}
            alt="serviceSaasDesignImg"
          />
          <p>Design</p>
        </section>
        <section>
          <img
            className="serviceSaasMarketingImg"
            src={serviceSaasSoftwareImg}
            alt="serviceSaasSoftwareImg"
          />
          <p>
            Software
            <br /> Development
          </p>
        </section>
        <section>
          <img
            className="serviceSaasMarketingImg"
            src={serviceSaasHrImg}
            alt="serviceSaasHrImg"
          />
          <p>HR</p>
        </section>
      </div>

      <p className="serviceSaasFourthRowIndividuallParagraph">
        We design and develop<span>fully customized SaaS platforms</span>  to suit your
        specific business requirements, ensuring long-term success.
      </p>

      <div className="serviceSaasSecondRowSecondColumnBox">
              <img src={websiteServiceUiUx} alt="websiteServiceUiUx" />
              <h6>UI/UX</h6>
              <p>
                We create websites tailored to your business needs, ensuring
                unique designs and seamless functionality
              </p>
            </div>
    </Fragment>
  );
}

export default ServiceSaas;
