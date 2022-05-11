import PropTypes from "prop-types";

const QuoteTop = ({ textSize, quoteText, quoteAuthor }) => {
  return (
    <div className={`flex ${textSize} flex-col items-center`}>
      <p className="max-w-[850px]">{`" ${quoteText} "`}</p>
      <p className="font-bold">{quoteAuthor}</p>
    </div>
  );
};

QuoteTop.propTypes = {
  textSize: PropTypes.string.isRequired,
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
};

export default QuoteTop;
