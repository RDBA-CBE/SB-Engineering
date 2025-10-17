import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Smartphone } from "lucide-react";


<ul className='footer-links list-unstyled'>
  <li>
    <Link href='/services'>Services</Link>
  </li>
  <li>
    <Link href='/why-sb-engineers'>Why SB Engineers</Link>
  </li>
  <li>
    <Link href='/projects'>Projects</Link>
  </li>
  <li>
    <Link href='/about-us'>About Us</Link>
  </li>
  <li>
    <Link href='/get-a-quote'>Get a Quote</Link>
  </li>
  <li>
    <Link href='/careers'>Careers</Link>
  </li>
</ul>;

export default function Footer25() {
  return (
    <footer className=' footer-section footer25'>
      <div className='container p-0'>
        <div className='row g-0'>
          {/* Left Yellow Section */}
          <div className='col-lg-3 footer-yellow d-flex flex-column justify-content-center align-items-start p-5 footer1'>
            <img
              src='/images/header-logo.png'
              alt='SB Engineers Logo'
              className='footer-logo mb-3'
            />
            <h4 className='footer-heading mb-3'>Get Started With Us</h4>
            <p className='footer-text mb-4'>
              Irrespective of the stage of your projects, our expert team can
              guide you through every step and deliver end-to-end design
              solutions that meet global standards.
            </p>
            <Link href='/contact'>
              <button className='footer-button'>Reach Us Now</button>
            </Link>
          </div>

          {/* Right Black Section */}
          <div className='col-lg-9 footer-black px-5 pt-5 pb-0'>
            <div className='row'>
              {/* About */}
              <div className='col-md-5 mb-4 pt-0 pe-5'>
                <h5 className='footer-subheading'>SB Engineers</h5>
                <p className='footer-info'>
                  {/* SB Engineers is a premier engineering design firm dedicated to
                  delivering comprehensive solutions for a diverse range of
                  structural projects. */}
                SB Engineers provides specialized engineering design and consulting services covering all aspects of Architectural, Structural, and MEP projects. Our integrated approach combines Structural Engineering, Mechanical, Electrical, and Plumbing design with advanced Tekla Detailing to deliver optimized, cost-effective, and sustainable solutions.
                </p>
              </div>

              {/* Links */}
              <div className='col-md-3 mb-4 pt-0 pt-md-0'>
                <h5 className='footer-subheading'>Quick Links</h5>
                <ul
                  className='footer-links list-unstyled'
                  style={{ color: '#fff' }}
                >
                  <li>
                    <Link href='/about-us' style={{ color: '#fff' }}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/service'
                      style={{ color: '#fff' }}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href='/why-sb-engineers' style={{ color: '#fff' }}>
                      Why SB Engineers
                    </Link>
                  </li>
                  <li>
                    <Link href='/project-portfolio' style={{ color: '#fff' }}>
                      Projects
                    </Link>
                  </li>
                  
                  <li>
                    <Link href='/contact' style={{ color: '#fff' }}>
                      Get a Quote
                    </Link>
                  </li>
                  <li>
                    <Link href='/careers' style={{ color: '#fff' }}>
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className='col-md-4 mb-4 pt-0 pt-md-0'>
                <h5 className='footer-subheading'>Quick Contact</h5>
                <p className='footer-info'>
                  2, 4th West Cross Road,<br /> Gandhi Nagar, Katpadi,                 
                  <br/>Vellore - 632006, Tamil Nadu.
                  <br/>Ph: 0416-4237307
                </p>
                <p className='footer-info'>
                  2, 7th St Ext, 3rd Floor, D.479, <br />7th St Extension,                  
                  Gandhipuram, <br/>Coimbatore - 641012, Tamil Nadu.
                   <br/>Ph: 0422-4577307
                </p>
                 <h5 className='footer-subheading'>For Queries</h5>
                <p className='footer-mobile'>
  <Smartphone style={{ color: '#fdd104', marginRight: '8px' }} />
  <a href="tel:0422-4577307" style={{ color: '#fff' }}>+91 63807 63877</a>
</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
      </div>
      <div className='footer-bottom  py-4 '>
        <div className='container'>
          Copyright 2025 © SB Engineers. Concept by <a href="https://irepute.in/" target='_blank'>repute</a>.
        </div>
      </div>
    </footer>
  );
}
