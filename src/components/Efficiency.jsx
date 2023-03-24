import React from "react";
import { Col, Row } from "react-bootstrap";
import arrow from "../assets/images/svg/4xArrow.svg";
import manualProcess from "../assets/images/png/manualProcess.png";
import dotgroup from "../assets/images/png/dotsGroup.png";
import dotgroup2 from "../assets/images/png/dotsGroup2.png";
import implementation from "../assets/images/png/implementation.png";

const Efficiency = () => {
  return (
    <section className="py-5 mt-lg-5 position-relative">
      <img className="efficiency-dots-group" src={dotgroup} alt="dotgroup" />
      <img className="efficiency-dots-group-2" src={dotgroup2} alt="dotgroup" />
      <div className="cstm-container">
        <div className="text-center pb-5">
          <h2 className=" fs-50 color-dark-blue-2 ff-inter fw-bold">
            Increasing process efficiency by
          </h2>
        </div>
        <div className="position-relative">
          <h2 className="ff-inter fw-bold color-green fs-100 text-center">
            4x
          </h2>
          <img className="efficiency-arrow" src={arrow} alt="arrow" />
        </div>
        <div className="d-lg-flex d-none mt-5 pt-5 justify-content-center position-relative">
          <div className="preautomation position-relative text-center py-3 rounded-3">
            <p className="ff-inter fw-bold fs-lg color-light-purple mb-0">
              PRE-AUTOMATION
            </p>
            <div className="preautomation-back-div rounded-3"></div>
          </div>
          <div className="vs-outer-cirle d-flex align-items-center justify-content-center"></div>
          <div className="vs-inner-cirle d-flex align-items-center justify-content-center">
            <p className="ff-inter fw-bold fs-50 color-dark-blue-2 opacity-50 mb-0">
              V
            </p>
            <p className="ff-inter fw-bold fs-50 color-dark-blue-2 opacity-50 mb-0 pt-4">
              S
            </p>
          </div>
          <div className="postautomation text-center py-3 rounded-3 position-relative">
            <p className="ff-inter fw-bold fs-lg text-white mb-0">
              POST-AUTOMATION
            </p>
            <div className="postautomation-back-div rounded-3"></div>
          </div>
        </div>
        <Row className="mt-5 pt-5 align-items-center">
          <Col className="text-center" lg={6}>
            <div className="preautomation position-relative text-center py-3 rounded-3 d-lg-none mx-auto">
              <p className="ff-inter fw-bold fs-lg color-light-purple mb-0">
                PRE-AUTOMATION
              </p>
              <div className="preautomation-back-div rounded-3"></div>
            </div>
            <div className="mt-5">
              <img
                className="efficiency-manual-implementation-img"
                src={manualProcess}
                alt="manualProcess"
              />
            </div>
            <p className="ff-inter fw-bold fs-xl color-yellow pt-5 mb-0 mt-5">
              With 100% manual process
            </p>
          </Col>
          <Col className="text-center mt-5" lg={6}>
            <div className="postautomation text-center py-3 rounded-3 position-relative d-lg-none mx-auto">
              <p className="ff-inter fw-bold fs-lg text-white mb-0">
                POST-AUTOMATION
              </p>
              <div className="postautomation-back-div rounded-3"></div>
            </div>
            <div className="mt-5 mt-lg-0">
              <img
                className="efficiency-manual-implementation-img"
                src={implementation}
                alt="implementation"
              />
            </div>
            <p className="ff-inter fw-bold fs-xl color-dark-blue-3 pt-5 mb-0 mt-5">
              With just 70% implementation
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Efficiency;
