import PropTypes from "prop-types";
import QuoteHome from "./QuoteHome";
import TitleHome from "./TitleHome";
import Carousel from "./Carousel";

const Home = ({ quote }) => {
  return (
    <div className="flex content-center flex-col w-[100vw] h-[100vh]">
      <TitleHome />
      <Carousel />
      <QuoteHome
        padding="xs:p-[2vh] ms:p-[3vh]"
        height=""
        textSize="xs-text-[4vw] ms-text-[3vw]"
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
