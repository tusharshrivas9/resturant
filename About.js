import React from "react";
import Projectdata from "./Data";

const About = ({ addToCart }) => {
  return (
    <>
      <div className="container">
        <h1 className="name text-center">Food Available</h1>
        <div className="row">
          {Projectdata.map((el, index) => {
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4 my-5">
                <div className="card h-100 w-auto">
                  <img
                    src={el.image}
                    className="card-img-top img-fluid img-thumbnail"
                    alt="..."
                  />
                  <div className="card-body text-center">
                    <p className="card-text">{el.id}</p>
                    <h5 className="card-title">{el.item}</h5>
                    <p className="card-text">{el.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(el)}
                    >
                      Deliver Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
