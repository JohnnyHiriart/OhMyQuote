import React from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import WhiteButton from "./WhiteButton";
import RedButtonModal from "./RedButtonModal";

const crewItems = [
  {
    image: "/static/img/86A5FC2D-3A82-4DF3-8F32-564B9583A941_1_201_a.jpg",
    title: "Weshtelle: Our Quote Addict",
    quote: "'Dear world, I am leaving because I am bored'",
    signature: "George Sanders' epitaph",
  },
  {
    image: "/static/img/2462f5c6-e17c-47d0-93e4-a760af066183.jpg",
    title: "Fred: Our Quote Editor",
    quote:
      "'It's better to keep quiet and look like a jerk than to talk and leave no doubt about it'",
    signature: "Pierre Desproges",
  },
  {
    image: "/static/img/1649335671768.jpg",
    title: "Lucas: Our Quote Selector",
    quote: "'Nothing is impossible, the word itself says 'I'm possible''",
    signature: "Audrey Hepburn",
  },
  {
    image: "/static/img/IMG_20220325_104207.jpeg",
    title: "Johnny: Our Quote Master",
    quote:
      "'When I was in junior high school, the teachers voted me the student most likely to end up in the electric chair.'",
    signature: "Sylvester Stallone",
  },
];

const TheCrew = () => {
  return (
    <div className="h-[100vh]">
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center w-[90%] xs:pl-[100px] sm:pl-[200px]">
        <div className="text-center font-bold text-redquote text-[6vw] xs:pb-[3.5vw] sm:pb-[2.5vw] md:pb-[1.5vw]">
          <h1>THE CREW</h1>
        </div>
        <div className="flex justify-center gap-8 xs:flex-wrap xl:flex-nowrap">
          {crewItems.map((crew, index) => (
            <Card key={index} {...crew} />
          ))}
        </div>
        <div className="flex flex-col items-center mt-5">
          <div>
            <a
              className="footer__mailing"
              href="mailto:ooohmyquote@gmail.com"
              title="Click pour nous joindre"
            >
              <WhiteButton text="CONTACT US" />
            </a>
          </div>
          <div>
            <RedButtonModal text="FEEDBACK" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCrew;
