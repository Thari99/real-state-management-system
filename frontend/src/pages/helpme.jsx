import React from 'react';
import Navbar from '../components/commen/navbar';
import Footer from '../components/Footer/footer';
import './helpme.css';

const HelpMe = () => {
  return (
    <div>
      <Navbar />
      <section id="help-me">
        <div className="help-container">
          <h1>Need Help? We've Got You Covered!</h1>
          <p>If you're having trouble navigating our platform, booking a house, or any other issues, here's a guide to help you out.</p>
          
          <div className="help-section">
            <h2>1. How to Search for Houses</h2>
            <p>Use the search bar on the homepage to look for properties by keyword, location, or house type. Enter your criteria and click "Search" to see available listings.</p>
          </div>

          <div className="help-section">
            <h2>2. Viewing Property Details</h2>
            <p>After searching, click "View More" on any property card to see detailed information about the house, including images, house type, location, and other specifics.</p>
          </div>

          <div className="help-section">
            <h2>3. Booking a House</h2>
            <p>Once you're logged in, you can click the "Book Now" button on the property page to schedule a viewing. Make sure to select your preferred date and time before confirming.</p>
          </div>

          <div className="help-section">
            <h2>4. How to Handle Login Issues</h2>
            <p>If you encounter issues with logging in, ensure you're using the correct credentials. If you've forgotten your password, Plese contact the admin.</p>
          </div>

          <div className="help-section">
            <h2>5. Booking Failures</h2>
            <p>If a booking fails, check that you've provided all the necessary information (date, time). If the problem persists, ensure you're logged in or contact support for help.</p>
          </div>

          <div className="help-section">
            <h2>6. Contacting Support</h2>
            <p>If you need additional help, please reach out to us via our support email at Daffodillzone@gmail.com or call our hotline at 078 686 3991.</p>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HelpMe;
