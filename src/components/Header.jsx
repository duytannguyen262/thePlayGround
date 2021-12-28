/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useGlobalContext } from "../context";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen, openBurgerMenu } = useGlobalContext();

  const handleCloseMenu = (e) => {
    if (isMenuOpen && !e.target.classList.contains("burger__menu")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={isMenuOpen ? "header open" : "header"}>
      <div
        className={isMenuOpen ? "overlay fade-in" : "overlay fade-out"}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div className="container header__inner" onClick={handleCloseMenu}>
        <a href="index.html" className="logo">
          <span className="logo__text">Play</span>ground
        </a>
        <a href="#" className="burger__menu" onClick={() => openBurgerMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Events
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Pricing
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Blog
              </a>
            </li>
            <li className="header__menu-item">
              <a
                href="#"
                className="header__menu-link btn btn--border btn--rounded"
              >
                Log in
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="container">
          <div className={"toggle__menu--mobile menu-fade-in"}>
            <a href="">Events</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
            <a href="">Log in</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
