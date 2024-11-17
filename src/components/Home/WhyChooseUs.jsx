import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from '../../assets/img2.jpg'; // Adjust path if necessary

const WhyChooseUs = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column with Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={img2}
              alt="Why Choose Us"
              className="img-fluid rounded"
              style={{ maxHeight: '550px', objectFit: 'cover', width: '100%' }}
            />
          </div>

          {/* Right Column with Text */}
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2
              className="mb-3"
              style={{
                fontSize: '30px',
                fontWeight: 'bold',
                marginLeft: '40px',
                color: 'black'
              }}
            >
              Why Choose Us?
            </h2>
            <p className="text-muted" style={{ fontSize: '16px', lineHeight: '1.8', marginLeft: '40px' }}>
              Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing.
              Apartments frequently or motionless on reasonable.
            </p>
            
            {/* Unordered List with Dots */}
            <ul className="list-unstyled" style={{ paddingLeft: '20px', marginTop: '20px', marginLeft: '20px' }}>
              <li className="mb-2">
                <span className="text-primary">&#8226;</span> Loans with quick approval.
              </li>
              <li className="mb-2">
                <span className="text-primary">&#8226;</span> Customize a loan based on the amount.
              </li>
              <li className="mb-2">
                <span className="text-primary">&#8226;</span> Good credit profile and you have built your loan.
              </li>
              <li className="mb-2">
                <span className="text-primary">&#8226;</span> We provide online instant cash loans.
              </li>
            </ul>

            {/* About Us Button with Hover Effect */}
            <button
              className="btn mt-4"
              style={{
                fontWeight: 'bold',
                padding: '10px',
                width: '110px',
                marginLeft: '40px',
                backgroundColor: buttonHovered ? 'transparent' : '#87CEEB',
                border: buttonHovered ? '1px solid #87CEEB' : 'none',
                color: buttonHovered ? '#87CEEB' : 'white',
                transition: 'opacity 0.3s', // Smooth transition for opacity change
              }}
              onMouseEnter={() => setButtonHovered(true)} // Transparency on hover
              onMouseLeave={() => setButtonHovered(false)} // Reset on mouse out
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
