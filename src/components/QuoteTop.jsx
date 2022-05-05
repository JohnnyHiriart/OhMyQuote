import PropTypes from "prop-types";

const QuoteTop = ({ padding, height, textSize, quoteText, quoteAuthor }) => {
  return (
    <div
      className={`flex ${padding} ${textSize} flex-col items-center ${height}`}
    >
      <p className="max-w-[850px]">{`" ${quoteText} "`}</p>
      <p className="font-bold">{quoteAuthor}</p>
    </div>
  );
};

QuoteTop.propTypes = {
  padding: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  textSize: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
};

export default QuoteTop;
