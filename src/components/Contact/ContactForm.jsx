import React from "react";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <div className="container py-5 position-relative">
      {/* Title at the top-left */}
      <h2 className="position-absolute" style={{ top: "13px", left: "20px", color: "black" , fontSize: '28px'}}>
        Get in Touch
      </h2>
      
      <div className="row border rounded p-4">
        {/* Form Section */}
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="6"
                placeholder="Enter Message"
              ></textarea>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email address"
                />
              </div>
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Subject"
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#87CEEB", // Sky blue button background
                  color: "white",
                  border: "none",
                }}
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="col-md-4 border-start">
          <div className="mb-4 d-flex align-items-center">
            <FaHome
              className="me-3"
              size={24}
              style={{ color: "#87CEEB" }} // Sky blue icon color
            />
            <div>
              <p className="mb-1">Buttonwood, California.</p>
              <small>Rosemead, CA 91770</small>
            </div>
          </div>
          <div className="mb-4 d-flex align-items-center">
            <FaPhoneAlt
              className="me-3"
              size={24}
              style={{ color: "#87CEEB" }} // Sky blue icon color
            />
            <div>
              <p className="mb-1">00 (440) 9865 562</p>
              <small>Mon to Fri 9am to 6pm</small>
            </div>
          </div>
          <div className="mb-4 d-flex align-items-center">
            <FaEnvelope
              className="me-3"
              size={24}
              style={{ color: "#87CEEB" }} // Sky blue icon color
            />
            <div>
              <p className="mb-1">support@colorlib.com</p>
              <small>Send us your query anytime!</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
