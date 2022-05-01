import React from "react";
import CategoryBlock from "./CategoryBlock";
import NavBar from "./NavBar";

const Category = ({ setGenre }) => {
  return (
    <div className="flex justify-around w-screen h-screen">
      <div className="">
        <NavBar />
      </div>
      <div className="flex items-center justify-center w-screen h-screen left-16">
        <ul className="grid justify-center gap-2 font-bold lg:grid-cols-5 lg:grid-rows-3 align-center sm:grid-cols-3 sm:grid-rows-5">
          <CategoryBlock
            name={["ART"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["HISTORY"]}
            subCategories={[
              {
                nameSubCat: "Love",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "War",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Truth",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["BOOKS"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["LIFE"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["LOVE"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["POP CULTURE"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["DEATH"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["FUN STUFF"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["MOVIES"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["ANIMALS"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["SCIENCE"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["GAMES"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["TV"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["POLITICS"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["FAMILY"]}
            subCategories={[
              {
                nameSubCat: "Giacometti",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Banksy",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Basquiat",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
        </ul>
      </div>
    </div>
  );
};

export default Category;
