import "./App.css";
import NavBar from "./components/NavBar";
import DinoFrames from "./components/DinoFrames";

const categories = [
  {
    text: "Carnivores",
    image: "./assets/carnivor.jpg",
  },
  {
    text: "Herbivores",
    image: "./assets/herbivor.jpg.webp",
  },
  {
    text: "Aquatic",
    image:
      "https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860-header-non-dinos2.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <DinoFrames categories={categories} />
    </div>
  );
}

export default App;
