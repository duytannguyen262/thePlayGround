import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__item">
            <a href="index.html" className="logo">
              <span className="logo__text">Play</span>ground
            </a>
          </div>
          <div className="footer__item">
            <a href="/events/kids-events" className="footer__link">
              Events for Kids
            </a>
            <a href="/events/parents-events" className="footer__link">
              Events for Parents
            </a>
            <a href="/events/guest-events" className="footer__link">
              Events for Guests
            </a>
            <a href="/game-gifts" className="footer__link">
              Game & Gifts
            </a>
          </div>
          <div className="footer__item">
            <a href="/events" className="footer__link">
              Events
            </a>
            <a href="/about" className="footer__link">
              Who We Are
            </a>
            <a href="/services" className="footer__link">
              Services
            </a>
            <a href="/features" className="footer__link">
              Features
            </a>
            <a href="/reviews" className="footer__link">
              Reviews
            </a>
          </div>
          <div className="footer__item">
            <a href="/careers" className="footer__link">
              Careers
            </a>
            <a href="/press" className="footer__link">
              Press
            </a>
            <a href="/help" className="footer__link">
              Help
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
