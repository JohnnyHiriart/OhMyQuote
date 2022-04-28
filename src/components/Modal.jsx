import React from "react";
import PropTypes from "prop-types";

const Modal = ({ closedModal }) => {
  return (
    <div className="z-[20] fixed top-[50%] left-[55%] translate-x-[-50%] translate-y-[-50%] w-3/5 h-3/5 p-5 mt-5 border-4 rounded-lg shadow-md border-redquote bg-white">
      <button type="button" className="close" onClick={closedModal}>
        <span>&times;</span>
      </button>
      <div className="w-32 h-32 p-4 m-10 shadow-sm">
        <h1 className="text-4xl font-bold text-redquote">FEEDBACK</h1>
        <p>What would you like to share with us?</p>
        <ul class="type">
          <li class="active">
            <a href="#">
              <i class="fa fa-bug"></i> Problem
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-question-circle"></i> Question
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-lightbulb-o"></i> Suggestion
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-heart"></i> Kudos
            </a>
          </li>
        </ul>
        <div class="form">
          <textarea name="feedback_text" placeholder="Your feedback"></textarea>
          <input type="text" placeholder="Your Email (will not be published)" />
        </div>
        <p>How would you rate the speed of our website?</p>
        <ul class="type speed">
          <li>
            <a href="#">
              <i class="fa fa-bolt"></i> Fast
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-thumbs-o-up"></i> Fine
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-thumbs-o-down"></i> Slow
            </a>
          </li>
        </ul>
        <button class="button small success radius">Submit</button>
      </div>

      {/* 
      <h1 className="text-4xl font-bold text-redquote">YOUR FEEDBACK</h1>
      <form className="fixed flex flex-col content-center">
        <div>
          <div className="border-redquote text-decoration">
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <button>Submit</button>
          <div className="form-group">
            <input type="text" value="Feedback" />
          </div>
        </div>
      </form> */}
    </div>
  );
};

Modal.propTypes = {
  closedModal: PropTypes.bool.isRequired,
};

export default Modal;
