
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../Home/Recent.css";
import Navbar from '../../components/commen/navbar';
import Footer from '../../components/Footer/footer';

export default function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state?.query || "";
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/searchHouses', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }), // Pass query in the request body
        });
    
        if (response.ok) {
          const data = await response.json();
          setProperties(data); // Update the state with the array of house data
        } else {
          setError('Error fetching properties: ' + response.statusText);
        }
      } catch (error) {
        setError('Error: ' + error.message);
      }
    };
    
    if (query) {
      fetchProperties();
    }
  }, [query]);

  const viewHouseDetails = (id) => {
    navigate(`/propertyinfo/${id}`); // Navigate to HouseDisplay component
  };

  return (
    <div>
      <div>
      <Navbar />
    
      <h2>Search Results for "{query}":</h2>

      <div className='container-search'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {properties.length > 0 ? (
        properties.map((property) => (
          <div key={property.id} className='recent padding'>
            <div className='container-of-search'>
              <div className='box shadow'>
                <div className='img'>
                  {property.images && property.images.length > 0 && property.images[0].image1 ? (
                    <img src={`http://127.0.0.1:5000/static/uploads/${property.images[0].image1}`} alt='House' />
                  ) : (
                    <span>No Image</span>
                  )}
                </div>
                <div className='text'>
                  <div className='category flex'>
                    <span style={{ background: property.houseType === "Budget House" ? "#25b5791a" : "#ff98001a", color: property.houseType === "Luxury House" ? "#25b579" : "#ff9800" }}>
                      {property.houseType}
                    </span>
                    <i className='fa fa-heart'></i>
                  </div>
                  <h4>{property.description}</h4>
                  <p>
                    <i className='fa fa-location-dot'></i> {property.district}
                  </p>
                  <button onClick={() => viewHouseDetails(property.id)}>View Details</button> {/* Button to fetch house details */}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No properties found.</p>
      )}
      
    </div>
    </div>
    <><Footer /></>;
     
    </div>
    
  );
}
