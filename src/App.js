import React, { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Feature from "./components/Feature";
import Partner from "./components/Partner";
import Connect from "./components/Connect";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { useGlobalContext } from "./context";

function App() {
  const { isMenuOpen } = useGlobalContext();
  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isMenuOpen]);
  return (
    <>
      <div className="wrapper">
        <Header />
        <Banner />
        <Category />
        <Feature />
        <Partner />
        <Connect />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default App;
