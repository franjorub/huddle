import React from "react";
import logo from "../images/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={logo} alt="huddle logo" />
          </div>

          <div className="w-100 mt-4" />

          <div className="col-12 col-sm-4">
            <div className="row">
              <div className="col-2">
                <i
                  style={{ fontSize: "2rem" }}
                  className="fab fa-facebook-square"
                />
              </div>
              <div className="col-2">
                <i style={{ fontSize: "2rem" }} className="fab fa-instagram" />
              </div>
              <div className="col-2">
                <i
                  style={{ fontSize: "2rem" }}
                  className="fab fa-twitter-square"
                />
              </div>
              <div className="w-100 mt-4" />
              <div className="col">
                <p>Copyright 2019 Huddle. All rights reserved.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-8">
            <div className="row">
              <div className="col-4">
                <ul>
                  <li>About Us</li>
                  <li>What We Do</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div className="col-4">
                <ul>
                  <li>Career</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="col-4">
                <form>
                  <h4>
                    <strong>SUSCRIBE</strong>
                  </h4>
                  <p style={{ fontSize: ".8em" }}>
                    To receive tips on hwo to grow your community sign up to our
                    weekly newsletter. We'll never send you spam or pass on your
                    email address
                  </p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email..."
                  />
                  <div className="form-row justify-content-end mt-2">
                    <button type="submit" className="btn btn-primary">
                      Suscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
