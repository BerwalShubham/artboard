import React from "react";
import { Col, Row } from "react-bootstrap";
import wave from "../assets/images/png/wave2.png";
import download from "../assets/images/svg/download.svg";
import mail from "../assets/images/svg/mail.svg";
import manualEmail from "../assets/images/svg/manualEmail.svg";
import communication from "../assets/images/svg/communication.svg";
import networklogo from "../assets/images/svg/networklogo.svg";
import yellowarrow from "../assets/images/svg/yellowArrow.svg";
import dotsgroup from "../assets/images/png/preautomationdotsGroup.png";
import yellowcross from "../assets/images/svg/yellowcross.svg";
import networklogo2 from "../assets/images/svg/networklogo2.svg";

const Preautomation = () => {
  return (
    <section className="py-5 position-relative mt-xl-5">
      <img
        className="d-none d-xxl-block preaotumation-wave w-100"
        src={wave}
        alt=""
      />
      <img
        className="preautomation-dotsgroup d-none d-sm-block"
        src={dotsgroup}
        alt="dotsgroup"
      />
      <img
        className="preautomation-yellowcross d-none d-sm-block"
        src={yellowcross}
        alt="yellowcross"
      />
      <img
        className="preautomation-networklogo2 d-none d-sm-block"
        src={networklogo2}
        alt="networklogo2"
      />
      <div className="preautomation-bg-rectangle"></div>
      <div className="pt-xl-5"></div>
      <div className="cstm-container pt-lg-5 mt-lg-5">
        <div className="text-center pt-lg-5 mt-lg-5">
          <h2 className=" fs-50 color-dark-blue-2 ff-inter fw-bold pt-md-5 mt-5">
            Pre-Automation
          </h2>
          <p className="ff-inter fs-md color-light-black pt-4">
            <span className="fw-bold">Manually creating</span> and
            <span className="fw-bold"> distributing invoices</span>-
            labor-intensive and prone to errors.
          </p>

          <Row className="mt-5 pt-5">
            <Col xl={3} lg={4} sm={6} className="position-relative">
              <div className="preaotumation-cards px-2 py-4 text-center rounded-2 h-100">
                <div className="preaotumation-image-bg mt-3 d-flex align-items-center justify-content-center mx-auto">
                  <img width={50} height={50} src={download} alt="download" />
                </div>
                <div className="px-4 pt-4">
                  <p className="ff-inter fw-light fs-xsm px-1">
                    Download invoices manually
                  </p>
                </div>
              </div>
              <img
                className="preaotumation-networklogo"
                src={networklogo}
                alt="networklogo"
              />
              <img
                className="preautomation-arrow d-none d-xl-block"
                src={yellowarrow}
                alt="arrow"
              />
            </Col>
            <Col
              xl={3}
              lg={4}
              sm={6}
              className="position-relative mt-4 mt-sm-0"
            >
              <div className="preaotumation-cards px-2 py-4 text-center rounded-2 h-100 ">
                <div className="preaotumation-image-bg mt-3 d-flex align-items-center justify-content-center mx-auto">
                  <img width={50} height={50} src={mail} alt="download" />
                </div>
                <div className="px-2 pt-4">
                  <p className="ff-inter fw-light fs-xsm px-1">
                    Create an email for the tenant contact
                  </p>
                </div>
              </div>
              <img
                className="preautomation-arrow-2 d-none d-xl-block"
                src={yellowarrow}
                alt="arrow"
              />
            </Col>
            <Col
              xl={3}
              lg={4}
              sm={6}
              className="mt-4 mt-lg-0 position-relative mt-4"
            >
              <div className="preaotumation-cards px-2 py-4 text-center rounded-2 h-100">
                <div className="preaotumation-image-bg mt-3 d-flex align-items-center justify-content-center mx-auto">
                  <img
                    width={50}
                    height={50}
                    src={manualEmail}
                    alt="download"
                  />
                </div>
                <div className="px-4 pt-4">
                  <p className="ff-inter fw-light fs-xsm px-1">
                    Send the e-mailmanually
                  </p>
                </div>
              </div>
              <img
                className="preautomation-arrow-3 d-none d-xl-block"
                src={yellowarrow}
                alt="arrow"
              />
            </Col>
            <Col xl={3} lg={12} sm={6} className="text-center mt-4 mt-xl-0">
              <div className="preaotumation-cards px-2 py-4 text-center rounded-2 h-100">
                <div className="preaotumation-image-bg mt-3 d-flex align-items-center justify-content-center mx-auto">
                  <img
                    width={50}
                    height={50}
                    src={communication}
                    alt="download"
                  />
                </div>
                <div className="pt-4">
                  <p className="ff-inter fw-light fs-xsm px-1">
                    Maintain communication records manually
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Preautomation;
