import React from "react";

const Banner = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <h1 className="banner__hero">The Kids Playground</h1>
          <p className="banner__desc">
            The Playground, designed by nonprofit organization to be accessible
            for all children
          </p>
          <div className="banner__buttons">
            <a href="#" className="btn btn--border btn--rounded">
              Explore
            </a>
            <a href="#" className="btn btn--primary btn--rounded has-shadow">
              Buy Tickets
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
