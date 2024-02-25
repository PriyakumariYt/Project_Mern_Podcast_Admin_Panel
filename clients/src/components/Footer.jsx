import React from "react";
import "./Footer.css"
function Footer() {
    return (
      <>
        <section className="footer">
          <h4>About Us</h4>
          <hr />
          <p>
           Listen to medical survival stories New episodes weekly.
          </p>

          <div className="social-links">
            <i className="bx bxl-facebook-circle"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-linkedin-square"></i>
            <i className="bx bxl-youtube"></i>

            <p>Thanks For Watching</p>
          </div>
        </section>
      </>
    );
}
export default Footer;
