import React from "react";

const Feature = () => {
  return (
    <div>
      <section className="feature">
        <div className="container">
          <div className="feature__item">
            <div className="className">
              <img src="./images/img5.png" alt="" />
            </div>
            <div className="feature__info">
              <h3 className="feature__title">
                The outdoor environment is age-appropriate to play
              </h3>
              <p className="feature__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias praesentium facilis est? Omnis expedita, reprehenderit
                corporis placeat earum non, enim autem consequuntur ipsa
              </p>
              <ul className="feature-intro__list">
                <li className="feature-intro__item underline">
                  The Playground has been designed to feature a first responders
                  theme
                </li>
                <li className="feature-intro__item underline">
                  Fully-inclusive playground offers rich experiences
                </li>
                <li className="feature-intro__item underline">
                  The project is set to open Spring 2019
                </li>
                <a
                  href="#"
                  className="btn btn--primary btn--rounded has-shadow"
                >
                  Visit Now
                </a>
              </ul>
            </div>
          </div>
          <div className="feature__item">
            <div className="feature__image">
              <img src="./images/img6.png" alt="" />
            </div>
            <div className="feature__info">
              <h3 className="feature__title">The best Aquapark for kids</h3>
              <p className="feature__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias praesentium facilis est? Omnis expedita, reprehenderit
                corporis placeat earum non, enim autem consequuntur ipsa
              </p>
              <ul className="feature-intro__list">
                <li className="feature-intro__item feature-intro__item--circle">
                  The Fire Truck with Free Food
                </li>
                <li className="feature-intro__item feature-intro__item--circle">
                  The Police Car with Costume
                </li>
                <li className="feature-intro__item feature-intro__item--circle">
                  The Roller Coaster with Safety
                </li>
                <li className="feature-intro__item feature-intro__item--circle">
                  The Best Entertaining Events
                </li>
              </ul>
            </div>
          </div>
          <div className="feature__item">
            <div className="feature__image">
              <img src="./images/img7.png" alt="" />
            </div>
            <div className="feature__info">
              <h3 className="feature__title feature-best__hero">
                Why we are the best
              </h3>
              <p className="feature__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias praesentium facilis est?
              </p>
              <ul className="feature-best__list">
                <li className="feature-best__item">
                  <i className="fas fa-coins feature-best__icon"></i>
                  <h4 className="feature-best__title">
                    Non Profitable Organization
                  </h4>
                  <p className="feature-best__desc">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="feature-best__item">
                  <i className="far fa-handshake feature-best__icon feature-best__icon--gold"></i>
                  <h4 className="feature-best__title">Customer Support</h4>
                  <p className="feature-best__desc">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="feature-best__item">
                  <i className="fas fa-shield-alt feature-best__icon feature-best__icon--lavender"></i>
                  <h4 className="feature-best__title">
                    High-safety & Security
                  </h4>
                  <p className="feature-best__desc">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
                <li className="feature-best__item">
                  <i className="fas fa-paint-brush feature-best__icon feature-best__icon--lightgreen"></i>
                  <h4 className="feature-best__title">
                    Well Designed and decorated
                  </h4>
                  <p className="feature-best__desc">
                    Lorem ipsum dolor sit amet.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
