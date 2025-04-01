import React, { useState, useCallback  } from "react";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import { Outlet } from "react-router-dom";

import "./tailwind.css";
import "./App.css";
import Background from "./components/background/Background";
import HeaderFixed from "./layouts/Header/HeaderFixed";
import MobileMenu from "./components/mobile-menu/MobileMenu";

function App() {

  return (
    <div className="App">
      <Background />

      <Header />
      <HeaderFixed />

      <main className="pb-12 pt-6 lg:pt-0">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>

      <Footer />

      <MobileMenu></MobileMenu>
    </div>
  );
}

export default App;
