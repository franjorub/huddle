import React from "react";
import mockups from "../images/illustration-mockups.svg";
const Cover = () => {
  return (
    <div className="container mb-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <img src={mockups} className="img-fluid" alt="illustration muckops" />
        </div>
        <div class="w-100" />
        <div className="col-6 text-center mt-5">
          <h4 className="pb-3">
            <strong>Build The Community Your Fans Will Love</strong>
          </h4>
          <p>
            Huddle re-imagines the way we build communities. You have a voice.
            but so does your audience. Create connections with your users as you
            engage in genuine discussions.
          </p>
          <button type="button" className="btn btn-primary btn-lg">
            Get started for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
