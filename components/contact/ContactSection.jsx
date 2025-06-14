import { ArrowRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MailIcon, MapPin, LucidePhone } from 'lucide-react';

const ContactSection = () => {
  const officeData = [
    {
      title: 'Vellore Office:',
      img: './images/project/image-vellore.png',
      email: 'admin@sbecc.in , sbengineers23@gmail.com',
      address: (
        <>
          2, 4th West Cross Road, Gandhi Nagar, Katpadi,
          <br />
          Vellore - 632006, Tamil Nadu
        </>
      ),
      phone: '0416-4237307',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3721358312505!2d79.13272787505113!3d12.948022815394857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad476051da6c65%3A0x24822dd40bd0c339!2s2%2C%204th%20West%20Cross%20Rd%2C%20Suthanthira%20Ponvizha%20Nagar%2C%20Gandhinagar%20West%2C%20Gandhi%20Nagar%2C%20Vellore%2C%20Tamil%20Nadu%20632006!5e0!3m2!1sen!2sin!4v1749724730873!5m2!1sen!2sin',
    },
    {
      title: 'Coimbatore Office:',
      img: './images/project/image-coimbatore.png',
      email: 'admin@sbecc.in , sbengineers23@gmail.com',
      address: (
        <>
          2, 7th St Ext, 3rd Floor, D.479, 7th St Extension,
          <br />
          Gandhipuram, Coimbatore - 641012
        </>
      ),
      phone: '0422-4577307',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.2652808082543!2d76.96106167401256!3d11.017250092156866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857fbef29072b%3A0x96a963e4f988f396!2sGandhipuram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641012!5e0!3m2!1sen!2sin!4v1718183951492!5m2!1sen!2sin',
    },
  ];
  return (
    <>
      <div className='container contact-card py-5 '>
        <div className='container office-section'>
          <div className='row'>
            {officeData.map((office, index) => (
              <div className='col-md-6 office-box' key={index}>
                <div className='office-img-wrapper mb-3'>
                  <div className='d-felx align-items-start'>
                    <Image
                      src={office?.img}
                      alt={office.title}
                      className='img-fluid office-img'
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <div className='office-details f-16'>
                  <h4 className='office-title fw-bold d-flex align-items-center mb-4'>
                    {office.title}
                  </h4>
                  <div className='footer-contact__item'>
                    <p className=' d-flex mb-3 '>
                      <div className=' footer-contact__icon'>
                        <MailIcon style={{ width: '18px' }} />
                      </div>
                      {/* <strong
                        className='fw-bold me-2'
                        style={{ width: '52px' }}
                      >
                        Email:
                      </strong> */}
                      <div>
                        {office.email.split(',').map((email, i) => (
                          <React.Fragment key={i}>
                            <a href={`mailto:${email.trim()}`}>
                              {email.trim()}
                            </a>
                            {i < office.email.split(',').length - 1 && ', '}
                          </React.Fragment>
                        ))}
                      </div>
                    </p>
                  </div>
                  <div className='footer-contact__item'>
                    <p className='d-flex mb-2'>
                      <div className='footer-contact__icon'>
                        <MapPin style={{ width: '18px' }} />
                      </div>
                      {/* <strong
                        className='fw-bold me-2'
                        style={{ width: '52px' }}
                      >
                        Address:
                      </strong> */}
                      <div>{office.address}</div>
                    </p>
                  </div>
                  <div className='footer-contact__item'>
                    <p className='d-flex mb-1'>
                      <div className='footer-contact__icon'>
                        <LucidePhone style={{ width: '18px' }} />
                      </div>
                      {/* <strong
                        className='fw-bold me-2'
                        style={{ width: '52px' }}
                      >
                        Phone:
                      </strong> */}
                      <div>
                        <a href={`tel:${office.phone.trim()}`}>
                          {office.phone}
                        </a>
                      </div>
                    </p>
                  </div>
                  <div className='footer-contact__map mt-3'>
                    <iframe
                      title={`Map of ${office.title}`}
                      src={office.mapUrl}
                      width='80%'
                      height='250'
                      style={{ border: 0 }}
                      allowFullScreen=''
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='row no-gutters  rounded overflow-hidden justify-content-center mt-4'>
          <div className='col-12 shadow-lg bg-white p-sm-4 p-md-4 p-xl-5  p-3rounded'>
            <div className='container-fluid'>
              <div className='row  row-gap-3'>
                {/* Left Side - Image with Overlay Text */}
                <div className='col-md-5 p-0 bg-white'>
                  <div className='contact-left' style={{ backgroundImage: `url("/images/project/contact-inquiry-form.jpg")` }}></div>
                  {/* <div className="contact-overlay text-white p-4">
            <h5 className="fw-bold mb-3">Leading Way In Building & Civil Construction!</h5>
            <p className="mb-3">
              Yet those embrace change are thriving, building bigger, better, faster & stronger products than ever before!
            </p>
            <p className="signature mb-0">Jeremy Wade</p>
            <small>- Founder</small>
          </div> */}
                </div>

                {/* Right Side - Form */}
                <div className='col-md-7 bg-white ps-2 ps-0  ps-sm-3 ps-md-4 ps-lg-5'>
                  <h5 className='main-sub-ti '>Inquiry Form</h5>
                  <p className=' mb-4'>
                    Please fill out the form below and our team will get back to
                    you shortly.
                  </p>

                  <form>
                    <iframe
                      src='https://connect.irepute.in/file/sb-engg-career/'
                      width='100%'
                      height='430'
                      frameBorder='0'
                      style={{ border: 'none' }}
                      allowFullScreen
                      loading='lazy'
                    />

                    {/* <div className='row mb-3'>
                      <div className='col-md-6 mb-3 mb-md-0'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Name'
                        />
                      </div>
                      <div className='col-md-6'>
                        <input
                          type='email'
                          className='form-control'
                          placeholder='Email'
                        />
                      </div>
                    </div>
                    <div className='row mb-3'>
                      <div className='col-md-6 mb-3 mb-md-0'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Phone'
                        />
                      </div>
                      <div className='col-md-6'>
                        <select className='form-select'>
                          <option>Select Your Service</option>
                          <option>Construction</option>
                          <option>Renovation</option>
                        </select>
                      </div>
                    </div>
                    <div className='mb-3'>
                      <textarea
                        className='form-control pt-2'
                        rows='3'
                        placeholder='Additional Details!'
                      />
                    </div>
                    <Link
                      href={`/portfolio-grid-2`}
                      className='btn btn__secondary_in  text-decoration-none w-100 mt-4'
                      // style={{width:"100%"}}
                    >
                      <span className='icon-div-pri'>
                        <ArrowRight className='icon-sm-new ' />
                      </span>
                      Submit Request
                    </Link> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='map-section container-fluid p-0 '>
        <div className='map-responsive'>
          <iframe
            title='Google Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.46689813165!2d106.70042391480193!3d10.762622792327692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3e0f0b317b%3A0x50f9c38a8e4a1a1a!2sHo%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1618304014566!5m2!1sen!2s'
            width='100%'
            height='450'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div> */}
    </>
  );
};

export default ContactSection;
