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
        <Route path="/Category" element={<Category />} />
        <Route path="/QuoteMe" element={<QuoteMe />} />
        <Route path="/TopQuotes" element={<TopQuotes />} />
        <Route path="/TheCrew" element={<TheCrew />} />
      </Routes>
    </div>
  );
}

export default App;
