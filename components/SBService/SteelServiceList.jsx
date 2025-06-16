import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Service({ SteelServiceContent })  {
  return (
    <div className='section-full content-inner whySbEng pt-0'>
      <div className='container'>
        {/* <div className='text-center'>
          <h2 className='main-ti'>Services</h2>
          <p>Backed by decades of experience and adherence to global benchmarks.</p>
        </div> */}
        <div className='section-content row'>
          {SteelServiceContent.map((service, index) => (
            <div
              key={index}
              className='col-md-4 col-lg-4 col-sm-12 service-box style3 wow fadeInUp d-flex align-items-stretch'
              data-wow-duration='2s'
              data-wow-delay={service.delay}
            >
              <div className='icon-bx-wraper d-flex flex-column w-100 p-4' data-name={service.name}>
                {/* Icon */}
                <div className='icon-lg d-flex justify-content-center align-items-center mb-3'>
                  <a href='#' className='icon-cell d-flex justify-content-center align-items-center'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className='img-fluid'
                      // style={{ maxWidth: '60px', height: 'auto' }}
                    />
                  </a>
                </div>

                {/* Content */}
                <div className='icon-content flex-grow-1 text-center'>
                  <h2 className='main-sub-ti m-t0 mb-2'>{service.title}</h2>
                  <p>{service.description}</p>
                </div>

                {/* Button */}
                <div className='mt-3 text-center'>
                  <Link
                    href={`/${service.link}`}
                    className='site-button btnhover11 readmore-link d-inline-block'
                  >
                    <span className='icon-div-pri'>
                      <ArrowRight className='icon-sm-new' style={{ color: '#000' }} />
                    </span>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
