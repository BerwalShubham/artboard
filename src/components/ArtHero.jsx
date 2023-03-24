import React from "react";
import { Col, Row } from "react-bootstrap";
import laptop from "../assets/images/png/laptop.png";
import wave from "../assets/images/png/wave.png";
import wave1 from "../assets/images/png/wave1.png";
import dotsgroup from "../assets/images/png/dotsGroup.png";
import networklogo from "../assets/images/svg/networklogo2.svg";
import yellownetworklogo from "../assets/images/svg/yellownetworklogo.svg";
import cross from "../assets/images/svg/cross.svg";
import yellowcross from "../assets/images/svg/yellowcross.svg";

const ArtHero = () => {
  return (
    <section className="position-relative">
      <img className="d-xxl-none wave w-100" src={wave} alt="wave" />
      <img className="d-none d-xxl-block wave1 w-100" src={wave1} alt="wave" />
      <img
        className="d-none d-lg-block dotsgroup"
        src={dotsgroup}
        alt="dotsgroup"
      />
      <img className="yellowcross" src={yellowcross} alt="cross" />
      <img className="cross" src={cross} alt="cross" />
      <img
        className="yellownetworklogo"
        src={yellownetworklogo}
        alt="networklogo"
      />
      <img className="networklogo2" src={networklogo} alt="networklogo" />
      <div className="cstm-container">
        <Row className="flex-column-reverse flex-lg-row">
          <Col lg={6}>
            <div className="pt-5 text-center text-lg-start">
              <p className="color-dark-blue-2 fw-light fs-45 mb-0">
                Increased Efficiency
              </p>
              <h1 className="color-dark-blue-2 fw-bold fs-88">
                Through Automation
              </h1>
              <div className="pe-lg-5 me-lg-3">
                <p className="ff-inter color-light-black pe-lg-5 me-lg-5">
                  We have{" "}
                  <span className="fw-bold ">
                    automated invoice distribution
                  </span>{" "}
                  from as our automation initiatives.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <img className="w-100" src={laptop} alt="laptop" />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ArtHero;
