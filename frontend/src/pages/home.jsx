import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/commen/navbar';
import HomePageImage1 from '../img/HomePageImage1.jpg';
import '../pages/home.css';
import LatestProjects from '../components/LatestProjects';
import Recent from "../pages/Home/Recent"
import Awards from "../pages/Home/Awards"
import Description from "./Home/company_description"
import Footer from '../components/Footer/footer';


export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); 

  const handleSearch = async (event) => {
    event.preventDefault();
    
    navigate('/search_results', { state: { query } });
  };
  return (
    <div>
        <Navbar />
      <section id="Home">
      <div className="imageContainer">
      <div className="text-container-home">
        <div className='capitalize-text'>
          <h1 className='text-on-image'>Explore<br />Your Dream House<br />With Us</h1>
        </div>
      </div>
        <img className="homePageImage" src={HomePageImage1} alt="" />
        <form className="filterForm" onSubmit={handleSearch} style={{ borderRadius: '30px', padding: '10px', border: '1px solid #ccc' }}>
        
        <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} style={{ borderRadius: '30px', padding: '8px', width:'100%', border: '1px solid #ccc' }} />
        <button type="submit" style={{ borderRadius: '30px', padding: '5px' }}>Search</button>
      
      </form>
      </div></section>

      <div className='web_body'>
        <div className="latestProjectsContainer">
          <h2>Latest Projects</h2>
            
            <section id="LatestProjects">
              <LatestProjects /><br/>
            </section>
         
          <div className="latestProjectsContainer">
            <section id="Recent">
              <Recent /><br/>
            </section>
            <section id="Awards">
              <Awards/><br/>
            </section>
          
            <Description/>
            <Footer />
        </div>
        </div>
      </div>
    </div>
  );
}
