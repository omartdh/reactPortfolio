import React from "react";
import "./style.css";
import img from "../../../images/IMG_33.jpeg"

function About() {
  return (
      <div>
        <div id="about" className="about">
        <div className="container">
             <div className="section-title">
                 <h2>About</h2>
                 <p>I am a student here at the coding bootcamp. I have taken this cource because I am interested in coding and I want to become a software engineer. Being a sociable person, I have many friends since I like to communicate with people and get to know new interesting individuals. </p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <img src={img} className="img-fluid img-thumbnail" id="img2" alt="Omar" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Full Stack Web Developer</h3>
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i><strong>Website:</strong> www.example.com</li>
                            <li><i className="icofont-rounded-right"></i><strong>Phone:</strong> +1 415 812 8224</li>
                            <li><i className="icofont-rounded-right"></i><strong>City:</strong> Irvine, CA</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i><strong>Degree:</strong> Master</li>
                            <li><i className="icofont-rounded-right"></i><strong>Email:</strong> omartdh@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
    </div> 
  </div>
</div>
  );
}

export default About;
