import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { login } from "../api/api"; //
import LoginImg from "../assets/login.png";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <div>
      <div className="container">
        <section className="intro">
          <div className="row">
            <div className="col-4">
              <img src={LoginImg} style={{ width: "50%", height: "auto" }} />
            </div>
            <div className="col-8">
              <p>
                Please enter your username and passwoird to login to access our
                Todo App.
              </p>
              <hr className="mb-5" />
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={credentials.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <button
                    className="btn btn-lg btn-dark pr-5 pl-5"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p>
                Not registered? <a href="/register">Click here</a> to register.{" "}
              </p>
              error: <p> {error}</p>
            </div>
          </div>
        </section>
      </div>
      <button id="btnScrollToTop" className="float-button">
        Top
      </button>
      <Footer />
    </div>
  );
};

export default LoginPage;
