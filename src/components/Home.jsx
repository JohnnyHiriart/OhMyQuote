import QuoteHome from "./QuoteHome";
import TitleHome from "./TitleHome";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="flex justify-between content-center flex-col w-[100vw] h-[100vh]">
      <TitleHome />
      <Carousel />
      <QuoteHome
        padding="pb-[10vh]"
        height="h-[15vh]"
        textSize="text-[1.3vw]"
      />
    </div>
  );
};

export default Home;
