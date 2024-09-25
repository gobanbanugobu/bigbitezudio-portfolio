import React,{useState} from "react";
import "./HomePage.css";
import axios from "axios";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import homePageKeyboardImg from "../Images/homePageKeyboardImg.png";
import Button from "react-bootstrap/Button";
import homePageMicksetImg from "../Images/homePageMicksetImg.png";
import homePageClientImg from "../Images/homePageClientImg.png";
import homePageCommitmentImg from "../Images/homePageCommitmentImg.png";
import homePageInnovativeImg from "../Images/homePageInnovativeImg.png";
import homePageExpertiseImg from "../Images/homePageExpertiseImg.png";
import homePageMarketingData from "../Images/homePageMarketingData.png";
import homePageMarketingSmm from "../Images/homePageMarketingSmm.png";
import homePageMarketingSeo from "../Images/homePageMarketingSeo.png";
import homePageMarketingCreative from "../Images/homePageMarketingCreative.png";
import homePageAnalysisImg from "../Images/homePageAnalysisImg.png";
import homePageBuildingImg from "../Images/homePageBuldingImg.png";
import homePageGreenContainerLeftArrow from "../Images/homePageGreenContainerLeftArrow.png";
import homePageAppMobile from "../Images/homePageAppMobile.png";
import homePageGreenContainerGraphicsImg from "../Images/homePageGreenContainerGraphicsImg.png";
import homePageSaasImg from "../Images/homePageSaasImg.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import timing from "../Images/clock.png";
import call from "../Images/call.png";
import email from "../Images/mail.png";
import location from "../Images/location.png";
function HomePage() {
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    requiredService: "",
    aboutCompany: "",
  });

  const storeCompanyDetails = (e) => {
    setCompanyDetails({ ...companyDetails, [e.target.name]: e.target.value });
  };

  const sendCompanyDetails = async (e) => {
    e.preventDefault();
    const formData = {
      companyName: companyDetails.companyName,
      companyEmail: companyDetails.companyEmail,
      companyPhone: companyDetails.companyPhone,
      requiredService: companyDetails.requiredService,
      aboutCompany: companyDetails.aboutCompany,
    };

    // console.log(companyDetails);
    try {
      const response = await axios.post(
        "http://localhost:3003/homeContactUsForm/post/api",
        formData
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

    setCompanyDetails({
      companyName: "",
      companyEmail: "",
      companyPhone: "",
      requiredService: "",
      aboutCompany: "",
    });
  };

  const [discussEmail, setDiscussEmail] = useState();
  const sendDiscussEmail = async (e) => {
    e.preventDefault();
    // console.log(discussEmail)

    try {
      const response = await axios.post(
        "http://localhost:3003/homeBusinessEmail/post/api",
        {
          email: discussEmail,
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
    setDiscussEmail("");
  };
  return (
    <div>
      <div className="serviceWebsiteNavbarBack"></div>
      <div className="homePageFirstRowContainer">
        <section className="homePageFirstRow">
          <h1>
            Brighten Your{" "}
            <span className="homePageFirstRowFirstSpan">Brand</span> <br />
            with
            <span className="homePageFirstRowSecondSpan"> BigBiteZudio.</span>
          </h1>
          <p>
            Brighten your brand with
            <b>
              {" "}
              BigBiteZudio, a Best{" "}<a href="/Service/DigitalMarketing" className="internalLinks">digital marketing</a>, app development, web
              development, and{" "}<a href="/Service/Software-as-a-Service" className="internalLinks">SaaS</a>  solutions company in Coimbatore.
            </b>{" "}
            Grow your business with innovative, results-driven strategies.
          </p>
        </section>
        <img
          className="homePageKeyboardImg"
          src={homePageKeyboardImg}
          alt="homePageKeyboardImg"
        />
      </div>

      <div className="homePageSecondRowOverallContainer">
        <section className="homePageSecondRowFirstColoumn">
          {" "}
          <h1>
            Data-Driven Digital
            <br />
            <span>Marketing Solutions to</span> <br /> Elevate Your Brand
          </h1>
          <img
            className="homePageMicksetImg"
            src={homePageMicksetImg}
            alt="homePageMicksetImg"
          />
        </section>

        <section className="homePageSecondRowSecondColoumn">
          <div className="homePageSecondRowSecondColoumnImgDiv">
            <img
              className="homePageSecondRowSecondColoumnImages"
              src={homePageMarketingData}
              alt="homePageMarketingData"
            />
            <h5>Data-Driven Digital Marketing</h5>
          </div>
          <p className="homePageSecondRowSecondColoumnParagraph">
            Harness the power of analytics and AI to create campaigns that
            deliver measurable results and effectively reach your target
            audience.
          </p>

          <div className="homePageSecondRowSecondColoumnImgDiv">
            <img
              className="homePageSecondRowSecondColoumnImages"
              src={homePageMarketingCreative}
              alt="homePageMarketingData"
            />
            <h5>Creative Content Creation</h5>
          </div>
          <p className="homePageSecondRowSecondColoumnParagraph">
            Our creative team crafts engaging videos and compelling copy to
            ensure your brand’s message resonates across all platforms.
          </p>

          <div className="homePageSecondRowSecondColoumnImgDiv">
            <img
              className="homePageSecondRowSecondColoumnImages"
              src={homePageMarketingSeo}
              alt="homePageMarketingData"
            />
            <h5>SEO & SEM Optimization</h5>
          </div>
          <p className="homePageSecondRowSecondColoumnParagraph">
            Boost visibility with strategic SEO and SEM that puts your business
            in front of the right people, at the right time.
          </p>

          <div className="homePageSecondRowSecondColoumnImgDiv">
            <img
              className="homePageSecondRowSecondColoumnImages"
              src={homePageMarketingSmm}
              alt="homePageMarketingData"
            />
            <h5>Social Media Management</h5>
          </div>
          <p className="homePageSecondRowSecondColoumnParagraph">
            Grow your brand’s community with targeted social media campaigns
            designed to engage and influence your audience.
          </p>
        </section>
      </div>

      <div className="serviceWebsiteSecondRowOverAllGreenContainer">
        <div className="serviceWebsiteSecondRowFirstColumn">
          <h6>
            ---------------------Meet the <span>BigBiteZudio Team</span>
          </h6>
          <h2>
            Innovators <span> Driving Your </span>Digital Success.
          </h2>
          <p>
            At BigBitezudio, our talented and diverse team is the driving force
            behind our success, combining expertise, creativity, and a passion
            for innovation. Our team's deep understanding of SaaS development,
            coupled with a customer-first approach, ensures that we deliver
            solutions that not only meet but exceed expectations. Here's what
            truly sets us apart: our commitment to excellence, attention to
            detail, and the ability to transform complex ideas into intuitive,
            scalable platforms. By fostering collaboration and leveraging the
            latest technologies, we consistently push the boundaries of what’s
            possible, making us a standout in the industry.
          </p>
          <Button variant="light">Hire Us</Button>
        </div>

        <div className="serviceWebsiteSecondRowSecondColumn">
          <div className="serviceWebsiteSecondRowSecondColumnBoxAlignment">
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img src={homePageExpertiseImg} alt="homePageExpertiseImg" />
              <h6>Expertise Across Disciplines</h6>
              <p>
                Our team brings together experts in app development, web design,
                SaaS development, and digital marketing, ensuring
              </p>
            </div>
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img src={homePageInnovativeImg} alt="homePageInnovativeImg" />
              <h6>Innovative Problem Solvers</h6>
              <p>
                We are passionate about leveraging the latest technology to
                deliver creative solutions that drive growth and efficiency for
                our clients
              </p>
            </div>
          </div>
          <div className="serviceWebsiteSecondRowSecondColumnBoxAlignment">
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img src={homePageClientImg} alt="homePageClientImg" />
              <h6>Client-Centric Focus</h6>
              <p>
                We believe in building long-term relationships with our clients
                through transparency, collaboration, and personalized solutions.
              </p>
            </div>
            <div className="serviceWebsiteSecondRowSecondColumnBox">
              <img src={homePageCommitmentImg} alt="homePageCommitmentImg" />
              <h6>Commitment to Excellence</h6>
              <p>
                From concept to execution, we are dedicated to delivering
                high-quality, scalable, and reliable solutions tailored to meet
                the unique needs of each business.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="serviceWebsiteThirdRow">
        <div>
          <h1>
            Custom Website Development Solutions to
            <br />
            <span> Grow Your Online Presence</span>{" "}
          </h1>
          <p>
            Your website is your digital storefront, and we are here to make it
            exceptional. As a <b>Best web development company in Coimbatore,</b>{" "}
            we build responsive, SEO-optimized websites that are tailored to
            your brand and designed to convert visitors into customers
          </p>
          <ul className="homePageFourthRowList">
            <li>
              <b>Custom Website Development:</b> Fully customized websites that
              reflect your brand’s identity and meet your business objectives.
            </li>
            <li>
              <b>E-Commerce Solutions:</b> Develop robust online stores that
              drive sales and offer seamless shopping experiences.
            </li>
            <li>
              <b>CMS Development:</b> Manage your website content effortlessly
              with content management systems like WordPress.
            </li>
            <li>
              <b>Responsive Design:</b> Mobile-friendly websites that deliver a
              seamless experience across all devices.
            </li>
          </ul>
        </div>

        <img
          src={homePageAnalysisImg}
          alt="web reator"
          className="webCreator"
        />
      </div>

      <div className="homePageFifthRowOverallContainer">
        <img
          className="homePageBuildingImg"
          src={homePageBuildingImg}
          alt="homePageBuildingImg"
        />
        <section className="homePageFifthRowContentContainer">
          <h1>
            READY TO GROW
            <br /> YOUR<span> BUSINESS?</span>
          </h1>
          <p>
            Unlock your brand's potential with innovative digital solutions.
            From custom SaaS development to cutting-edge web design,
            <b> BigBitezudio </b>is here to help you scale, succeed, and lead in
            your industry. Let’s build your future together!
          </p>
        </section>
        <img
          className="homePageGreenContainer"
          src={homePageGreenContainerLeftArrow}
          alt="homePageGreenContainer"
        />
      </div>

      <div className="serviceWebsiteThirdRow">
        <div>
          <h1>
            Custom App Development Solutions to
            <br />
            <span>Elevate Your Online Presence</span>{" "}
          </h1>
          <p>
            We are a{" "}
            <b>
              best app development company in Coimbatore, creating custom mobile
              applications for iOS and Android.
            </b>{" "}
            Our apps are built for performance, scalability, and user
            engagement, helping you reach your target audience effectively.
          </p>
          <ul className="homePageFourthRowList">
            <li>
              <b>IOS & Android Development:</b> Custom mobile apps designed to
              deliver seamless experiences across both platforms.
            </li>
            <li>
              <b> Hybrid Apps:</b> Cost-effective and flexible solutions that
              work across devices, reducing development time.
            </li>
            <li>
              <b>UI/UX Design: </b>Intuitive and visually stunning designs that
              keep users engaged.
            </li>
            <li>
              <b> App Store & Play Store Deployment: </b> End-to-end app store
              submission and optimization to ensure smooth launch and
              visibility.
            </li>
          </ul>
        </div>

        <img src={homePageAppMobile} alt="web reator" className="webCreator" />
      </div>
      <h1 className="discussHeading">
        Have an Awesome Business
        <br /> idea?{" "}
        <span style={{ color: "var(--primaryColor)" }}>let’s Discuss</span>
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="email-form-container">
          <div className="icon-container">
            <MdEmail style={{ color: "white" }} className="email-icon" />

            {/* <img src="path_to_icon.svg" alt="Email Icon"  ></img> */}
          </div>
          <form className="email-form" onSubmit={sendDiscussEmail}>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="email-input"
              name="email"
              onChange={(e) => setDiscussEmail(e.target.value)}
              value={discussEmail}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
            />
            <input type="submit" value="Send" className="send-button"></input>
          </form>
        </div>
      </div>

      <div className="homePageFifthRowOverallContainer">
        <img
          className="homePageBuildingImg"
          src={homePageGreenContainerGraphicsImg}
          alt="homePageBuildingImg"
        />
        <section className="homePageFifthRowContentContainer">
          <h1 className="homePageTopNotchHeading">
            LOOKING FOR <span>TOP-NOTCH APP AND WEB</span> DEVELOPEMENT?
          </h1>
          <p>
            Transform your ideas into reality with custom app development and
            stunning web development solutions from <b>BigBitezudio. </b>{" "}
            Whether it’s a mobile app or a high-performance website, we’ve got
            the expertise to elevate your digital presence.
          </p>
        </section>
        <img
          className="homePageGreenContainer"
          src={homePageGreenContainerLeftArrow}
          alt="homePageGreenContainer"
        />
      </div>

      <div className="serviceWebsiteThirdRow">
        <div>
          <h1>
            Scalable SaaS Development Solutions to
            <br />
            <span>Boost Your Online Growth</span>{" "}
          </h1>
          <p>
            Leverage the power of cloud computing with our SaaS development
            services. We develop scalable, secure, and efficient Software as a
            Service (SaaS) applications that streamline your business processes
            and deliver superior user experiences.
          </p>
          <ul className="homePageFourthRowList">
            <li>
              <b>Custom SaaS Solutions:</b> Tailored software that meets your
              specific business needs, accessible anytime, anywhere.
            </li>
            <li>
              <b>Multi-Tenant Architecture: </b> Build scalable SaaS platforms
              with multi-tenant capabilities to support a growing customer base.
            </li>
            <li>
              <b> API Integrations:</b> Connect your SaaS product with
              third-party services to extend functionality.
            </li>
            <li>
              <b>Ongoing Support & Maintenance:</b> We provide continuous
              updates, improvements, and support to ensure your SaaS solution
              remains cutting-edge
            </li>
          </ul>
        </div>

        <img src={homePageSaasImg} alt="web reator" className="webCreator" />
      </div>

      <section className="homePageChooseBigBiteZudio">
        <h2>
          Why Choose <span>BigBitezudio?</span>{" "}
        </h2>
        <div className="dashedBorder"></div>
        <ul>
          <li>
            <b> Comprehensive Solutions: </b>From digital marketing to app, web,
            and SaaS development, we offer a full suite of digital services
            under one roof.
          </li>
          <li>
            <b>Expert Team: </b>Our team of experienced developers, designers,
            and marketers is dedicated to delivering innovative solutions that
            drive results
          </li>
          <li>
            <b>Client-Centric Approach:</b> We work closely with you to
            understand your business goals and create personalized strategies
            for success.
          </li>
          <li>
            <b>Proven Results:</b> We help businesses of all sizes grow their
            digital presence, increase leads, and improve conversion rates with
            measurable outcomes.
          </li>
          <li>
            <b> Local Expertise with Global Reach: </b>As a Coimbatore-based
            company, we understand the local market dynamics while serving
            clients globally
          </li>
        </ul>
        <div className="dashedBorder"></div>
      </section>

 

      <div className="addressContainer">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="addressDivParagraph">
            We'd love to hear from you! Whether you have a question, need
            assistance, or want to discuss how we can help your business grow,
            feel free to reach out.
          </p>

          <div className="addressDiv">
            <Row>
              <Col xs={12} md={6} xl={6}>
                <div>
                  <p>
                    <img className="icons" alt="location" src={location} />{" "}
                    <strong>Bigbitezudio</strong>
                  </p>
                  <p>
                    <address>
                      29, Sabari Arcade, Mahatma Gandhi Rd, Avarampalayam,
                      Illango Nagar, Coimbatore, Tamil Nadu 641006 India
                    </address>
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6} xl={6}>
                {" "}
                <div>
                  <p>
                    <img className="icons" alt="timing" src={timing} />{" "}
                    <strong>Office timing:</strong>
                  </p>
                  <p>Mon-Sat: 10:00am - 6:00pm</p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} xl={6}>
                {" "}
                <div>
                  <p>
                    <img className="icons" alt="call" src={call} />{" "}
                    <strong>Contact us:</strong>
                  </p>
                  <p>
                    +91 6380521667
                    <br />
                    +91 9342917055
                  </p>
                </div>
              </Col>

              <Col xs={12} md={6} xl={6}>
                {" "}
                <div>
                  <p>
                    <img className="icons" alt="email" src={email} />{" "}
                    <strong>Email:</strong>
                  </p>
                  <p>
                    info@bigbitezudio.com
                    <br />
                    bigbitezudio@gmail.com
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <form className="form-section" onSubmit={sendCompanyDetails}>
          <h2>Contact Us</h2>
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            id="company-name"
            name="companyName"
            placeholder="Enter name"
            value={companyDetails.companyName}
            onChange={storeCompanyDetails}
            required
          />

          <label htmlFor="company-email">Company Email</label>
          <input
            type="email"
            id="company-email"
            name="companyEmail"
            placeholder="Enter email"
            value={companyDetails.companyEmail}
            onChange={storeCompanyDetails}
            required
          />
          <label htmlFor="company-phone">Phone Number</label>
          <input
            type="tel"
            id="company-phone"
            name="companyPhone"
            placeholder="Enter phone number"
            value={companyDetails.companyPhone}
            onChange={storeCompanyDetails}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
          />

          <label htmlFor="services">Services</label>
          <input
            type="text"
            id="services"
            name="requiredService"
            placeholder="Enter services"
            value={companyDetails.requiredService}
            onChange={storeCompanyDetails}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="aboutCompany"
            placeholder="Write about your company"
            value={companyDetails.aboutCompany}
            onChange={storeCompanyDetails}
            required
          ></textarea>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <input type="submit" name="submit" value="submit"></input>
          </div>
        </form>
      </div>




















    </div>
  );
}

export default HomePage;
