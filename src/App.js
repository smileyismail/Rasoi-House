import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header/Header";

// auth pages import
import SignUp from "./components/Auth/SignUp";
import LogIn from "./components/Auth/LogIn";
import ForgotPassword from "./components/Auth/ForgotPassword";

import Drawer from "./components/UI/Drawer";
import Cart from "./components/Cart/Cart";

import MainPage from "./pages/MainPage";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="text-textColorDark bg-primary">
      <AuthProvider>
        <Header setIsCartOpen={setIsCartOpen} />
        <main className="mx-auto">
          <Routes>
            {/* auth routes */}
            <Route>
              <Route path="signUp" element={<SignUp />} />
              <Route path="logIn" element={<LogIn />} />
              <Route path="forgotPassword" element={<ForgotPassword />} />
            </Route>

            {/* app routes */}
            <Route>
              <Route path="/" element={<MainPage />} />
            </Route>
          </Routes>

          <Drawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}>
            <Cart setIsCartOpen={setIsCartOpen} />
          </Drawer>
        </main>
      </AuthProvider>
    </div>
  );
};

export default App;
