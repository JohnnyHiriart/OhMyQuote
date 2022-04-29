import React from "react";
import NavBar from "./NavBar";
import WhiteButton from "./WhiteButton";
import RedButton from "./RedButton";
import QuoteHome from "./QuoteHome";
import QuoteEditor from "./QuoteEditor";
import { Link } from "react-router-dom";

const QuoteMe = ({ quote, onClick, genre }) => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center w-5/6 p-5 ml-28">
        <div className="flex font-bold text-redquote text-7xl">
          <h1>QUOTE ME</h1>
        </div>
        <div className="flex w-full ml-56">
          <div className="flex flex-row justify-between w-1/5 p-2 mb-3 bg-slate-200">
            <div>Category : {genre}</div>
            <button type="button">X</button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-row justify-between w-full border-4 rounded-lg ml-28 h-96 bg-redquote bg-opacity-5 border-redquote">
            <div className="w-40">
              <img
                src="/static/img/smal-logo-oh-my-quote2.png"
                alt="opening_quote"
              />
            </div>
            <div className="flex items-center">
              <QuoteHome
                padding="pb-[10vh]"
                height="h-[15vh]"
                textSize="text-[1.7vw]"
                quote={quote}
              />
            </div>
            <div className="flex items-end w-40">
              <img
                src="/static/img/smal-logo-oh-my-quote1.png"
                alt="closing_quote"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 space-y-28">
            <button type="button">
              <img src="/static/img/thumbs-up_1f44d.png" alt="thumb_up" />
            </button>
            <button type="button">
              <img src="/static/img/thumbs-down_1f44e.png" alt="thumb_down" />
            </button>
          </div>
        </div>
        <div className="flex flex-row mt-5 space-x-16">
          <div>
            <WhiteButton text="RANDOM" />
          </div>
          <div>
            <WhiteButton text="NEW QUOTE" onClick={() => onClick()} />
          </div>
          <div>
            <Link to="/category">
              <WhiteButton text="NEW CATEGORY" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <RedButton text="CUSTOMIZE" />
        </div>
        <button type="button" className="flex flex-col mt-5">
          <img src="/static/img/arrow.png" alt="arrow" />
        </button>
        <div className="m-16">
          <QuoteEditor quote={quote} />
        </div>
      </div>
    </div>
  );
};

export default QuoteMe;
