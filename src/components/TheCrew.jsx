import React from "react";
import Card from "./Card";
import WhiteButton from "./WhiteButton";
import RedButton from "./RedButton";



const TheCrew = () => {
  return (
  <div>
        <div class="text-redquote text-7xl font-bold m-16 w-11/12 ml-40 justify-center text-center"><h1>THE CREW</h1></div>
        <div class="flex gap-8 w-11/12 ml-40">
    {crewItems.map((crew, index)=>(
    <Card key = {index} {...crew} />
    ))}
    </div>
    <div className = "flex flex-col items-center mt-10">
    <RedButton text = "FEEDBACK"/>
    <WhiteButton text = "CONTACT US"/>
  </div>
  </div>
  );
  };

const crewItems = [
  {
    image: "./assets/86A5FC2D-3A82-4DF3-8F32-564B9583A941_1_201_a.jpg",
    title: "Weshtelle: Our Quote Addict",
    quote: "'Dear world, I am leaving because I am bored'",
    signature: "George Sanders' epitaph",
  },
  {
    image: "./assets/2462f5c6-e17c-47d0-93e4-a760af066183.jpg",
    title: "Fred: Our Quote Editor",
    quote: "'It's better to keep quiet and look like a jerk than to talk and leave no doubt about it'",
    signature: "Pierre Desproges",
  },
  {
    image: "./assets/1649335671768.jpg",
    title: "Lucas: Our Quote Selector",
    quote: "'Nothing is impossible, the word itself says 'I'm possible''",
    signature: "Audrey Hepburn",
  },
  {
    image: "./assets/IMG_20220325_104207.jpeg",
    title: "Johnny: Our Quote Master",
    quote: "'After thirty years of studying female psychology, I still haven't found the answer to the big question: what do they really want?'",
    signature: "Sigmund Freud",
  },
];

export default TheCrew;
