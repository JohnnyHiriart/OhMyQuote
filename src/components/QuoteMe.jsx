import React, { useState } from "react";
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
  topQuotes,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
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
      </div>
      <div className="flex flex-col items-center justify-center m-[2vw] space-y-28">
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
    <div className="flex justify-center mt-2 space-x-32">
      
      <button className="">
        <a
        target="_blank"
        href= "http://www.facebook.com/"
        title="Click pour nous joindre">
      <img
          src="/static/logo/317727_square_social media_facebook_social.svg"
          alt=""/>
          </a>
          </button>
          
          <button className="">
          <a
          target="_blank"
        href= "http://www.instagram.com/"
        title="Click pour nous joindre">
       <img
          src="\static\logo\317738_instagram_photography_photos.svg"
          alt=""
          /></a>
          </button>
          
          <button className="">
          <a
          target="_blank"
        href= "http://www.pinterest.fr/"
        title="Click pour nous joindre">
       <img
          src="/static/logo/317731_pinterest_social media_social.svg"
          alt=""/>
          </a>
          </button>
          
          <button className="">
          <a
          target="_blank"
        href= "http://www.twitter.com/"
        title="Click pour nous joindre">
       <img
          src="/static/logo/317723_social_square_social media_tweet_twitter.svg"
          alt=""/>
          </a>
        </button>
        
      </div>
    </div>
  );
};

QuoteMe.propTypes = {
  quote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
  }).isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
  actualQuote: PropTypes.string.isRequired,
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
