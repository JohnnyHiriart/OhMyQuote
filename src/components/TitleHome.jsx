const TitleHome = () => {
  return (
    <div className="flex flex-col justify-center content-center text-center [perspective:200px] text-9xl text-redquote font-barlow">
      <div className="[perspective:200px] flex justify-center">
        <p className="mr-2 animate-slide-in-bck-bottom-first">OH</p>
        <p className="ml-2 animate-slide-in-bck-bottom-second">MY</p>
      </div>
      <div className="animate-slide-in-bck-bottom-last [line-height:4.5rem]">
        <p>QUOTE!</p>
      </div>
    </div>
  );
};

export default TitleHome;
