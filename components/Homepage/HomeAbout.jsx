import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
export default function HomeAbout() {
  return (
    <div className='section-full content-inner const-about home-about'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-1 '>
            <div
              className='radius-sm m-b30 home-about-img'
              style={{ borderRadius: '3px' }}
            >
              <Image
                alt=''
                src='/images/home/about/img.png'
                width='600'
                height='722'
                style={{ borderRadius: '3px' }}
              />
              <div className='home-about-cont'>
                <h4 className='home-about__subtitle '>40</h4>
                <h5 className='home-about__title '>Years Of Experience!</h5>
                <a href='/about-us'>
                  <span className='icon-div'>
                    <ArrowRight className='icon-sm-new ' />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-2 '>
            <div className='content-bx1'>
              <div className='section-head style2'>
                <p className='upper-cap'>Engineered for excellence</p>
                <h2 className='title main-ti'>About SB Engineers</h2>
                <p>
                  SB Engineers is a premier engineering design firm recognized
                  for delivering end-to-end solutions across a wide spectrum of
                  structural and MEP projects. Driven by knowledge and
                  experience, our expert team ensures every project is executed
                  with precision and confidence.
                </p>

                <div className=' bg-white '>
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-6 col-sm-12'>
                        <div className='icon-bx-wraper left d-flex align-items-center'>
                          <div className='icon-bx-md me-3'>
                            <a href='#' className='icon-cell'>
                              <i className='flaticon-factory icon-new' />
                            </a>
                          </div>
                          <div className='icon-content'>
                            <h5 className='dlab-tilte text-capitalize icon-ti'>
                              Smart Solutions for <br />
                              Long-Term Impact
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div className='col-md-6 col-sm-12'>
                        <div className='icon-bx-wraper left d-flex align-items-center'>
                          <div className='icon-bx-md me-3'>
                            <a href='#' className='icon-cell'>
                              <i className='flaticon-factory icon-new' />
                            </a>
                          </div>
                          <div className='icon-content'>
                            <h5 className='dlab-tilte text-capitalize icon-ti'>
                              Precision-Driven <br />
                              Workflows Quality Assured
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className='m-b50'>
                  We have successfully executed numerous projects and built
                  enduring client relationships based on trust and mutual
                  growth.
                </p>

                <Link
                  href={`/about-us`}
                  className='btn__secondary_in  text-decoration-none'
                  // style={{zIndex:"1000"}}
                >
                  <span className='icon-div-pri'>
                    <ArrowRight className='icon-sm-new ' />
                  </span>
                  More about Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
