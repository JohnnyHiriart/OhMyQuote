import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import WhiteButton from "./WhiteButton";
import QuoteHome from "./QuoteHome";
import RatingModal from "./RatingModal";
import EditorModal from "./EditorModal";

const QuoteMe = ({ quote, onClick, genre, setGenre }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center w-5/6 h-screen p-4 ml-[12vw]">
        <div className="flex font-bold text-redquote text-[6vw]">
          <h1>QUOTE ME</h1>
        </div>
        <div className="flex w-full">
          <div className="flex flex-row text-[1vw] justify-between w-1/5 p-2 mb-3 bg-slate-200">
            <div>Category : {genre === "" ? "ALL" : genre}</div>
            <button type="button" onClick={() => setGenre("")}>
              X
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex justify-between w-full border-4 rounded-lg h-[50vh] bg-redquote bg-opacity-5 border-redquote">
            <div className="w-40">
              <img
                src="/static/img/smal-logo-oh-my-quote2.png"
                alt="opening_quote"
              />
            </div>
            <div className="flex items-center text-center">
              <QuoteHome
                padding="pb-[10vh]"
                height="h-[25vh]"
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
        </div>
        <div className="flex flex-row mt-5 space-x-16">
          <div>
            <WhiteButton text="NEW QUOTE" onClick={() => onClick()} />
          </div>
          <div>
            <EditorModal
              quote={quote}
              isOpen={isOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          </div>
          <div>
            <Link to="/category">
              <WhiteButton text="NEW CATEGORY" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-[2vw] space-y-28">
        <RatingModal imgUrl="/static/img/thumbs-up_1f44d.png" />
        <RatingModal imgUrl="/static/img/thumbs-down_1f44e.png" />
      </div>
    </div>
  );
};

export default QuoteMe;
