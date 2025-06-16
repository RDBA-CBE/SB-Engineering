import React from "react";


const ServiceBanner = () => {
  return (
    <div className="projectBanner-wrapper">
      <div className="projectBanner-parallax" style={{ backgroundImage: 'url(/images/about/event/why-sb-engg-banner-image.jpg)'}}>
        <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
          <h1 className="projectBanner-title">Services</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb projectBanner-breadcrumb">
              <li className="breadcrumb-item">
                <a href="/" className="text-white">Home</a>
              </li>
              
              <li className="breadcrumb-item active text-white" aria-current="page">
               <a href="/why-sb-engineers" className="text-white">Service</a> 
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
