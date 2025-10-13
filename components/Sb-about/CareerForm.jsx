// import { ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const CareerForm = () => {
  return (
    <div className="container pb-5">
      <div className="row justify-content-center">
        <div className="col-12 shadow-lg bg-white rounded overflow-hidden p-0">
          <div className="row g-0">
            {/* Left Side - Image with Overlay Text */}
            <div className="col-12 col-md-5">
              <div
                className="w-100 h-100"
                style={{
                  backgroundImage: 'url("/images/Careers/career-inquiry-form.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '300px',
                }}
              />
            </div>

            {/* Right Side - Form */}
            <div className="col-12 col-md-7 p-4 p-md-5" id="applyform">
              <h5 className="main-sub-ti">Career Form</h5>
              <p className="mb-4">
                Please fill out the form below and our team will get back to you shortly.
              </p>

              <form>
                <iframe
                  src="https://connect.irepute.in/file/sb-engg-career/"
                  width="100%"
                  height="430"
                  frameBorder="0"
                  style={{ border: 'none' }}
                  allowFullScreen
                  loading="lazy"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
