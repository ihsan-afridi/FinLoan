import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapError = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white text-center">
      <div className="text-center">
        {/* Circle Icon */}
        <div
          className="d-flex justify-content-center align-items-center rounded-circle bg-warning mx-auto mb-3"
          style={{
            width: '100px',
            height: '100px',
            color: 'white',
            fontSize: '60px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          !
        </div>
        <h1 className="fw-bold mb-3">Oops! Something went wrong.</h1>
        <p className="text-muted fs-5">
          This page didn't load Google Maps correctly. Please check the JavaScript console for technical details.
        </p>
      </div>
    </div>
  );
};

export default MapError;
