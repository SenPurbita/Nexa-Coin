import React from 'react';
import './Aboutus.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import founder1 from '../../assets/founder1.jpg';
import founder2 from '../../assets/founder2.jpg';

const AboutUs = () => {
  const shareUrl = window.location.href;

  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>

      <section className="company-info">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to providing a secure and user-friendly platform for buying, selling, and trading cryptocurrencies.
          Our mission is to create an open, decentralized financial ecosystem that empowers individuals globally.
        </p>

        <h2>Contact Information</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:nexacoin@gmail.com">nexacoin@gmail.com</a></p>
          <p>Phone: <a href="tel:+919868651234">+91 9868651234</a></p>
          <p>Phone: <a href="tel:+033834543">+033 834543</a></p>
          <p>Address: 375, Prince Anwar Shah Rd, South City Complex, Jadavpur, Kolkata, West Bengal 700068</p>
        </div>
      </section>

      <section className="founders">
        <h2>Meet the Founders</h2>
        <div className="founder-card">
          <img src={founder1} alt="Purbita Sen" className="founder-image" />
          <p><strong>Purbita Sen</strong> – CEO & Founder</p>
        </div>
        <div className="founder-card">
          <img src={founder2} alt="Arpan Banerjee" className="founder-image" />
          <p><strong>Arpan Banerjee</strong> – Co-Founder</p>
        </div>
      </section>

      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://facebook.com/crypto" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/crypto" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/company/crypto" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com/crypto" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      <footer className="footer">
        <h3>Share This Page</h3>
        <div className="share-icons">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
