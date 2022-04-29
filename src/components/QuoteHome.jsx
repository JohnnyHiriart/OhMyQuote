import PropTypes from "prop-types";

const QuoteHome = ({ padding, height, textSize, quote }) => {
  return (
    <div
      className={`flex ${padding} ${textSize} flex-col items-center ${height}`}
    >
      <p className="max-w-[850px]">{`" ${quote.quoteText} "`}</p>
      <p className="font-bold">{quote.quoteAuthor}</p>
    </div>
  );
};

QuoteHome.propTypes = {
  padding: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
};

export default QuoteHome;
