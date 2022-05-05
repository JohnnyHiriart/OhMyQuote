import PropTypes from "prop-types";
import QuoteHome from "./QuoteHome";
import TitleHome from "./TitleHome";
import Carousel from "./Carousel";

const Home = ({ quote }) => {
  return (
    <div className="flex justify-between content-center flex-col w-[100vw] h-[100vh]">
      <TitleHome />
      <Carousel />
      <QuoteHome
        padding="pb-[10vh]"
        height="h-[15vh]"
        textSize="text-xl"
        quote={quote}
      />
    </div>
  );
};

Home.propTypes = {
  quote: PropTypes.shape({
    quoteText: PropTypes.string,
    quoteAuthor: PropTypes.string,
  }).isRequired,
};

export default Home;
