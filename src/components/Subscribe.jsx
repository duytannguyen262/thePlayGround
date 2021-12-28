import React from "react";

const Subscribe = () => {
  return (
    <div>
      <section className="subscribe">
        <div className="container subscribe__container">
          <h2 className="subscribe__title">
            Subscribe to our newsletter to get future offers
          </h2>
          <div className="subscribe__info">
            <div className="subscribe__form">
              <input
                type="text"
                className="subscribe__input"
                placeholder="Enter your email"
              />
              <button className="subscribe__button">Subscribe</button>
            </div>
            <div className="subscribe__social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
