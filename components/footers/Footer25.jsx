import React from 'react';
import Link from 'next/link';

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
              <div className='col-md-5 mb-4 pt-5 pe-5'>
                <h5 className='footer-subheading'>SB Engineers</h5>
                <p className='footer-info'>
                  SB Engineers is a premier engineering design firm dedicated to
                  delivering comprehensive solutions for a diverse range of
                  structural projects.
                </p>
              </div>

              {/* Links */}
              <div className='col-md-3 mb-4 pt-0 pt-md-5'>
                <h5 className='footer-subheading'>Quick Links</h5>
                <ul
                  className='footer-links list-unstyled'
                  style={{ color: '#fff' }}>
                  <li>
                    <Link
                      href='/architectural-design'
                      style={{ color: '#fff' }}>
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
                    <Link href='/about-us' style={{ color: '#fff' }}>
                      About Us
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
              <div className='col-md-4 mb-4 pt-0 pt-md-5'>
                <h5 className='footer-subheading'>Quick Contact</h5>
                <p className='footer-info'>
                  4th West Cross Road, Gandhi Nagar,
                  <br />
                  Katpadi Vellore, Tamilnadu.
                </p>
                <p className='footer-info'>
                  If you have any questions or need help,
                  <br />
                  feel free to contact with our team.
                </p>
                <p className='footer-phone'>📞 +91-9787447307</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
      </div>
      <div className='footer-bottom  py-4 '>
        <div className='container'>
          Copyright 2025 © SB Engineers. Concept by repute.
        </div>
      </div>
    </footer>
  );
}
