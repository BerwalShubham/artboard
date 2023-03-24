import React from "react";
import { Col, Row } from "react-bootstrap";
import automatically from "../assets/images/svg/automatically.svg";
import coding from "../assets/images/svg/postAutomationCoding.svg";
import arrow from "../assets/images/svg/postAutomationYellowarrow.svg";
import yellowcross from "../assets/images/svg/yellowcross.svg";
import networklogo from "../assets/images/svg/postAutomationnetwork.svg";
import attherate from "../assets/images/svg/@.svg";
import postAutomationInvoice from "../assets/images/svg/postAutomationInvoice.svg";
import postAutomationEmail from "../assets/images/svg/postAutomationEmail.svg";
import summaries from "../assets/images/svg/summaries.svg";
import postAutomationRectangle from "../assets/images/svg/postAutomationRectangle.svg";
import postAutomationRectangle2 from "../assets/images/svg/postAutomationRectangle2.svg";
import postAutomationRectangle3 from "../assets/images/svg/postAutomationRectangle3.svg";
import postAutomationRectangle4 from "../assets/images/svg/postAutomationRectangle4.svg";
import postAutomationRectangle5 from "../assets/images/svg/postAutomationRectangle5.svg";

const PostAutomation = () => {
  return (
    <section className="py-5 position-relative">
      <img
        className="postautomation-yellowcross"
        src={yellowcross}
        alt="yellowcross"
      />
      <img
        className="postautomation-yellowcross-2"
        src={yellowcross}
        alt="yellowcross"
      />
      <img
        className="postautomation-networklogo"
        width={92}
        height={92}
        src={networklogo}
        alt="networklogo"
      />
      <div className="postautomation-bg-rectangle"></div>
      <div className="postautomation-bg-rectangle-2"></div>
      <div className="cstm-container">
        <div className="text-center pb-5">
          <h2 className=" fs-50 color-dark-blue-2 ff-inter fw-bold">
            Post-Automation
          </h2>
          <p className="ff-inter fs-md color-light-black pt-4 pb-5">
            <span className="fw-bold">End-to-end automation</span> on the Yardi
            platform
          </p>
        </div>
        <Row className="mt-sm-5 pt-sm-5 pb-5">
          <Col
            className="position-relative text-center text-lg-start"
            lg={4}
            sm={6}
          >
            <img
              className="postAutomationRectangle d-none d-sm-block"
              src={postAutomationRectangle}
              alt="rectangle"
            />
            <img className="attherate" src={attherate} alt="@" />
            <div className="">
              <img
                className="postautomation-arrow d-none d-sm-block"
                src={arrow}
                alt="arrow"
              />
              <div className="ps-lg-5 ms-lg-4">
                <img className="ms-md-3" src={automatically} alt="doctype" />
              </div>
              <div className="px-sm-5 pt-4">
                <p className="ff-inter fw-medium fs-sm color-light-brown ps-md-5 pe-md-4">
                  System picks up invoices
                  <span className="color-yellow"> automatically</span>
                </p>
              </div>
            </div>
          </Col>
          <Col
            className="position-relative text-center text-lg-start mt-5 mt-sm-0"
            lg={4}
            sm={6}
          >
            <img
              className="postAutomationRectangle-2 d-none d-sm-block"
              src={postAutomationRectangle2}
              alt="rectangle"
            />
            <div className="">
              <img
                className="postautomation-arrow d-none d-lg-block"
                src={arrow}
                alt="arrow"
              />
              <div className="ps-lg-5 ms-lg-4">
                <img className="ms-md-3" src={coding} alt="doctype" />
              </div>
              <div className="px-sm-5 pt-4">
                <p className="ff-inter fw-medium fs-sm color-light-brown ps-md-5 pe-md-4">
                  System picks up invoices
                  <span className="color-yellow"> automatically</span>
                </p>
              </div>
            </div>
          </Col>
          <Col
            className="position-relative pt-sm-5 pt-lg-0 mt-5 mt-lg-0 text-center text-lg-start"
            lg={4}
          >
            <img
              className="postAutomationRectangle-3 d-none d-sm-block"
              src={postAutomationRectangle3}
              alt="rectangle"
            />
            <div className="mt-sm-5 mt-lg-0 pt-sm-5 pt-lg-0">
              <div className="ps-lg-5 ms-lg-4 pt-sm-5 pt-lg-0">
                <img
                  className="ms-lg-3"
                  src={postAutomationInvoice}
                  alt="doctype"
                />
              </div>
              <div className="px-lg-5 pt-4">
                <p className="ff-inter fw-medium fs-sm color-light-brown ps-lg-5 pe-lg-4">
                  System picks up invoices
                  <span className="color-yellow"> automatically</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="py-sm-5 mt-5"></div>
        <div className="py-sm-1 mt-5"></div>
        <Row className="pt-md-5 mt-md-5 pt-lg-2 px-md-5">
          <Col
            className="position-relative text-center text-lg-start ps-sm-5"
            lg={6}
            sm={6}
          >
            <div className="ps-lg-5">
              <img
                className="postautomation-arrow d-none d-sm-block"
                src={arrow}
                alt="arrow"
              />
              <img
                className="postAutomationRectangle-4 d-none d-sm-block"
                src={postAutomationRectangle4}
                alt="rectangle"
              />
              <div className="">
                <div className="ps-lg-5 ms-lg-4">
                  <img
                    className="ms-md-3"
                    src={postAutomationEmail}
                    alt="doctype"
                  />
                </div>
                <div className="px-lg-5 pt-4">
                  <p className="ff-inter fw-medium fs-sm color-light-brown ps-lg-5 pe-lg-4">
                    <span className="color-yellow"> Sending emails</span> with
                    attachments with invoices to the recipients.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col
            className="position-relative text-center text-lg-start ps-sm-5 mt-5 mt-sm-0"
            lg={6}
            sm={6}
          >
            <img
              className="postAutomationRectangle-5 d-none d-sm-block"
              src={postAutomationRectangle5}
              alt="rectangle"
            />
            <div className="pe-sm-4">
              <div className="ps-lg-5 ms-lg-4">
                <img className="ms-md-3" src={summaries} alt="doctype" />
              </div>
              <div className="px-lg-5 pt-4">
                <p className="ff-inter fw-medium fs-sm color-light-brown ps-lg-5 pe-lg-5">
                  Finance receives system-generated <br />
                  <span className="color-yellow pe-lg-5">
                    {" "}
                    automated summaries
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PostAutomation;
