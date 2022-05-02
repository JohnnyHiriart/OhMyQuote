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
                nameSubCat: "Poetry",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Art ",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Music",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["FEELING"]}
            subCategories={[
              {
                nameSubCat: "Sad",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Anger",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Jealousy",
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
                nameSubCat: "Wedding",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Romantic",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Relationship",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["LAW"]}
            subCategories={[
              {
                nameSubCat: "Equality",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Freedom",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Legal",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack
          />
          <CategoryBlock
            name={["LOL"]}
            subCategories={[
              {
                nameSubCat: "Funny",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Humor",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Smile",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            setGenre={setGenre}
            isBlack={false}
          />
          <CategoryBlock
            name={["FAMILY"]}
            subCategories={[
              {
                nameSubCat: "Parenthood",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Adolescent",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Family",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["CARE"]}
            subCategories={[
              {
                nameSubCat: "Health",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Medical",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Science",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack={false}
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["TECHNOLOGY"]}
            subCategories={[
              {
                nameSubCat: "Mobile",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Communication",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Computer",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["IMAGINARY"]}
            subCategories={[
              {
                nameSubCat: "Imagination",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Dream",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Hope",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack={false}
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["Patriotism"]}
            subCategories={[
              {
                nameSubCat: "War",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Power",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Politics",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["RELIGION"]}
            subCategories={[
              {
                nameSubCat: "Faith",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Religion",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "God",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack={false}
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["FOOD"]}
            subCategories={[
              {
                nameSubCat: "Diet",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Food",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Fitness",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["SCHOOL"]}
            subCategories={[
              {
                nameSubCat: "Teacher",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Learning",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "History",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack={false}
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["TRADER"]}
            subCategories={[
              {
                nameSubCat: "Finance",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Business",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Money",
                linkSubCat:
                  "https://fr.wikipedia.org/wiki/Jean-Michel_Basquiat",
              },
            ]}
            isBlack
            setGenre={setGenre}
          />
          <CategoryBlock
            name={["PARTY"]}
            subCategories={[
              {
                nameSubCat: "Birthday",
                linkSubCat: "https://fr.wikipedia.org/wiki/Alberto_Giacometti",
              },
              {
                nameSubCat: "Age",
                linkSubCat: "https://fr.wikipedia.org/wiki/Banksy",
              },
              {
                nameSubCat: "Friendship",
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
