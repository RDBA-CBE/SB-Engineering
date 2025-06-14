import { ArrowRight, HardHat } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const AboutSec = () => {
  return (
    <section className='construction-section container py-5'>
      <div className='row align-items-center'>
        {/* Left Content */}
        {/* <div className="col-lg-6 mb-4 mb-lg-0">
<p className="upper-cap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}
        <h2 className='main-ti fw-bold mb-4'>
          Driven by world-class technology, we deliver exactly what our client
          needs cost-efficiently.
        </h2>

        {/* </div> */}

        {/* Right Image Content */}
        {/* <div className="col-lg-6 ">

                    <div className="d-flex mb-4">
            <div className="me-5 ">
              <h3 className="text-warning fw-bold mb-0 main-ti num" >6,154</h3>
              <p className="stats-caption">Projects And Residentials <br /> Completed in 2020</p>
            </div>
            <div className="">
              <h3 className="text-warning fw-bold mb-0 main-ti num">2,512</h3>
              <p className="stats-caption">Qualified Employees And <br /> Workers With Us</p>
            </div>
          </div>
         
        </div> */}
      </div>

      <div className='row align-items-center'>
        <div className='col-lg-6'>
          <div>
            <p className='mb-3 text-muted'>
              SB Engineers is one of the most trusted engineering design and
              consulting companies delivering end-to-end solutions for a broad
              spectrum of structural and MEP projects. We specialize in
              delivering integrated design and detailing services in
              Architectural Design, Structural Engineering, Mechanical,
              Electrical, Plumbing and Tekla Detailing Services.
            </p>
            <p className='text-muted'>
              Our team consist of competent professionals with deep expertise in
              the field who have helped us consistently deliver projects that
              exceed client expectations, while cultivating long-term business
              relationships and strategic growth. We start our process by
              understanding the unique needs of each project and ensure that
              every solution we provide is practical, cost-effective and aligned
              with industry standards.
            </p>
            <p className='text-muted'>
              Our services are tailored to meet our clients' objectives,
              ensuring accuracy, quality and efficiency. This helps our business
              grow and build long-term relationships between the company,
              clients and engineers. Powered by advanced technology and a
              future-forward mindset, SB Engineers is committed to delivering
              excellence in every phase of design and execution.
            </p>

            {/* <div className="row mt-4 mb-3">
            <div className="col-sm-6">
              <ul className="list-unstyled construction-list">
                <li>✔ Quality Control System</li>
                <li>✔ 100% Satisfaction Guarantee</li>
                <li>✔ Highly Professional Staff</li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="list-unstyled construction-list">
                <li>✔ Unrivalled Workmanship</li>
                <li>✔ Accurate Testing Processes</li>
                <li>✔ Professional and Qualified</li>
              </ul>
            </div>
          </div> */}

            {/* <Link
                href={`/portfolio-grid-2`}
                className="btn__secondary_in  text-decoration-none "
                // style={{zIndex:"1000"}}
              >
                 <span className="icon-div-pri">
                                    <ArrowRight className="icon-sm-new "/>
                                </span>
                More About Us
              </Link> */}
          </div>
        </div>
        <div className='col-lg-6 position-relative'>
          <div>
            <img
              src='/images/about/driven-by-world.jpg'
              alt='Construction Workers'
              className='img-fluid w-100 rounded shadow'
            />
            <div className='join-team-box bg-warning text-white p-4 text-center'>
              <div className='mb-2' style={{ textAlign: 'left' }}>
                <HardHat style={{ width: '50px', height: '100px' }} />
                <p className='mb-2 fw-bold' style={{ fontWeight: '700' }}>
                  Join Us, Be Part <br /> Of Our Team!
                </p>
                <span className='d-inline-block bg-white text-warning icon p-2'>
                  ➜
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
