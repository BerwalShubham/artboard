import React from "react";
import logo from "../assets/images/svg/Logo.svg";
import networklogo from "../assets/images/svg/networklogo.svg";

const ArtNav = () => {
  return (
    <nav className="position-relative">
      <img className="networklogo" src={networklogo} alt="networklogo" />
      <div className="cstm-container">
        <div className="pt-4 d-flex align-items-center justify-content-between">
          <div>
            <img height={45} width={45} src={logo} alt="logo" />
          </div>
          <div>
            <ul className="d-flex gap-3 gap-sm-5">
              <li>
                <a
                  className="ff-raleway fw-medium fs-xsm color-dark-blue"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="ff-raleway fw-medium fs-xsm color-dark-blue"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="ff-raleway fw-medium fs-xsm color-dark-blue"
                  href="#"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="ff-raleway fw-medium fs-xsm color-dark-blue"
                  href="#"
                >
                  Premium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ArtNav;
