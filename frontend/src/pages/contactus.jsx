import React from 'react';
import './contactus.css';
import Navbar from '../components/commen/navbar';
import Footer from '../components/Footer/footer';

export default function ContactUs() {
  return (
    <div><Navbar />
    <div className="contact-us-container">
      <h1 className="contact-h1h2"><b>Contact Us</b></h1>
      <div className="contact-info">
        <p><br />
          <strong>Address:</strong> <br />
          Kalalgoda Road, <br />
          Pannipitiya, Sri Lanka
        </p><br />

        <p>
          <strong>Phone:</strong> <br />
          <a href="tel:+94786863991">078 686 3991</a>
        </p><br />

        <p>
          <strong>Email:</strong> <br />
          <a href="mailto:Daffodillzone@gmail.com">Daffodillzone@gmail.com</a>
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
}
