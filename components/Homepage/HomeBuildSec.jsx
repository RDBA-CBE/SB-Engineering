import React from 'react';
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const HomeBuildSec = () => {
  return (
    <section className="build-section container-fluid">
      <div className="row">
        {/* Left Side */}
        <div className="col-12 col-sm-6 col-lg-6 col-md-12 build-text-area py-5 build-content-sec">
          <h2 className="main-ti ">
            Powered by modern technology and deep domain expertise <br /> and deep domain expertise.
          </h2>
          <p className=" mb-4">
            From rigorous quality control to cutting-edge technology, our solutions are designed to last and built to perform.
          </p>

          <div className="build-wrp mt-3 mb-3">
            <div className="build-box-d">
              <div className="build-box px-2 py-4 shadow-sm">
                <img src="/images/home/we-help/icon1.png" alt="Integrity" className="mb-2" />
                <h5 className="mb-0 fw-semibold">Transparent <br /> workflows</h5>
              </div>
            </div>
            <div className="build-box-d">
              <div className="build-box  px-2 py-4 shadow-sm">
                <img src="/images/home/we-help/icon3.png" alt="Collaboration" className="mb-2" />
                <h5 className="mb-0 fw-semibold">Stringent  <br /> quality control </h5>
              </div>
            </div>
            <div className="build-box-d">
              <div className="build-box  px-2 py-4 shadow-sm">
                <img src="/images/home/we-help/icon2.png" alt="Quality Control" className="mb-2" />
               
                <h5 className="mb-0 fw-semibold">Collaborate <br /> for success</h5>
              </div>
            </div>
          </div>

          <p className="build-subdesc mb-5 mt-4">
            We listen, adapt and co-create with our clients to deliver high-performance solutions aligned with their project goals.
          </p>

         
                           <Link
                href={`/about-us`}
                className="btn__secondary_pri text-decoration-none"
                
              >
                 <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new " style={{color:"#000"}}/>
                                </span>
                Know More
              </Link>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 col-md-12 build-image-area p-0">
            <div style={{height:"100%", }}>
                <img src="/images/home/we-help/img.jpg" alt="Future Planning" className=" w-100 h-100 object-fit-cover" />
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default HomeBuildSec;
