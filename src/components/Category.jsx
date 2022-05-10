import React from "react";
import CategoryBlock from "./CategoryBlock";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

const Category = ({ setGenre }) => {
  const Categories = [
    { name: ["ART"], subCat: ["Poetry", "Music", "Art"], isBlack: false },
    { name: ["FEELING"], subCat: ["Sad", "Anger", "Jealousy"], isBlack: true },
    {
      name: ["LOVE"],
      subCat: ["Wedding", "Romantic", "Relationship"],
      isBlack: false,
    },
    { name: ["LAW"], subCat: ["Equality", "Freedom", "Legal"], isBlack: true },
    { name: ["LOL"], subCat: ["Funny", "Humor", "Smile"], isBlack: false },
    {
      name: ["FAMILY"],
      subCat: ["Parenthood", "Adolescent", "Family"],
      isBlack: true,
    },
    {
      name: ["TECHNOLOGY"],
      subCat: ["Mobile", "Communication", "Computer"],
      isBlack: false,
    },
    { name: ["CARE"], subCat: ["Health", "Medical", "Science"], isBlack: true },
    {
      name: ["IMAGINARY"],
      subCat: ["Imagination", "Dream", "Hope"],
      isBlack: false,
    },
    {
      name: ["POLITICS"],
      subCat: ["Power", "War", "Patriotism"],
      isBlack: true,
    },
    {
      name: ["RELIGION"],
      subCat: ["Faith", "Religion", "God"],
      isBlack: false,
    },
    { name: ["FOOD"], subCat: ["Diet", "Food", "Fitness"], isBlack: true },
    {
      name: ["SCHOOL"],
      subCat: ["Teacher", "Learning", "History"],
      isBlack: false,
    },
    {
      name: ["TRADER"],
      subCat: ["Finance", "Business", "Money"],
      isBlack: true,
    },
    {
      name: ["PARTY"],
      subCat: ["Birthday", "Age", "Friendship"],
      isBlack: false,
    },
  ];

  return (
    <div className="flex justify-between w-screen h-screen">
      <div className="">
        <NavBar />
      </div>
      <div className="flex items-center justify-center w-screen h-screen xl:ml-[5vw] sm:ml-[10vw] sm:mt-[0vw] xs:ml-[15vw] xs:mt-[118vh] ">
        <ul className="grid flex-wrap justify-center font-bold sm:gap-2 xs:gap-4 xl:grid-cols-5 xl:grid-rows-3 align-center sm:grid-cols-3 sm:grid-rows-5 xs:grid-cols-1 xs:grid-rows-15 ">
          {Categories.map((category, index) => (
            <CategoryBlock
              key={index}
              name={category.name}
              subCategories={category.subCat}
              setGenre={setGenre}
              isBlack={category.isBlack}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

Category.propTypes = {
  setGenre: PropTypes.func.isRequired,
};

export default Category;
