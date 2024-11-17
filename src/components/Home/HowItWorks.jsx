import React from 'react';

const HowItWorks = () => {
  return (
    <div className="container text-center my-5" style={{ maxWidth: '960px' }}>
      {/* Section Title */}
      <h1 className="display-4" style={{ color: '#333', marginBottom: '30px' }}>How it Works</h1>
      <p style={{ color: '#666', fontSize: '18px', margin: 'auto', lineHeight: '1.6' }}>
        We provide online instant cash loans with quick approval that suit your term.
      </p>

      {/* Steps Container */}
      <div className="row justify-content-center mt-5">
        
        {/* Step 1 */}
        <div className="col-md-4 col-sm-6 text-center mb-4">
          <div
            className="text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              backgroundColor: '#87CEEB',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              fontSize: '24px',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            01
          </div>
          <h4 style={{ color: '#333', fontWeight: '600', textAlign: 'left', marginLeft: '100px' }}>Apply for Loan</h4>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5', textAlign: 'left', marginLeft: '100px' }}>
            We will customize a loan based on the amount of cash your company needs.
          </p>
        </div>

        {/* Step 2 */}
        <div className="col-md-4 col-sm-6 text-center mb-4">
          <div
            className="text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              backgroundColor: '#87CEEB',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              fontSize: '24px',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            02
          </div>
          <h4 style={{ color: '#333', fontWeight: '600', textAlign: 'left', marginLeft: '100px' }}>Application Review</h4>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5', textAlign: 'left', marginLeft: '100px' }}>
            Our team will review your application promptly for quick approval.
          </p>
        </div>

        {/* Step 3 */}
        <div className="col-md-4 col-sm-6 text-center mb-4">
          <div
            className="text-white d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              backgroundColor: '#87CEEB',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              fontSize: '24px',
              fontWeight: 'bold',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            03
          </div>
          <h4 style={{ color: '#333', fontWeight: '600', textAlign: 'left', marginLeft: '100px' }}>Get Funding Fast</h4>
          <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5', textAlign: 'left', marginLeft: '100px' }}>
            Receive the funds quickly to support your business needs.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default HowItWorks;
