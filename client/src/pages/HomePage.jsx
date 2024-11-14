import React from "react";
import AppPic from "../assets/todo-app-logo.png";
import GoalsImage from "../assets/goals.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container">
        <section id="welcome">
          <div className="row">
            <div className="col-4">
              <img src={AppPic} className="kazi-img" />
            </div>
            <div className="col-8">
              <p className="strong-text mb-5">Welcome!</p>
              <p className="elevator-pitch">
                The Todo app{" "}
                <span className="highlight highlight-yellow">simplifies</span>{" "}
                task management with seamless performance, helping users stay{" "}
                <span className="highlight highlight-yellow">organized</span>
                and productive effortlessly.
              </p>
              <hr />
              <p>
                Our first version of the Todo app, built with the MERN stack,
                includes full CRUD functionality, allowing users to easily add,
                view, update, and delete tasks for efficient task management.
              </p>
              <p>
                To use the app, users will need to register or log in for
                access.
              </p>
              <a href="/register" className="btn btn-outline-warning">
                Register
              </a>
              <hr></hr>
              Already registered? <a href="/login">Click here</a> to login.
            </div>
          </div>
        </section>

        <section id="technologies" className="technologies section-blue">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1 className="header-text-1">Technologies used</h1>
                <hr className="hr-gray" />
              </div>
              <div
                id="technology-icons"
                className="technology-icons text-center"
              >
                <script></script>
              </div>
            </div>
          </div>
        </section>

        <section id="passion-goals">
          <div className="row mt-3">
            <div className="col-7">
              <p className="strong-text">Passion & mission</p>
              <p className="elevator-pitch">
                Driving technological innovation with
                <span className="highlight highlight-yellow"> AI</span> to
                enhance lives and solve complex problems
              </p>
              <hr />
              <p>
                Our passion for technology drives us to continuously learn and
                innovate. We are particularly interested in the potential of
                artificial intelligence and how it can be leveraged to create
                smarter, more efficient systems. As we advance in our career, we
                aim to contribute to projects that not only solve complex
                problems but also improve the quality of life for users.
              </p>
            </div>
            <div className="col-5">
              <img src={GoalsImage} style={{ width: "98%", height: "auto" }} />
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

export default HomePage;
