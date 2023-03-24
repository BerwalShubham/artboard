import React from "react";
import leftarrow from "../assets/images/svg/durationLeftArrow.svg";
import bgimg from "../assets/images/png/durationInvoiceBgImg2.png";
import rightarrow from "../assets/images/svg/durationRightArrow.svg";
import clock from "../assets/images/svg/Featherclock.svg";
import cross from "../assets/images/svg/yellowcross.svg";
import user from "../assets/images/svg/users.svg";

const InvoiceDuration = () => {
  return (
    <section className="py-5 bg-img position-relative">
      <img
        className="bg-img-2 w-100 d-none d-lg-block"
        src={bgimg}
        alt="triangle"
      />
      <img
        className="invoiceduration-yellowcross"
        src={cross}
        alt="yellowcross"
      />
      <div className="cstm-container">
        <div className="d-flex justify-content-around">
          <div className="dash"></div>
          <div className="dash"></div>
        </div>
        <div className="bg-dark-blue-2 text-center text-lg-start py-4 px-5 mt-5 rounded-4 d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
          <div className="position-relative">
            <div className="d-flex align-items-baseline">
              <h2 className="mb-0 ff-inter text-white fw-bold fs-118">8</h2>
              <div className="divider"></div>
              <p className="mb-0 text-white fw-bold fs-3xl months">MONTHS</p>
            </div>
          </div>
          <div className="d-flex align-items-center mt-5 mt-lg-0">
            <img src={leftarrow} alt="leftarrow" />
            <div className="text-center px-sm-5 px-4">
              <p className="ff-inter fw-bold fs-2xl text-white">Duration</p>
              <img src={clock} alt="clock" />
            </div>
            <img src={rightarrow} alt="rightarrow" />
          </div>
          <div className="position-relative mt-2 mt-lg-0">
            <div className="d-flex align-items-baseline">
              <h2 className="mb-0 text-white fw-bold fs-118">4</h2>
              <div className="divider-2"></div>
              <div>
                <p className="mb-0 text-white fw-bold fs-3xl months">
                  MONTHS <br /> REMAINING
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-div py-5 text-center text-lg-start px-5 mt-5 rounded-4 d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
          <div className="position-relative">
            <div className="d-flex align-items-baseline">
              <h2 className="mb-0 fw-bold fs-45 ff-inter color-dark-blue-2">
                42K
              </h2>
            </div>
          </div>
          <div className="d-flex align-items-center mt-5 mt-lg-0">
            <img className="leftarrow" src={rightarrow} alt="leftarrow" />
            <div className="text-center px-sm-5 px-4">
              <p className="ff-inter fw-bold fs-2xl color-dark-blue-2">
                Invoices
              </p>
              <img src={clock} alt="clock" />
            </div>
            <img src={rightarrow} alt="rightarrow" />
          </div>
          <div className="mt-2 mt-lg-0">
            <h2 className="mb-0 ff-inter color-yellow fw-bold mt-5 mt-lg-0 fs-45">
              21K
            </h2>
          </div>
        </div>
        <div className="bg-dark-blue-2 text-center text-lg-start py-5 px-5 mt-5 rounded-4 d-flex flex-column flex-lg-row align-items-center justify-content-evenly">
          <div className="">
            <div className="">
              <h2 className="mb-0 text-white fw-bold fs-60">95</h2>
              <p className="mb-0 text-white fw-bold fs-xsm months">MAN DAYS</p>
            </div>
          </div>
          <div className="d-flex align-items-center mt-5 mt-lg-0">
            <img src={leftarrow} alt="leftarrow" />
            <div className="text-center px-sm-5 px-4">
              <p className="ff-inter fw-bold fs-2xl text-white">Effort</p>
              <img src={user} alt="user" />
            </div>
            <img src={rightarrow} alt="rightarrow" />
          </div>
          <div className=" mt-2 mt-lg-0">
            <div className="">
              <h2 className="mb-0 ff-inter text-white fw-bold fs-60">14.25</h2>
              <p className="mb-0 text-white fw-bold fs-xsm months ps-4">
                MAN DAYS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceDuration;
