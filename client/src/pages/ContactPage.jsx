import React from "react";
import ContactImg from "../assets/contact.png";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <div className="container">
        <section className="intro">
          <div className="row">
            <div className="col-4">
              <img src={ContactImg} style={{ width: "50%", height: "auto" }} />
            </div>
            <div className="col-8">
              <p>
                Please feel free to send us a message, and we will get back to
                you as soon as possible.
              </p>
              <hr className="mb-5" />

              <form
                className="contact-form"
                action="https://api.web3forms.com/submit"
                method="POST"
                target="_blank"
              >
                <div className="mb-4">
                  <input
                    type="hidden"
                    name="access_key"
                    value="93ae4b81-b25f-4f68-b2c2-e1ff66cc82e5"
                  />
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="6"
                    name="message"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <button
                    className="btn btn-lg btn-dark pr-5 pl-5"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
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

export default ContactPage;
