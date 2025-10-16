import { ArrowRight, HardHat } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ManagementSec = () => {
  return (
    <section className='construction-section container py-5'>
      <div className='row align-items-center'>
        {/* Left Content */}
        {/* <div className="col-lg-6 mb-4 mb-lg-0">
<p className="upper-cap">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p> */}
        <h2 className='main-ti fw-bold mb-4' style={{textAlign:"center"}}>
         Our Management
        </h2>

             </div>

      <div className='row align-items-center'>
         <div className='col-lg-5 position-relative'>
          <div>
            <img
              src='/images/about/management.webp'
              alt='Construction Workers'
              className='img-fluid w-100 rounded shadow'
            />
           
          </div>
        </div>
        <div className='col-lg-7'>
          <div>
            <p className='mb-3 text-muted'>
             Mr. G.P. Elancheliyan, Managing Director of SB Engineers, brings over 22 years of extensive experience in structural and civil engineering. Holding a Master’s degree in Structural Engineering (M.E.), he has built a distinguished career delivering complex, high impact projects across India and the Middle East, particularly in Oman.
            </p>
            <p className='text-muted'>
             A trained Structural Engineer, Mr. Elancheliyan possesses deep expertise in the design, analysis, detailing, and supervision of structures. His leadership ensures that SB Engineers consistently upholds technical excellence while providing safe, cost efficient, and practical engineering solutions tailored to real world construction demands.
            </p>
            <p className='text-muted'>
            Under his stewardship, SB Engineers has earned a reputation for offering a comprehensive range of engineering consultancy services from concept to construction, anchored in structural engineering best practices and multidisciplinary collaboration.
            </p>
            <p className='text-muted'>As Managing Director, Mr. Elancheliyan leads SB Engineers with a clear vision to deliver innovative, sustainable, and cost effective engineering solutions. His strategic direction has positioned SB Engineers as a trusted partner in shaping modern infrastructure, renowned for precision, reliability, and engineering excellence.</p>

          
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default ManagementSec;
