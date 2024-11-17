import { FaQuoteRight } from 'react-icons/fa';
import img4 from '../../assets/img4.jpg';

const Testimonial = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: '#fff',
        height: '100vh', // Full-screen height
          // Full-screen width
        padding: '20px',
        boxSizing: 'border-box', // Include padding in width/height calculation
      }}
    >
      <div
        className="d-flex align-items-center justify-content-between flex-column flex-md-row"
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '20px',
          width: '90%', // Make the container responsive
          maxWidth: '1200px', // Limit maximum width for large screens
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#fff',
        }}
      >
        {/* Image Section */}
        <div
          className="d-flex flex-column align-items-center"
          style={{
            maxWidth: '150px',
            marginBottom: '20px',
            marginRight: '20px',
          }}
        >
          <img
            src={img4}
            alt="User"
            className="rounded-circle"
            style={{
              width: '100px',
              height: '100px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          />
          <div
            style={{
              backgroundColor: '#00c4cc',
              color: 'white',
              borderRadius: '50%',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <FaQuoteRight />
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="flex-grow-1 text-center text-md-start">
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#333',
              marginBottom: '10px',
            }}
          >
            "Working in conjunction with humanitarian aid agencies, we have supported
            programmes to help alleviate human suffering through animal welfare when people
            might depend on livestock as their only source of income or food."
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#888',
            }}
          >
            - Micky Mouse
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="d-flex flex-column justify-content-center">
          <div
            className="rounded-circle"
            style={{
              backgroundColor: '#f0f8ff',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px',
              cursor: 'pointer',
            }}
          >
            <span style={{ color: '#007bff', fontSize: '20px' }}>&#8250;</span>
          </div>
          <div
            className="rounded-circle"
            style={{
              backgroundColor: '#f0f8ff',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ color: '#007bff', fontSize: '20px' }}>&#8249;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
