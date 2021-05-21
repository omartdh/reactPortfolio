import React from "react";
import img3 from "../../images/IMG_5191.jpg"
import "./style.css";

function Header() {
  return (
  <div>
    <div id="header">
        <div class="container">
          <div class="row">
              <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="d-flex flex-column">
                    <div class="profile">
                      <img src={img3} alt="Omar" class="img-fluid rounded-circle"></img>
                      <a href="https://github.com/omartdh" class="github"><i class="bx bxl-github"></i></a>
                      <a href="https://www.linkedin.com/in/omar-dahmash-b34693a4/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
</div>
  );
}




export default Header;
