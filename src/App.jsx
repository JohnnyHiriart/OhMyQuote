import React from "react";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import QuoteMe from "./components/QuoteMe";
import TopQuotes from "./components/TopQuotes";
import TheCrew from "./components/TheCrew";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/quote-me" element={<QuoteMe />} />
        <Route path="/top-quotes" element={<TopQuotes />} />
        <Route path="/the-crew" element={<TheCrew />} />
      </Routes>
    </div>
  );
}

export default App;
