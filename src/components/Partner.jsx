import React from "react";

const Partner = () => {
  return (
    <div>
      <section className="partner">
        <div className="container partner__container">
          <h2 className="partner__title">Our business partner</h2>
          <ul className="partner__list">
            <li className="partner__item">
              <img
                src="./images/logo-amazon.png"
                alt="amazon"
                className="partner-logo"
              />
            </li>
            <li className="partner__item">
              <img
                src="./images/logo-netflix.png"
                alt="netflix"
                className="partner-logo"
              />
            </li>
            <li className="partner__item">
              <img
                src="./images/logo-newyork.png"
                alt="newyork"
                className="partner-logo"
              />
            </li>
            <li className="partner__item">
              <img
                src="./images/logo-stripe.png"
                alt="stripe"
                className="partner-logo"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Partner;
