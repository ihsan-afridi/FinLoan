import React from 'react';
import { FaHome, FaCar, FaGraduationCap } from 'react-icons/fa';


const Card = () => {
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px 0',
    backgroundColor: 'white',
  };

  const cardStyle = {
    backgroundColor: 'skyBlue',
    color: 'white',
    width: '100%',
    maxWidth: '350px',
    padding: '30px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '450px',
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#007bff',
    border: '1px solid white',
    borderRadius: '5px',
    padding: '14px 75px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: 'auto',
    cursor: 'pointer',
    alignSelf: 'center',
  };

  const listStyle = {
    padding: '0', // Removes default padding
    marginTop: '20px', // Adds margin to top
    listStyleType: 'disc', // Ensures the list has dots
    textAlign: 'left', // Keeps text left aligned
    marginLeft: '30px', // Adjusts the entire list further to the right
  };

  const listItemStyle = {
    paddingLeft: '25px', // Adjusts space between dots and text (more padding for more space)
    marginBottom: '5px', // Adds space between items
    fontSize: '15px',
  };

  const loanOptions = [
    {
      title: 'Home Loan',
      icon: <FaHome size={40} />,
      details: [
        'Loan Range: $3000-$10000',
        'Borrow - $350 over 3 months',
        'Interest rate - 292% pa fixed',
        'Total amount payable - $525.12',
        'Representative - 1,286% APR',
      ],
    },
    {
      title: 'Car Loan',
      icon: <FaCar size={40} />,
      details: [
        'Loan Range: $3000-$10000',
        'Borrow - $350 over 3 months',
        'Interest rate - 292% pa fixed',
        'Total amount payable - $525.12',
        'Representative - 1,286% APR',
      ],
    },
    {
      title: 'Education Loan',
      icon: <FaGraduationCap size={40} />,
      details: [
        'Loan Range: $3000-$10000',
        'Borrow - $350 over 3 months',
        'Interest rate - 292% pa fixed',
        'Total amount payable - $525.12',
        'Representative - 1,286% APR',
      ],
    },
  ];

  return (
    <div className="container text-center">
      <h1 style={{ marginBottom: '50px', color: 'black', fontSize: '50px',marginTop: '60px' }}>
        What we offer for you
      </h1>
      <p className="mb-5" style={{ color: '#555', fontSize: '18px' }}>
        We provide online instant cash loans with quick approval that suit your term.
      </p>
      <div style={cardContainerStyle}>
        {loanOptions.map((loan, index) => (
          <div key={index} style={cardStyle} className="col-md-4 col-sm-6">
            <div className="text-center mb-3">{loan.icon}</div>
            <h3 className="text-center mb-3">{loan.title}</h3>
            <ul style={listStyle}>
              {loan.details.map((detail, idx) => (
                <li key={idx} style={listItemStyle}>{detail}</li>
              ))}
            </ul>
            <button style={buttonStyle}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;


