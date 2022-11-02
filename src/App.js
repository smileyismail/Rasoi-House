import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./Components/Header";
import Home from "./Components/Home";
import AddItem from "./Components/AddItem";

const App = () => {
  return (
    <AnimatePresence>
      <>
        <Header />
        <main className="pt-28 px-6">
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
