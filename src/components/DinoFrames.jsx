import DinoFrame from "./DinoFrame";

const DinoFrames = ({ categories }) => {
  return (
    <>
      {categories.map((categorie, index) => (
        <DinoFrame key={index} {...categorie} />
      ))}
    </>
  );
};

export default DinoFrames;
