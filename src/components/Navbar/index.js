import React from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../../images/omar_resume.pdf"
import "./style.css";

function Navbar() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg">
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">Menu</span>
    </button>
<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}><i className="bx bx-home"></i><span>Home</span>
        </Link>
        </li>
        <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        ><i className="bx bx-user"></i><span>About</span>
        </Link>
      </li>
        <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        ><i className="bx bx-book-content"></i><span>Portfolio</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        ><i className="bx bx-envelope"></i><span>Contact</span>
        </Link>
      </li>
      <li className="nav-item">
        <a
          href={resume}
          className="nav-link"
        ><i className="bx bx-file"></i><span>Resume</span>
        </a>
        </li>
        <li className="nav-item">
        <a href="https://github.com/omartdh"
          className="nav-link"
        ><i className="bx bxl-github"></i><span>Github</span>
        </a>
        </li>
        <li className="nav-item">
        <a
          href="https://www.linkedin.com/in/omar-dahmash-b34693a4/"
          className="nav-link"
        ><i className="bx bxl-linkedin"></i><span>linkedin</span>
        </a>
        </li>
    </ul>     
</div>
</nav>
  );
}

export default Navbar;


