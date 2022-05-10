import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import WhiteButton from "./WhiteButton";
import QuoteHome from "./QuoteHome";
import RatingModal from "./RatingModal";
import NavBar from "./NavBar";
import EditorModal from "./EditorModal";

const QuoteMe = ({
  quote,
  onClick,
  genre,
  setGenre,
  actualQuote,
  refreshQuotesUp,
  refreshQuotesDown,
  image,
  isOpen,
  setIsOpen,
  topQuotes,
}) => {
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [quoteLength, setQuoteLength] = useState(0);
  const [quoteSizeXs, setQuoteSizeXs] = useState("");
  const [quoteSizeSm, setQuoteSizeSm] = useState("");
  const [quoteSizeXl, setQuoteSizeXl] = useState("");
  const [quoteSizeMd, setQuoteSizeMd] = useState("");
  const [quoteSizeLg, setQuoteSizeLg] = useState("");

  console.log(quoteLength);
  console.log(quoteSizeXl);

  useEffect(() => {
    console.log(actualQuote);
    const myLength =
      (actualQuote.quoteText && actualQuote.quoteText.split("").length) || 0;
    setQuoteLength(myLength);
    myLength <= 80
      ? (setQuoteSizeXs("xs:text-[3.3vw]"),
        setQuoteSizeLg("lg:text-[1.9vw]"),
        setQuoteSizeSm("sm:text-[2.5vw]"),
        setQuoteSizeXl("xl:text-[1.7vw]"),
        setQuoteSizeMd("md:text-[3vw]"))
      : myLength >= 150
      ? (setQuoteSizeXs("xs:text-[3vw]"),
        setQuoteSizeSm("sm:text-[2.2vw]"),
        setQuoteSizeXl("xl:text-[0.1vw]"),
        setQuoteSizeLg("lg:text-[1.7vw]"),
        setQuoteSizeMd("md:text-[2.5vw]"))
      : (setQuoteSizeXs("xs:text-[2.8vw]"),
        setQuoteSizeSm("sm:text-[2vw]"),
        setQuoteSizeLg("lg:text-[1.5vw]"),
        setQuoteSizeXl("xl:text-[1.2vw]"),
        setQuoteSizeMd("md:text-[2.3vw]"));
  }, [actualQuote]);

  return (
    <div className="flex justify-between">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center h-screen p-4 ml-[12vw] xs:w-[80vw] md:w-full ">
        <div className="flex font-bold text-redquote md:text-[6vw] xs:text-[10vw]">
          <h1>QUOTE ME</h1>
        </div>
        <div className="flex w-full">
          <div className="flex flex-row md:text-[1vw] xs:text-[2vw] justify-between md:w-1/5 xs:w-[30vw] p-2 mb-3 bg-slate-200 xs:my-[5vw] sm:my-[3vw] md:my-[1vw]">
            <div>Category : {genre === "" ? "ALL" : genre}</div>
            <button type="button" onClick={() => setGenre("")}>
              X
            </button>
          </div>
        </div>
        <div className="flex w-full xs:my-[3vw] md:my-[0vw]">
          <div className="flex justify-between w-full border-4 rounded-lg md:h-[50vh] xs:h-[30vh] bg-redquote bg-opacity-5 border-redquote">
            <div className="w-40">
              <img
                src="/static/img/smal-logo-oh-my-quote2.png"
                alt="opening_quote"
              />
            </div>
            <div className="flex items-center text-center">
              <QuoteHome
                padding="md:pb-[10vh] xs:pt-[4vh] md:pt-[0vh]"
                height="h-[25vh]"
                textSize={
                  (quoteSizeSm,
                  quoteSizeLg,
                  quoteSizeXl,
                  quoteSizeXs,
                  quoteSizeMd)
                }
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
        <div className="flex space-x-16 md:mt-10 md:flex-row xs:flex-col">
          <div className="flex space-x-[8vw] m-[2vw] xs:flex md:hidden">
            <div className="xs:pt-[18vw] sm:pt-[10vw]">
              <RatingModal
                imgUrl="/static/img/thumbs-up_1f44d.png"
                actualQuote={actualQuote}
                topQuotes={topQuotes}
                refreshQuotesUp={() => refreshQuotesUp(topQuotes, actualQuote)}
                refreshQuotesDown={() =>
                  refreshQuotesDown(topQuotes, actualQuote)
                }
                isDown={false}
              />
            </div>
            <div className="flex flex-col">
              <div>
                <WhiteButton text="NEW QUOTE" onClick={() => onClick()} />
              </div>
              <div>
                <EditorModal
                  image={image}
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
            <div className="xs:pt-[18vw] sm:pt-[10vw]">
              <RatingModal
                imgUrl="/static/img/thumbs-down_1f44e.png"
                actualQuote={actualQuote}
                topQuotes={topQuotes}
                refreshQuotesDown={() =>
                  refreshQuotesDown(topQuotes, actualQuote)
                }
                refreshQuotesUp={() => refreshQuotesUp(topQuotes, actualQuote)}
                isDown={true}
              />
            </div>
          </div>
          <div className="p-2 xs:hidden md:flex">
            <WhiteButton text="NEW QUOTE" onClick={() => onClick()} />
          </div>
          <div className="xs:hidden md:flex">
            <EditorModal
              image={image}
              quote={quote}
              isOpen={isOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          </div>
          <div className="p-2 xs:hidden md:flex">
            <Link to="/category">
              <WhiteButton text="NEW CATEGORY" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-[2vw] space-y-28 xs:hidden md:flex">
        <RatingModal
          imgUrl="/static/img/thumbs-up_1f44d.png"
          actualQuote={actualQuote}
          topQuotes={topQuotes}
          refreshQuotesUp={() => refreshQuotesUp(topQuotes, actualQuote)}
          isDown={false}
        />
        <RatingModal
          imgUrl="/static/img/thumbs-down_1f44e.png"
          actualQuote={actualQuote}
          topQuotes={topQuotes}
          refreshQuotesDown={() => refreshQuotesDown(topQuotes, actualQuote)}
          isDown={true}
        />
      </div>
    </div>
  );
};

QuoteMe.propTypes = {
  quote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
  }).isRequired,
  image: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  actualQuote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
  refreshQuotesUp: PropTypes.func.isRequired,
  refreshQuotesDown: PropTypes.func.isRequired,
  topQuotes: PropTypes.arrayOf(
    PropTypes.shape({
      quoteText: PropTypes.string,
      quoteAuthor: PropTypes.string,
    })
  ).isRequired,
};

export default QuoteMe;
