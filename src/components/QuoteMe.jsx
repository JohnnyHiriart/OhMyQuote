import React from "react";
import NavBar from "./NavBar";
import WhiteButton from "./WhiteButton";
import RedButton from "./RedButton";

const QuoteMe = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center w-5/6 p-5 ml-28">
        <div className="flex justify-center font-bold text-redquote text-7xl">
          <h1>QUOTE ME</h1>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full border-4 rounded-lg ml-28 h-96 bg-redquote bg-opacity-5 border-redquote" />
          <div className="flex flex-col ml-5 space-y-28">
            <button type="button">
              <img src="/src/assets/thumbs-up_1f44d.png" alt="thumb_up" />
            </button>
            <button type="button">
              <img src="/src/assets/thumbs-down_1f44e.png" alt="thumb_down" />
            </button>
          </div>
        </div>
        <div className="flex flex-row mt-5 space-x-16">
          <div>
            <WhiteButton text="RANDOM" />
          </div>
          <div>
            <WhiteButton text="NEW QUOTE" />
          </div>
          <div>
            <WhiteButton text="NEW CATEGORY" />
          </div>
        </div>
        <div className="flex flex-col">
          <RedButton text="CUSTOMIZE" />
        </div>
        <button type="button" className="flex flex-col mt-5">
          <img src="/src/assets/arrow.png" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default QuoteMe;
