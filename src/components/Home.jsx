import QuoteHome from "./QuoteHome";
import TitleHome from "./TitleHome";

const Home = () => {
  return (
    <div className="flex justify-center content-center flex-col">
      <TitleHome />
      <QuoteHome />
    </div>
  );
};

export default Home;
