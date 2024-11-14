import React from "react";
import Heading from "../../components/commen/Heading";
import img1 from "../../img/mohomad.png";
import styles from "./About.module.css";
import Navbar from "../../components/commen/navbar";
import Footer from '../../components/Footer/footer';

const About = () => {
  return (
    <>
      <Navbar />
      <section className={styles.about}>
        <section className={styles.aboutSection}>
          <div className={styles.overlay}></div>
          <div className={styles.aboutSectionText}>
            <p className={`${styles.aboutwho}`}>Who We Are?</p>
            <h1 className={`${styles.abouth1}`}> We provide you with a portfolio of the best Houses, Lands, Apartments & Hotels in Sri Lanka!</h1>
          </div>
        </section>
        <div className={`${styles.container} ${styles.flex} ${styles.mtop}`}>
          <div className={`${styles.left} ${styles.row}`}>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            <div >
              <p className={`${styles.aboutp}`}>Welcome to Daffodil Zone, where comfort and luxury seamlessly come together to offer you an unparalleled real estate experience in the heart of Sri Lanka. We take pride in offering a diverse range of high-quality real estate services designed to cater to your unique lifestyle and preferences. Whether you're searching for a serene countryside retreat surrounded by nature, a modern city apartment**with all the conveniences of urban living, or a luxurious house that embodies elegance and sophistication, we have the perfect property to meet your needs.
                                                At Daffodil Zone, we are committed to delivering a personalized experience, guiding you through every stage of the process, from exploring the best options to finalizing your dream property. Our team of experts is dedicated to ensuring that your real estate journey is smooth, stress-free, and enjoyable. With our deep understanding of the Sri Lankan real estate market, we aim to help you find not just a property but a place to call home. Whether you're a first-time homebuyer, an experienced investor, or simply looking for a vacation home, Daffodil Zone is here to turn your dreams into reality, offering a variety of properties that reflect style, elegance and modern living Explore the endless possibilities with us and discover how we can help you find the perfect home that matches your vision and lifestyle.</p>
              <p className={`${styles.aboutp}`}><b>Our Mission</b><br />
              At Daffodil Zone our mission is to redefine and transform the way you experience property hunting, turning what is often seen as a stressful task into an exciting and fulfilling journey. We believe that finding your perfect home or investment property should be more than just a transaction—it should be a journey of discovery filled with excitement, possibilities, and confidence in the choices you make.
              We are deeply committed to delivering exceptional service that goes above and beyond your expectations. Our approach is centered around understanding your individual needs and aspirations, allowing us to present you with the best real estate options that truly align with your lifestyle, goals, and vision for the future. Whether you are looking for a tranquil escape, a bustling city residence, or a solid investment opportunity, we are dedicated to providing a
              curated selection of properties that reflect quality, value and potential.
              From the moment you begin your search with Daffodil Zone our team of experienced professionals will be by your side, guiding you through each step of the process with personalized attention and expert advice. Our goal is to ensure that your real estate journey is seamless, enjoyable and, most importantly, stress-free We handle all the details, from property viewings to negotiations, so you can focus on making the right decision with confidence and peace of mind.
              We don’t just help you find a property; we help you find a place to call home or a strategic investment that will secure your future. At Daffodil Zone your satisfaction is our top priority, and we are dedicated to making your property search an exceptional experience from start to finish.</p>
            </div>
          </div>
          <div className={`${styles.right} ${styles.row}`}>
            <img src={img1} alt='' />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
