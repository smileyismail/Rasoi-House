import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AddItem from "./Components/AddItem/AddItem";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <>
        <Header />
        <main className="pt-16 sm:pt-20">
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/addItem" element={<AddItem />} />
          </Routes>
        </main>
      </>
    </AnimatePresence>
  );
};

export default App;
