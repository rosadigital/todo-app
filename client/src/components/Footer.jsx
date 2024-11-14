import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <section id="get-in-touch" className="section-gray">
          <div className="row">
            <div className="col-12">
              <p>
                Thank you for your interest in our todo app. We are working hard
                to update our app gradually. You can give us your feedback or
                suggestion using our <a href="/contact">contact</a> form.
                <span className="strong-text">
                  Let's create something amazing together!
                </span>
              </p>
            </div>
          </div>
          <hr />
          <div className="row bottom-nav mt-5">
            <div className="col-8">
              <ul>
                <li>
                  <i className="fa fa-linkedin-square pr-2"></i>{" "}
                  <a href="#" target="_blank">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <i className="fa fa-github pr-2"></i>{" "}
                  <a href="https://github.com/kazisrepo" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope-o pr-2"></i>{" "}
                  <a href="/contact">Email</a>
                </li>
              </ul>
            </div>

            <div className="col-4 text-right">
              <i className="fa fa-thumbs-o-up pr-2"></i>{" "}
              <a href="/credits">Credits and acknowledgements</a>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <hr className="hr-gray" />
        <p>&copy; 2024 Group 3. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
