import React from "react";
import CategoryBlock from "./CategoryBlock";
import NavBar from "./NavBar";

const Category = ({ setGenre }) => {
  return (
    <div className="flex justify-around">
      <div className="flex">
        <NavBar />
      </div>
      <div className="fixed flex content-center justify-center w-screen h-screen p-10 left-16">
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
            isBlack={false}
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["HISTORY"]}
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
            isBlack
            setGenre={setGenre}
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
            isBlack={false}
            setGenre={setGenre}
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
            isBlack
            setGenre={setGenre}
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
            isBlack={false}
            setGenre={setGenre}
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
            isBlack
            setGenre={setGenre}
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
            isBlack={false}
            setGenre={setGenre}
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
            isBlack
            setGenre={setGenre}
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
            isBlack={false}
            setGenre={setGenre}
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
            isBlack
            setGenre={setGenre}
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
            isBlack={false}
            setGenre={setGenre}
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
            isBlack
            setGenre={setGenre}
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
            isBlack={false}
            setGenre={setGenre}
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
            isBlack
            setGenre={setGenre}
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
            isBlack={false}
            setGenre={setGenre}
          />
        </ul>
      </div>
    </div>
  );
};

export default Category;
