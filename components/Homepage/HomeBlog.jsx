'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

export default function HomeBlog() {
  const serviceContent = [
    {
      title: 'Architectural <br/> Design',
      img: '/images/home/services/architectural-des.webp',
      cap: 'Futuristic architectural solutions blending aesthetics, functionality, innovation, and sustainability seamlessly across every project stage.',
      link: 'architectural-design',
    },
    {
      title: 'Structural <br/> Engineering',
      img: '/images/home/services/structural-ng.webp',
      cap: 'Reliable structural engineering that ensures safety, durability, and efficiency through cutting-edge analysis, design, and advanced construction techniques.',
      link: 'structural-engineering',
    },
    {
      title: 'MEP <br/> Engineering',
      img: '/images/home/services/mep-engineer.webp',
      cap: 'Integrated MEP (Mechanical, Electrical and Plumbing) systems engineered for energy efficiency, safety, performance and seamless building functionality.',
      link: 'mep-engineering',
    },
     {
      title: 'Steel & Rebar <br/>Detailing (Tekla)',
      img: '/images/home/services/steel-rebal-detailing.webp',
      cap: 'Steel & Rebar Detailing (Tekla) delivering precision, accuracy, and constructability through 3D modeling for efficient fabrication, optimization, and seamless coordination.',
      link: 'steel-&-rebar-detailing',
    },
      {
      title: 'PMC <br/> Services',
      img: '/images/home/services/pmc-services.webp',
      cap: 'Project Management & Construction Services ensuring on-time delivery, cost efficiency, and superior quality through strategic planning, seamless execution, and expert supervision.',
      link: 'project-management',
    },
     {
      title: 'BIM <br/>Services',
      img: '/images/home/services/bim-services.webp',
      cap: 'Building Information Modeling (BIM) enables visualization, coordination, and collaboration, ensuring accuracy, efficiency, and streamlined construction from design to completion.',
      link: 'building-information-modeling',
    },
  ];
  return (
    <div className='section-full bg-white content-inner home-blog'>
      <div className='container '>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='text-center'>
              <p className='upper-cap'>Our clients who trust us</p>
              <h2 className='main-ti'>Our engineering services transcend expectations</h2>
            </div>

            {/* Event post Carousel with no margin */}
     <div className='section-content box-sort-in m-b30 button-example mt-5'>
  <div className='service-grid'>
    {serviceContent.map((elm, i) => (
      <div className='item' key={i}>
        <div className='dlab-box h-100'>
          <div className='dlab-media h-100'>
            <a href='#'>
              <Image alt='' src={elm?.img} width='700' height='500' />
            </a>
          </div>

          <div className='dlab-info p-a20 bg-white h-100'>
            <h4 className='main-sub-ti m-t0'>
              <Link href={elm.link} className='text-decoration-none'>
                <span dangerouslySetInnerHTML={{ __html: elm.title }} />
              </Link>
            </h4>

            <p className='mb-4 sub-des'>{elm?.cap}</p>

            <Link href={elm.link} className='link a-new'>
              <span className='icon-div'>
                <ArrowRight className='icon-sm-new' />
              </span>
              Read More
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


            <div className='text-center pt-4'>
              <Link
                href={`/service`}
                className='btn__secondary_in  text-decoration-none'
                // style={{zIndex:"1000"}}
              >
                <span className='icon-div-pri'>
                  <ArrowRight className='icon-sm-new ' />
                </span>
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Event post Carousel with no margin END */}
    </div>
  );
}
