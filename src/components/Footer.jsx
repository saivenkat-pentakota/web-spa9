import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Company</h5>
              <a className="btn btn-link text-white-50" href="#aboutus">
                About Us
              </a>
              <a className="btn btn-link text-white-50" href="#contactus">
                Contact Us
              </a>
              <a className="btn btn-link text-white-50" href="#ourservices">
                Our Services
              </a>
              <a className="btn btn-link text-white-50" href="#privacypolicy">
                Privacy Policy
              </a>
              <a className="btn btn-link text-white-50" href="#terms">
                Terms & Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <a className="btn btn-link text-white-50" href="#aboutus">
                About Us
              </a>
              <a className="btn btn-link text-white-50" href="#contactus">
                Contact Us
              </a>
              <a className="btn btn-link text-white-50" href="#ourservices">
                Our Services
              </a>
              <a className="btn btn-link text-white-50" href="#privacy">
                Privacy Policy
              </a>
              <a className="btn btn-link text-white-50" href="#terms">
                Terms & Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>
                <a
                  href="#email-protection"
                  className="email"
                  data-cfemail="741d1a121b34110c15190418115a171b19"
                >
                  jobentry@gmail.com
                </a>
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="#twitter">
                  <i className="fas fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#facebbok">
                  <i className="fas fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="#youtube">
                  <i className="fas fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{maxWidth: "400px"}}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <a className="border-bottom" href="#site">
                  Your Site Name
                </a>
                , All Right Reserved. Designed By
                <a className="border-bottom" href="#https://htmlcodex.com">
                  HTML Codex
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="#home">Home</a>
                  <a href="#cookies">Cookies</a>
                  <a href="#help">Help</a>
                  <a href="#faq's">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
