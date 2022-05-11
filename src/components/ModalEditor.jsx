/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import CustomImageEditor from "./CustomImageEditor";
import LinkSocial from "./LinkSocial";

const ModalEditor = ({ closedModal, image, quote }) => {
  return (
    <div className="flex z-[20] xs:flex-col md:flex-row justify-between fixed top-[50%] left-[52%] translate-x-[-50%] translate-y-[-50%] w-[90vw] h-[90vh] p-3 border-4 rounded-lg shadow-md border-redquote bg-white">
      <div
        className="flex md:justify-end md:content-end hover:cursor-pointer hover:text-redquote"
        onClick={closedModal}
      >
        <span>&times;</span>
      </div>
      <div className="flex flex-col px-10 text-center xl:text-[1vw] lg:text-[1.3vw]">
        <div>
          <div>{`"${quote.quoteText}"`}</div>
          <div>
            <strong>{quote.quoteAuthor}</strong>
          </div>
          <div className="flex content-center justify-center">
            <CustomImageEditor image={image} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between text-center md:pr-5">
        <button
          className="xl:p-[0.5vw] md:p-[1vw] xl:text-[1vw] md:text-[1.5vw] md:mr-20 font-bold text-center bg-white border-4 rounded-lg shadow-md xl:w-[5vw] md:w-[7vw] border-redquote hover:border-white text-redquote hover:text-white hover:bg-redquote"
          onClick={() => {
            navigator.clipboard.writeText(
              `${quote.quoteText + quote.quoteAuthor}`
            );
          }}
        >
          COPY
        </button>
        <LinkSocial />
      </div>
    </div>
  );
};

ModalEditor.propTypes = {
  image: PropTypes.string.isRequired,
  closedModal: PropTypes.bool.isRequired,
  quote: PropTypes.string.isRequired,
};

export default ModalEditor;
