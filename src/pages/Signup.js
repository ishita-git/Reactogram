import React from "react";
import socialDesktop from "../assets/social-desktop.PNG";
import socialMobile from "../assets/social-mobile.PNG";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
          <img
            className="socialDesktop"
            style={{ height: "85%" }}
            src={socialDesktop}
            alt=""
          />
          <img className="socialMobile" src={socialMobile} alt="" />
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="card shadow">
            <div className="card-body px-5">
              <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>

              <form>
                <input
                  type="text"
                  className="mt-4 mb-2 p-2 form-control input-bg"
                  placeholder="Phone Number"
                />
                <input
                  type="email"
                  className="mt-2 mb-2 p-2 form-control input-bg"
                  placeholder=" E-mail"
                />
                <input
                  type="text"
                  className="mt-2 mb-2 p-2 form-control input-bg"
                  placeholder="Full Name"
                />

                <input
                  type="password"
                  className="mb-2 p-2 form-control input-bg"
                  placeholder="Password"
                />

                <div className="mt-3 d-grid">
                  <button type="submit" className="custom-btn custom-btn-blue">
                    Sign Up
                  </button>
                </div>

                <div className="my-4 d-flex align-items-center justify-content-center">
                  <hr className="text-muted" />
                  <h5 className="text-muted">OR</h5>
                  <hr className="text-muted" />
                </div>

                <div className="mt-3 mb-5 d-grid">
                  <button type="submit" className="custom-btn custom-btn-white">
                    <span className="text-muted fs-6">
                      Already have an account?{" "}
                    </span>
                    <Link to="/login">
                      <span className="ms-1 text-info fw-bold">Log in</span>
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
