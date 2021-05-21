import React from "react";
import "./style.css";
import img1 from "../../../images/IMG1.jpg"
import img2 from "../../../images/IMG2.jpg"
import img3 from "../../../images/IMG3.jpg"

function Portfolio() {
  return (
    <div>
      <div id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Some of the web apps that I have done during the bootcamp:</p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-12 mb-4">
                <a href="https://mrmatcke.github.io/Project-for-Random-Ozone-wheelers/">
                  <img src={img1} alt="img1" className="img-thumbnail" />
                </a>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-12 mb-4">
                <a href="https://omartdh.github.io/weatherApi/">
                  <img src={img3} alt="img3" className="img-thumbnail" />
                </a>
              </div>

              <div className="col-lg-4 col-sm-6 col-xs-12 mb-4">
                <a href="https://omartdh.github.io/workDayScheduler/">
                  <img src={img2} alt="img2" className="img-thumbnail" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
