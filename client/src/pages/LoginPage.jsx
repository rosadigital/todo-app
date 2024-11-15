// osman
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/api"; // Your login API function
import LoginImg from "../assets/login.png";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    try {
      const response = await login(credentials);
      const { token, user } = response.data;

      
      localStorage.setItem("token", token);
      toast.success("Login successful!");

      
      navigate("/"); 
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setError(error.response?.data?.error || "Login failed");
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <div className="container">
        <section className="intro">
          <div className="row">
            <div className="col-4">
              <img src={LoginImg} alt="Login" style={{ width: "50%", height: "auto" }} />
            </div>
            <div className="col-8">
              <p>Please enter your email and password to login to access our Todo App.</p>
              <hr className="mb-5" />
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <button className="btn btn-lg btn-dark pr-5 pl-5" type="submit">
                    Login
                  </button>
                </div>
              </form>
              <p>
                Not registered? <a href="/register">Click here</a> to register.
              </p>
              {error && <p className="error-message">{error}</p>}
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

