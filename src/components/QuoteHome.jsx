import PropTypes from "prop-types";

const QuoteHome = ({ textSize, quote }) => {
  return (
    <div className={`flex  ${textSize} flex-col items-center `}>
      <p className="max-w-[850px] text-center">{`" ${quote.quoteText} "`}</p>
      <p className="font-bold">{quote.quoteAuthor}</p>
    </div>
  );
};

QuoteHome.propTypes = {
  textSize: PropTypes.string.isRequired,
  quote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
  }).isRequired,
};

export default QuoteHome;
