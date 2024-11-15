import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterImg from "../assets/signup.png";
import Footer from "../components/Footer";
import { register } from "../api/api";
import { toast } from "react-toastify"; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== confirmPassword) {
      toast.error("Passwords do not match!"); 
      return;
    }

    try {
      const response = await register(formData); 
      toast.success(response.data.message);
      navigate("/login"); 
    } catch (error) {
      toast.error(error.response?.data?.error || "An error occurred"); 
    }
  };

  return (
    <div>
      <div className="container">
        <section className="intro">
          <div className="row">
            <div className="col-4">
              <img src={RegisterImg} style={{ width: "50%", height: "auto" }} />
            </div>
            <div className="col-8">
              <p>
                Please enter your user information and click Register button to
                get registered for our Todo App.
              </p>
              <hr className="mb-5" />
              <form className="registration-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="form-control"
                    required
                  />
                </div>
                <hr />
                <div className="mb-4">
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm Password"
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-4">
                  <button className="btn btn-lg btn-dark pr-5 pl-5" type="submit">
                    Register
                  </button>
                </div>
              </form>
              Already registered? <a href="/login">Click here</a> to login.
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

export default RegisterForm;


