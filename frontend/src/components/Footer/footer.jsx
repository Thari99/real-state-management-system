import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';
import footerImage from '../../img/Logo.jpg';

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section className="footer-footerContact">
        <div className="footer-container">
          <div className="footer-send footer-flex">
            
            <div className="footer-text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            
            <button className="footer-btn5">
              <a href={`tel:0786863991`} className="call-button">
              Contact Us Today
              </a>
            </button>

          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container footer-footer-grid">
          {/* Column for Image */}
          <div className="footer-footer-column footer-logo-column">
            <img className="footer-footerimg" src={footerImage} alt='Logo' />
            <h2>Do You Need Help With Anything?</h2>
            <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month.</p>
            <div className="footer-input footer-flex">
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>

          {/* Column 1 - Navigation */}
          <div className="footer-footer-column">
            <h3>Navigation</h3>
            <ul>
              <li onClick={() => scrollToSection("Home")}><Link to="/" className="linkbtn">Home</Link></li>
              <li onClick={() => scrollToSection("displayproperty")}><Link to="/displayHouses/Luxury House" className="linkbtn">Luxury Houses</Link></li>
              <li onClick={() => scrollToSection("displayproperty")}><Link to="/displayHouses/Budget House" className="linkbtn">Budget Houses</Link></li>
              <li onClick={() => scrollToSection("displayproperty")}><Link to="/displayHouses/Apartment" className="linkbtn">Apartment</Link></li>
              <li>Featured Projects</li>
              <li onClick={() => scrollToSection("LatestProjects")}><Link to="/" className="linkbtn">Latest Projects</Link></li>
              <li onClick={() => scrollToSection("Recent")}><Link to="/" className="linkbtn">Recent</Link></li>
              <li onClick={() => scrollToSection("Awards")}><Link to="/" className="linkbtn">Awards</Link></li>
            </ul>
          </div>

          {/* Column 2 - Features & Tools */}
          <div className="footer-footer-column">
            <h3>About</h3>
            <ul>
              <li onClick={() => scrollToSection("help-me")}><Link to="/help" className="linkbtn">Help</Link></li>
              <li><Link to="/contactus" className="linkbtn">Contact Us</Link></li>
              <li><Link to="/about" className="linkbtn">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - About */}
          <div className="footer-footer-column">
            <h3>Social</h3>
            <ul>
              <li>
                <a href="https://web.facebook.com/Daffodillzone?mibextid=LQQJ4d&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="linkbtn">
                  Facebook/Daffodilzone
                </a>
              </li>
              <li>Instagram</li>
              <li>Twitter</li><br />
              <li>078 686 3991</li>
              <li>Daffodillzone@gmail.com</li>
              <li>Kalalgoda road, Pannipitiya, Sri Lanka</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="footer-legal">
        <span>© Copyright Daffodilzone.lk, dz.lk 2024 | All Rights Reserved. Designed By IIT .</span>
      </div>
    </>
  );
};

export default Footer;
