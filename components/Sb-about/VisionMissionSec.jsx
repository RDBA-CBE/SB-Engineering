import React from 'react';

export default function VisionMissionSec() {
  return (
    <div
      className='section-full content-inner-1 overlay-black-dark about-8-service bg-img-fix pb-5 mt-5 mb-4'
      style={{ backgroundImage: 'url(/images/background/vision-mission-manage-bg.jpg)' }}
    >
          <div className='container'>
        <div className='row text-white'>
          <div className='row equal-height' style={{ paddingRight: 0 }}>
            <div className='col-lg-6 col-md-6 m-b30'>
              <div className='icon-bx-wraper bx-style-1 p-a30 center'>
                <div className='icon-lg text-white m-b20 d-flex justify-content-center align-items-center'>
                  <img
                    src='/images/about-us/vision.png'
                    alt='Mission Icon'
                    className='w-8 h-8'
                  />
                </div>
                <div className='icon-content'>
                  <h5 className='dlab-tilte text-uppercase'>Vision</h5>
                  <p>
                    {' '}
                    To gain global recognition as a leading engineering design
                    firm, distinguished by our expertise, innovation and
                    customer-centric approach in building sustainable and iconic
                    structures.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-lg-6 col-md-6 m-b30'>
              <div className='icon-bx-wraper bx-style-1 p-a30 center'>
                <div className='icon-lg text-white m-b20 flex items-center justify-center'>
                  <img
                    src='/images/about-us/mission.png'
                    alt='Factory Icon'
                    className='w-8 h-8'
                  />
                </div>
                <div className='icon-content'>
                  <h5 className='dlab-tilte text-uppercase'>Mission</h5>
                  <p>
                    {' '}
                    To deliver innovative engineering solutions that enhance the
                    built environment, while prioritizing safety, sustainability
                    and functionality. We strive to exceed client expectations
                    through our steadfast commitment to quality, integrity and
                    professionalism.{' '}
                  </p>
                </div>
              </div>
            </div>
         
          </div>
       
          <h2 className='text-center'>
            At SB Engineers, leadership is all about direct engagement, guiding
            our team, supporting our clients and delivering success at every
            stage.
          </h2>
        </div>
      </div>
    </div>
  );
}
