import React from "react";
import socialDesktop from "../assets/social-desktop.PNG";
import socialMobile from "../assets/social-mobile.PNG";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
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
              <h4 className="card-title text-center mt-3 fw-bold">Log In</h4>

              <form>
                <input
                  type="email"
                  className="mt-4 mb-2 p-2 form-control input-bg"
                  placeholder="Phone number , username or E-mail"
                />

                <input
                  type="password"
                  className="mb-2 p-2 form-control input-bg"
                  placeholder="Password"
                />

                <div className="mt-3 d-grid">
                  <button type="submit" className="custom-btn custom-btn-blue">
                    Log In
                  </button>
                </div>

                <div className="my-4">
                  <hr className="text-muted" />
                  <h5 className="text-muted">OR</h5>
                  <hr className="text-muted" />
                </div>

                <div className="mt-3 mb-5 d-grid">
                  <button type="submit" className="custom-btn custom-btn-white">
                    <span className="text-muted fs-6">
                      Don't have an account?{" "}
                    </span>
                    <Link to="/signup">
                      <span className="ms-1 text-info fw-bold">Sign Up</span>
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

export default Login;
