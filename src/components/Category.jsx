import React from "react";

const Category = () => {
  return (
    <div>
      <section className="category">
        <div className="container">
          <ul className="category__list">
            <li className="category__item">
              <img src="./images/img1.png" alt="" className="category__image" />
              <h3 className="category__name">Safe Rides</h3>
              <a href="#" className="category__detail">
                CC Certified
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
            <li className="category__item">
              <img src="./images/img2.png" alt="" className="category__image" />
              <h3 className="category__name">Delicious Foods</h3>
              <a href="#" className="category__detail">
                Gluten Free
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
            <li className="category__item">
              <img src="./images/img3.png" alt="" className="category__image" />
              <h3 className="category__name">Entertainment</h3>
              <a href="#" className="category__detail">
                Suitable for kids
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
            <li className="category__item">
              <img src="./images/img4.png" alt="" className="category__image" />
              <h3 className="category__name">Ice-Cream</h3>
              <a href="#" className="category__detail">
                No Synthetic
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Category;
