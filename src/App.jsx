import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Category from "./components/Category";
import QuoteMe from "./components/QuoteMe";
import TopQuotes from "./components/TopQuotes";
import TheCrew from "./components/TheCrew";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/category" element={<Category />} />
        <Route path="/quote-me" element={<QuoteMe />} />
        <Route path="/top-quotes" element={<TopQuotes />} />
        <Route path="/the-crew" element={<TheCrew />} />
      </Routes>
    </div>
  );
}

export default App;
