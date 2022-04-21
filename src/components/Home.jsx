import QuoteHome from "./QuoteHome";
import TitleHome from "./TitleHome";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="flex justify-between content-center flex-col w-[100vw] h-[100vh]">
      <TitleHome />
      <Carousel />
      <QuoteHome />
    </div>
  );
};

export default Home;
