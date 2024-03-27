import React from "react";
import "./HomePage.css";
import HomeNavBar from "./HomeNavBar";

import carousel1img from "../images/carousel-1.jpg";
import carousel2img from "../images/carousel-2.jpg";
import ExploreCategory from "./ExploreCategory";
import FindAJob from "./FindAJob";
import JobListing from "./JobListing";
import ClientsReview from "./ClientsReview";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <HomeNavBar />
      <div className="container-fluid p-0">
        <div className="carousel header-carousel position-relative">
          <div className="carousel-item position-relative">
            <img className="img-fluid" src={carousel1img} alt="carousel1" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(43, 57, 64, .5)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      Find The Perfect Job That You Deserved
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea elitr.
                    </p>
                    <a
                      href
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Search A Job
                    </a>
                    <a
                      href
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Find A Talent
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src={carousel2img} alt="carousel2" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(43, 57, 64, .5)" }}
            >
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-8">
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      Find The Best Startup Job That Fit You
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea elitr.
                    </p>
                    <a
                      href
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Search A Job
                    </a>
                    <a
                      href
                      className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                    >
                      Find A Talent
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-primary mb-5"
        style={{ padding: "35px" }}
      >
        <div className="container">
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Keyword"
                  />
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0">
                    <option selected>Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <select className="form-select border-0">
                    <option selected>Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <button className="btn btn-dark border-0 w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
      <ExploreCategory/>
      <FindAJob/>
      <JobListing/>
      <ClientsReview/>
      <Footer/>
    </>
  );
}

export default HomePage;
