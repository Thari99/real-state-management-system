import React from 'react';
import '../../components/navbar.css';
import logo from '../../img/Logo.jpg';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const sessionUserId = sessionStorage.getItem("userId");
  const sessionuser_email = sessionStorage.getItem("user_email");
  const sessionuserRole = sessionStorage.getItem('userRole');
  const sessionuserName = sessionStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <header className='topnav'>
        <img className='logo' src={logo} alt="Daffodil Zone Logo" />
        <nav>
          <ul className='nav__links'>
            <li className='DaffodilZone'>DAFFODIL ZONE</li>
          </ul>
        </nav>
        <div className='contact-login'>
          <div className='contactinfo'>
            <ul>
              <li className='capitalize'>Welcome {sessionuserName}</li>
            </ul>
          </div>
          <div>
            {sessionUserId && sessionuser_email ? (
              <button onClick={handleLogout}>LogOut</button>
            ) : (
              <Link to="/login"><button>LogIn</button></Link>
            )}
          </div>
        </div>
      </header>

      <div className='navbar'>
        <nav>
          <ul className='nav__links'>
          {!sessionuserRole && (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/displayHouses/Luxury House">Luxury House</Link></li>
              <li><Link to="/displayHouses/Budget House">Budget House</Link></li>
              <li><Link to="/displayHouses/Apartment">Apartment</Link></li>
              <li><Link to="/displayHotels">Hotels</Link></li>
              <li><Link to="/about">About</Link></li>
            </>
          )}
            
            {sessionuserRole === "customer" && (
              <>
                <li><Link to="/CustomerHome">Home</Link></li>
                <li><Link to="/displayHouses/Luxury House">Luxury House</Link></li>
                <li><Link to="/displayHouses/Budget House">Budget House</Link></li>
                <li><Link to="/displayHouses/Apartment">Apartment</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/my-bookings">My Bookings</Link></li>
              </>
            )}
            
            {sessionuserRole === "agent" && (
              <>
                <li><Link to="/AgentHome">Home</Link></li>
                <li><Link to="/displayHouses/Luxury House">Luxury House</Link></li>
                <li><Link to="/displayHouses/Budget House">Budget House</Link></li>
                <li><Link to="/displayHouses/Apartment">Apartment</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/bannerAdd">Add Banner</Link></li>
                <li><Link to="/addHouseForAdmin">Add House</Link></li>
              </>
            )}

            {sessionuserRole === "user" && (
              <>
                <li><Link to="/AdminHome">Home</Link></li>
                <li><Link to="/displayHouses/Luxury House">Luxury House</Link></li>
                <li><Link to="/displayHouses/Budget House">Budget House</Link></li>
                <li><Link to="/displayHouses/Apartment">Apartment</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/displayAgentHouse">Agent Houses</Link></li>
                <li><Link to="/bannerAdd">Add Banner</Link></li>
                <li><Link to="/addHouse">Add House</Link></li>
                <li><Link to="/addHotel">Add Hotel</Link></li>
                <li><Link to="/addAgent">Add Agent</Link></li>
                <li><Link to="/bookings">Bookings</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
