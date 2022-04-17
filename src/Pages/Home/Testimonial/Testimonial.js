import React from "react";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial-area">
      <h2 className="text-center text-white pt-5 testimonial-title">
        What Other People Say About Me
      </h2>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Riyad Khan</h5>
                <p className="card-text">
                  Travelian has guide me in an awesome tours of Saint Martin and
                  get much pleasure in this tour. He is an awesome tour guide
                  and knows all the location properly.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Rifat Ahmed</h5>
                <p className="card-text">
                  Last month I went Sundarban by getting help from Travelian and
                  He help me to explore nicely. Thank you
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Bilal Chowdhury</h5>
                <p className="card-text">
                  Get much pleasure and happiness by visiting Sylhet in this
                  month. Thank you Travelian for guiding me properly without any
                  hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
