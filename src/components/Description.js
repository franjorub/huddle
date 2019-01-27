import React from "react";
import users from "../images/illustration-your-users.svg";
const Description = () => {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
      <div className="row">
        <div className="col-12  col-sm-12 col-md-6 mb-4">
          <img src={users} className="img-fluid" alt="users" />
        </div>
        <div className="col-12 col-sm-12 col-md-5 offset-0 offset-sm-0 offset-md-1 text-center text-md-left">
          <h4 className="pb-1">
            <strong>Flowing Conversations</strong>
          </h4>
          <p className="mb-4 pb-4">
            You wouldn't paginate a conversation in real life, so why do it
            online? Out threads have just-in-time loading for a more natural
            flow.
          </p>
          <h4 className="pb-1">
            <strong>Grow Together</strong>
          </h4>
          <p className="mb-4 pb-4">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
          <h4 className="pb-1">
            <strong>Your Users</strong>
          </h4>
          <p className="mb-4 pb-4">
            It takes no time at all to integrate Huddle with your apps's
            authentication solution. This means, once signed in to your app,
            your users can start chatting inmediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
