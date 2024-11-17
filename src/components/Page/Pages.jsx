import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt, FaHome, FaBars, FaTimes } from 'react-icons/fa';
import background from '../../assets/img.jpg';

const Pages = () => {
  const [loanButtonHovered, setLoanButtonHovered] = useState(false);
  const [applyButtonHovered, setApplyButtonHovered] = useState(false);
  const [howItWorksButtonHovered, setHowItWorksButtonHovered] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState('Select Amount');
  const [selectedMonth, setSelectedMonth] = useState('Select Month');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '40px',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    overflow: 'hidden',
    position: 'relative',
  };

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const headerTextStyle = {
    fontSize: windowWidth < 576 ? '24px' : windowWidth < 768 ? '36px' : '60px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    textAlign: windowWidth < 576 ? 'center' : 'left',
    marginTop: windowWidth < 768 ? '100px' : '140px',
  };

  return (
    <div className="d-flex flex-column" style={{ paddingTop: '70px', ...containerStyle }}>
      {/* Fixed Navbar Section */}
      <div style={navbarStyle}>
        <div className="d-flex align-items-center">
          <FaHome size={30} style={{ color: 'skyblue' }} />
          <span className="ms-2 fs-5 fw-bold" style={{ color: 'white' }}>Finloans</span>
        </div>

        {windowWidth < 768 ? (
          <div onClick={toggleMenu} style={{ cursor: 'pointer', color: 'white' }}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        ) : (
          <div className="d-flex">
            <Link to="/" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>Home</Link>
            <Link to="/loan" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>Loan</Link>
            <Link to="/about" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>About</Link>
            <Link to="/pages" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>Pages</Link>
            <Link to="/blog" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>Blog</Link>
            <Link to="/faq" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>FAQ</Link>
            <Link to="/contact" className="text-decoration-none mx-3" style={{ color: 'white', fontSize: '18px' }}>Contact</Link>
          </div>
        )}

        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center" style={{ color: 'skyblue' }}>
            <FaPhoneAlt />
            <span className="ms-2">+10 673 567 367</span>
          </div>
          <a
            className="btn btn-primary"
            href="/apply.html"
            style={{
              backgroundColor: applyButtonHovered ? 'transparent' : 'skyblue',
              border: applyButtonHovered ? '1px solid skyblue' : 'none',
              color: applyButtonHovered ? 'skyblue' : 'white',
              height: '46px',
              padding: '13px 15px',
              fontSize: '12px',
            }}
            onMouseEnter={() => setApplyButtonHovered(true)}
            onMouseLeave={() => setApplyButtonHovered(false)}
          >
            Apply for a Loan
          </a>
        </div>
      </div>

      {/* Menu Overlay for Mobile */}
      {menuOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 10 }}>
          {['Home', 'Loan', 'About', 'Pages', 'Blog', 'FAQ', 'Contact'].map((text) => (
            <Link
              key={text}
              to={`/${text.toLowerCase()}`}
              className="text-white my-2"
              style={{ fontSize: '20px', textDecoration: 'none' }}
              onClick={toggleMenu}
            >
              {text}
            </Link>
          ))}
        </div>
      )}

      {/* Main Content Section */}
      <div className="text-white mb-5" style={{ textAlign: windowWidth < 576 ? 'center' : 'left', fontSize: headerTextStyle.fontSize }}>
        <h1 style={headerTextStyle}>
          Get Loan for your<br />Business growth or<br />startup with our<br />Support!
        </h1>
        <a
          className="btn btn-primary mt-4"
          href="/how-it-works.html"
          style={{
            backgroundColor: howItWorksButtonHovered ? 'transparent' : 'skyblue',
            border: howItWorksButtonHovered ? '1px solid skyblue' : 'none',
            color: howItWorksButtonHovered ? 'skyblue' : 'white',
            padding: '12px 24px',
            fontSize: '14px',
          }}
          onMouseEnter={() => setHowItWorksButtonHovered(true)}
          onMouseLeave={() => setHowItWorksButtonHovered(false)}
        >
          How it Works
        </a>
      </div>
    </div>
  );
};

export default Pages;
