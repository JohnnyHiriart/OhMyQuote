/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import CustomImageEditor from "./CustomImageEditor";
import WhiteButton from "./WhiteButton";

const ModalEditor = ({ closedModal, image, quote }) => {
  return (
    <div className="flex z-[20] fixed top-[50%] left-[52%] translate-x-[-50%] translate-y-[-50%] w-[90vw] h-[90vh] p-3 border-4 rounded-lg shadow-md border-redquote bg-white">
      <div
        className="flex content-end justify-end hover:cursor-pointer hover:text-redquote"
        onClick={closedModal}
      >
        <span>&times;</span>
      </div>
      <div className="flex flex-col px-10 text-center">
        <div>
          <div>{`"${quote.quoteText}"`}</div>
          <div>
            <strong>{quote.quoteAuthor}</strong>
          </div>
          <div className="flex content-center justify-center p-5">
            <CustomImageEditor image={image} />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <WhiteButton
          text="COPY"
          onClick={() => {
            navigator.clipboard.writeText(
              `${quote.quoteText + quote.quoteAuthor}`
            );
          }}
        />
        SHARE:
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
