import React, { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import "../pages/HouseCards/HouseCards.css";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/commen/navbar';
import LatestProjects from '../components/LatestProjects';
import Footer from '../components/Footer/footer';

const HotelDisplay = () => {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const navigate = useNavigate();

  const fetchHotels = useCallback(() => {
    axios.get(`http://127.0.0.1:5000/displayHotel`) 
      .then(response => {
        setFilteredHotels(response.data); 
      })
      .catch(error => {
        console.error("There was an error fetching the hotels!", error);
      });
  }, []);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  const handleViewMore = (id) => {
    navigate(`/propertyinfo/${id}`); 
  };

  return (
    <div>
      <Navbar /> 
      <LatestProjects />
      <section id="displayproperty">
      <div className='house-display-content grid3 mtop'>
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel, index) => {
            const { id, district, images, keyWord} = hotel;
            return (
              <div className='box shadow' key={index}>
                <div className='img'>
                  {images.length > 0 && images[0].image1 ? (
                    <img src={`http://127.0.0.1:5000/static/uploads/${images[0].image1}`} alt='' />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
                <div className='text'>
                  <h4 className="hotel-name">{keyWord}</h4>
                  <p className="location">
                    <i className='fa fa-location-dot'></i> {district}
                  </p>
                 
                </div>
                  <div className="btn">
                    <button className="btnviewmore btn-primary" onClick={() => handleViewMore(id)}> View More </button>
                  </div>
                </div>
            );
          })
        ) : (
          <p>No hotels available.</p>
        )}
        <br /><br />
      </div></section>
      <Footer />
    </div>
  );
};

export default HotelDisplay;
