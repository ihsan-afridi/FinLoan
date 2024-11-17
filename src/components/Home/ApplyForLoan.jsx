import React, { useState } from 'react';
import img5 from '../../assets/img5.jpg'; // Correct path to your image

const ApplyForLoan = () => {
  // State for button hover effect
  const [loanButtonHovered, setLoanButtonHovered] = useState(false);

  return (
    <div
      className="container-fluid"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60vh', // Adjusted height to make the image smaller
        backgroundImage: `url(${img5})`, // Imported image used here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0 15px',
      }}
    >
      <div
        className="left-text"
        style={{
          color: 'white',
          fontSize: '30px',
          fontWeight: 'bold',
          maxWidth: '50%',
          textAlign: 'left',
        }}
      >
        <h1>Apply for a Loan for your startup, education or company</h1>
      </div>

      <div
        className="right-button"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <button
          style={{
            backgroundColor: loanButtonHovered ? 'transparent' : 'skyblue',
            border: loanButtonHovered ? '1px solid skyblue' : 'none',
            color: loanButtonHovered ? 'skyblue' : 'white',
            padding: '12px 25px',
            fontWeight: 'bold',
            fontSize: '13px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s, color 0.3s, border 0.3s', // Smooth transition for hover effect
          }}
          onMouseEnter={() => setLoanButtonHovered(true)} // Change state when mouse enters
          onMouseLeave={() => setLoanButtonHovered(false)} // Change state when mouse leaves
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ApplyForLoan;
