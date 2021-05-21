import React from "react";
import { Link, Route } from "react-router-dom";
// import Learn from "../Learn/index";
import "./style.css";

function Contact(props) {
return (
  <div>
      <div id="contact" className="contact">
        <div className="container">
            <div className="section-title">
                <h2>Contact</h2>
                <p>Here are my contact info</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="email">
                        <i className="icofont-envelop"></i>
                        <h4>Email:</h4>
                        <p>omartdh@gmail.com</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="phone">
                        <i className="icofont-phone"></i>
                        <h4>Call:</h4>
                        <p>+1 415 812 8224</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 col-xs-12">
                    <div className="address">
                            <i className="icofont-google-map"></i>
                            <h4>Location:</h4>
                            <p>Irvine, CA</p>
                     </div>
                </div>
            </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.886563050362!2d-117.82838754942325!3d33.68600134429421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdc28d22db60d%3A0xbf45c6d681ca178f!2sCity%20of%20Irvine!5e0!3m2!1sen!2sus!4v1618471361364!5m2!1sen!2sus" frameborder="0" id="googlm" allowfullscreen></iframe>
        </div>

          <div className="container">
                          <div className="card-body">
                            <div className="row">
                          
                          <div className="col-lg-12 col-sm-12 col-xs-12">
                            <form>
                              
                                <div className="form-group">
                                  <label for="name">Name</label>
                                  <input type="name" className="form-control" placeholder="Name" id="name1" />
                                </div>
                                <div className="form-group">
                                  <label for="exampleInputEmail1">Email address</label>
                                  <input type="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                              
                                <div className="form-group">
                                  <label for="Message">Message</label>
                                  <textarea type="Message" className="form-control" id="Message" aria-describedby="Message" placeholder="Message"></textarea>
                                </div>
                              <button type="submit" class="btn btn-info" id="submit-btn">Submit</button>
                            </form>
                            <div className="card">
                              <div className="card-body" id="user-info">
                              </div>
                            </div>
                            
                          </div>
                          
                        </div>
                 </div>
            </div>
        </div>

    </div>


  );
}

export default Contact;

{/* <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} /> */}