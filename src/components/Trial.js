import React from "react";
import "../css/Trial.css";
const Trial = () => {
  return (
    <div className="container mt-5 pt-0 pb-0 pt-sm-5 pb-sm-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-8">
          <div className="card p-5 box">
            <div className="card-body text-center">
              <h2 className="card-title">
                <strong>Try It Free</strong>
              </h2>
              <div className="card-text">
                Fully featured 30-day free trial - no credit card required
              </div>
              <button
                type="button"
                className="btn btn-primary mt-5 pr-0 pl-0 pr-sm-5 pl-sm-5"
              >
                Get Started For Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
