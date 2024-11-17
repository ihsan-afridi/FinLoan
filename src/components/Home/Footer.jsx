import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaHome } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '40px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row">
          {/* Logo and Contact Info */}
          <div className="col-md-3 mb-4">
            <div className="d-flex align-items-center">
              <FaHome size={30} style={{ color: 'skyblue' }} />
              <span className="ms-2 fs-5 fw-bold" style={{ color: 'skyblue' }}>Finloans</span>
            </div>
            <p className="mt-3">finloan@support.com</p>
            <p>+10 873 672 6782</p>
            <p>600/D, Green road, NewYork</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" style={circleIconStyle}><FaFacebookF size={20} color="skyblue" /></a>
              <a href="#" style={circleIconStyle}><FaInstagram size={20} color="skyblue" /></a>
              <a href="#" style={circleIconStyle}><FaTwitter size={20} color="skyblue" /></a>
              <a href="#" style={circleIconStyle}><FaGoogle size={20} color="skyblue" /></a>
            </div>
          </div>

          {/* Services Section */}
          <div className="col-md-3 mb-4">
            <h5>Services</h5>
            <ul className="list-unstyled">
              {['SEO/SEM', 'Web Design', 'Ecommerce', 'Digital Marketing'].map(service => (
                <li key={service} className="mb-3"> {/* Added mb-3 for spacing */}
                  <a href="#" style={linkStyle}>{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div className="col-md-3 mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              {['About', 'Blog', 'Contact', 'Support'].map(link => (
                <li key={link} className="mb-3"> {/* Added mb-3 for spacing */}
                  <a href="#" style={linkStyle}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-md-3 mb-4">
            <h5>Subscribe</h5>
            <form className="position-relative">
              <input
                type="email"
                placeholder="Enter your email..."
                className="form-control"
                style={{
                  paddingRight: '100px',
                  borderRadius: '10px', // 10px border-radius applied to input
                  padding: '13px',
                  width: '300px',
                  marginTop: '20px'
                }}
              />
              <button
                type="submit"
                className="btn btn-primary position-absolute"
                style={{
                  top: '0',
                  right: '-30px',
                  height: '80%',
                  borderRadius: '10px', // 10px border-radius applied to button
                  marginTop: '5px',
                }}
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3">
              Esteem spirit temper too say adieus who direct esteem esteems luckily.
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="mt-3 text-muted">
              Copyright ©2024 All rights reserved | This template is made with ❤️ by 
              <span style={{ color: 'skyblue' }}> Colorlib</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline styles for circle icons and links
const circleIconStyle = {
  borderRadius: '50%',
  padding: '10px',
  backgroundColor: 'lightgray',
  display: 'inline-block',
  textAlign: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

export default Footer;
